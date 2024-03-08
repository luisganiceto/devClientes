import prismaClient from "../prisma";

class InserirClienteService{
  async execute(){
    console.log("Rota Foi Chamada");

    return { ok : true }
  }
}

export { InserirClienteService }