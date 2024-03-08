import { FastifyRequest, FastifyReply } from "fastify"
import { InserirClienteService } from "../services/InserirClienteService"

class InserirClienteController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const clienteService = new InserirClienteService()

    const cliente = await clienteService.execute()

    reply.send(cliente)
  }
}

export { InserirClienteController }
