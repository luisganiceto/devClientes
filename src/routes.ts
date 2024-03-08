import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify"
import { InserirClienteController } from "./controllers/InserirClienteController"

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })

  fastify.post("/cliente", async (request: FastifyRequest, reply: FastifyReply) => {
    return new InserirClienteController().handle(request, reply);
  })
}
