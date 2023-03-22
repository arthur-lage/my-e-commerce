import { FastifyInstance } from "fastify";

import { productController } from "../controllers";

async function productRoutes(app: FastifyInstance) {
  app.get("", productController.getProductsByPage);
  app.get("/:id", productController.getProductById);
  app.post("", productController.createProduct);
}

export { productRoutes };
