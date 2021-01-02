import { v4 } from "https://deno.land/std@0.81.0/uuid/mod.ts";
import { Product } from "../types.ts";

let products: Product[] = [
  {
    id: "1",
    name: "product 1",
    description: "this is product one",
    price: 59.99,
  },
  {
    id: "2",
    name: "product 2",
    description: "this is product two",
    price: 29.99,
  },
  {
    id: "3",
    name: "product 3",
    description: "this is product three",
    price: 110.99,
  },
];

// @desc Get all products
// @route GET /
// deno-lint-ignore no-explicit-any
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// @desc Get single product
// @route GET /id
const getProduct = ({
  params,
  response,
}: {
  params: { id: string };
  // deno-lint-ignore no-explicit-any
  response: any;
}) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "no product found",
    };
  }
};

// @desc create Single product
// @route POST /
const createProduct = async ({
  request,
  response,
}: {
  // deno-lint-ignore no-explicit-any
  request: any;
  // deno-lint-ignore no-explicit-any
  response: any;
}) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const product: Product = await body.value;
    product.id = v4.generate();
    products.push(product);
    response.status = 201;
    response.body = {
      success: true,
      data: product,
    };
  }
};

// @desc update Single product
// @route PUT /
const updateProduct = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  // deno-lint-ignore no-explicit-any
  request: any;
  // deno-lint-ignore no-explicit-any
  response: any;
}) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    const body = await request.body();
    const updateData: {
      name?: string;
      description?: string;
      price?: number;
    } = await body.value;

    products = products.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    );

    response.status = 200;
    response.body = {
      success: true,
      data: updateProduct,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "no product found",
    };
  }
};

// @desc delete Single product
// @route DELETE /
const deleteProduct = ({
  params,
  response,
}: {
  params: { id: string };
  // deno-lint-ignore no-explicit-any
  response: any;
}) => {
  products = products.filter((p) => p.id !== params.id);
  response.body = {
    success: true,
    msg: "product removed",
  };
};

export { getProducts, getProduct, updateProduct, createProduct, deleteProduct };
