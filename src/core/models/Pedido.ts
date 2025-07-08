import { Schema, model, Document } from 'mongoose';

export interface Pedido extends Document {
  usuarioId: string;
  produto: string;
  quantidade: number;
}

const pedidoSchema = new Schema<Pedido>(
  {
    usuarioId: { type: String, required: true },
    produto: { type: String, required: true },
    quantidade: { type: Number, required: true }
  },
  { timestamps: true }
);

export default model<Pedido>('Pedido', pedidoSchema);
