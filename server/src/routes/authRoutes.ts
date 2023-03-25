import { FastifyInstance } from "fastify";

import { authController } from "../controllers/authController";

async function authRoutes(app: FastifyInstance) {
  app.post("/", authController.register);
  app.post("/login", authController.login);
}

export { authRoutes };
