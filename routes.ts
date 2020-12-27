import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts } from "./controllers/products.ts";

const router = new Router();

router.get("/", getProducts);

export default router;
