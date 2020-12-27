import { Product } from "../types.ts";

const products: Product[] = [
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

// @desc Get Single product
// @route GET /
// deno-lint-ignore no-explicit-any
const getProduct = ({ response }: { response: any }) => {
  response.body = "get single product";
};

// @desc create Single product
// @route POST /
// deno-lint-ignore no-explicit-any
const createProduct = ({ response }: { response: any }) => {
  response.body = "create product";
};

// @desc update Single product
// @route PUT /
// deno-lint-ignore no-explicit-any
const updateProduct = ({ response }: { response: any }) => {
  response.body = "update product";
};

// @desc delete Single product
// @route DELETE /
// deno-lint-ignore no-explicit-any
const deleteProduct = ({ response }: { response: any }) => {
  response.body = "delete product";
};

export { getProducts, getProduct, updateProduct, createProduct, deleteProduct };
