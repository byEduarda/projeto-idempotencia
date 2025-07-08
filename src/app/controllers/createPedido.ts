import { Request, Response } from 'express';
import Pedido from '../../core/models/Pedido';

export async function createPedido(req: Request, res: Response) {
  const { usuarioId, produto, quantidade, idempotenciaChave} = req.body;

  
if(!idempotenciaChave){
  return res.status(400).json({message: 'A idempotenciaChave é obrigatória'})
}

const existe = await Pedido.findOne({idempotenciaChave});
if(existe){
  return res.status(400).json({message: 'Já cadastrado!'});
}

const pedido = await Pedido.create({
    usuarioId,
    produto,
    quantidade,
    idempotenciaChave
  });


  return res.status(201).json(pedido);
}
