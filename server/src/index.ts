import { config } from "dotenv";

import Fastify, { FastifyRequest } from "fastify";
import cors from "@fastify/cors";

import { authRoutes, productRoutes } from "./routes";
import { connectDatabase } from "./config/database";
import { FastifyReply } from "fastify";
import fastifyJwt from "@fastify/jwt";

config();

export const fastify = Fastify({
  logger: true,
});

fastify.register(cors);

fastify.register(productRoutes, {
  prefix: "/products",
});

fastify.register(authRoutes, {
  prefix: "/auth",
});

fastify.register(fastifyJwt, {
  secret: String(process.env.JWT_SECRET),
});

connectDatabase();

async function bootstrap() {
  try {
    await fastify.listen({
      port: 5000,
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

bootstrap();
