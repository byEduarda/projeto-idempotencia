import express from 'express';
import { connectToDatabase } from './infra/database';
import pedidoRoutes from './app/routes/pedidoRoutes';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(pedidoRoutes);

connectToDatabase();

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
