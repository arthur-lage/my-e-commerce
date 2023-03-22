import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import ProductModel from "../models/ProductModel";

export const productController = {
  async getProductsByPage(req: FastifyRequest, reply: FastifyReply) {
    const getProductsByPageParams = z.object({
      page: z.number().default(1),
      limit: z.number().default(25),
    });

    const { page, limit } = getProductsByPageParams.parse(req.query);

    const products = await ProductModel.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await ProductModel.count();

    return {
      products,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    };
  },

  async getProductById(req: FastifyRequest, reply: FastifyReply) {
    const getProductByIdParams = z.object({
      id: z.string(),
    });

    const { id } = getProductByIdParams.parse(req.params);

    const product = await ProductModel.findById(id);

    reply.status(200).send({
      product,
    });
  },

  async createProduct(req: FastifyRequest, reply: FastifyReply) {
    try {
      const createProductBody = z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
      });

      const { name, description, price } = createProductBody.parse(req.body);

      const product = new ProductModel({
        name,
        description,
        price,
      });

      product.save();

      reply.status(201).send();
    } catch (err) {
      console.error(err);
      throw new Error("Could not create product.");
    }
  },
};
