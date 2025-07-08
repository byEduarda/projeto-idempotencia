import { Router } from 'express';
import { createPedido } from '../controllers/createPedido';

const router = Router();

router.post('/pedidos', createPedido);

export default router;
