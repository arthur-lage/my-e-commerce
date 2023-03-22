import { FastifyInstance } from "fastify";

async function authRoutes (app: FastifyInstance) {
  app.get("/", (req, reply) => {
  })
}

export { authRoutes }