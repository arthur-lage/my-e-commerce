import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { hash, verify } from "argon2";

import { fastify } from "../";

import UserModel from "../models/UserModel";

export const authController = {
  async register(req: FastifyRequest, reply: FastifyReply) {
    const registerBody = z.object({
      name: z.string().min(2),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { name, email, password } = registerBody.parse(req.body);

    const hashedPassword = await hash(password);

    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const token = fastify.jwt.sign({
      name: user.name,
      email: user.email,
    });

    return reply.status(201).send({
      token,
    });
  },
  async login(req: FastifyRequest, reply: FastifyReply) {
    const loginBody = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { email, password } = loginBody.parse(req.body);

    try {
      const currentUser = await UserModel.findOne({
        email,
      });

      if (!currentUser) {
        throw new Error("Invalid credentials.");
      }

      const doesPasswordsMatch = await verify(currentUser.password, password);

      if (!doesPasswordsMatch) {
        throw new Error("Invalid credentials.");
      }

      const token = fastify.jwt.sign({
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
      });

      return reply.status(200).send({
        token,
      });
    } catch (error) {
      reply.send(error);
    }
  },
};
