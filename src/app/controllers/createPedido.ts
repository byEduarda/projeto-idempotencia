import { Request, Response } from 'express';
import Pedido from '../../core/models/Pedido';

export async function createPedido(req: Request, res: Response) {
  const { usuarioId, produto, quantidade, idempotenciaChave} = req.body;

  const pedido = await Pedido.create({
    usuarioId,
    produto,
    quantidade,
    idempotenciaChave
  });



  return res.status(201).json(pedido);
}
