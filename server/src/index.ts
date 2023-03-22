import { config } from "dotenv";
import Fastify from "fastify";
import { authRoutes, productRoutes } from "./routes";
import { connectDatabase } from "./config/database";

import cors from "@fastify/cors";

config();

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);

fastify.register(productRoutes, {
  prefix: "/products",
});

fastify.register(authRoutes, {
  prefix: "/auth",
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
