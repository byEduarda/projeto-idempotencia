import mongoose from 'mongoose';
import 'dotenv/config';

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('Conectado ao MongoDB Atlas');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
    process.exit(1);
  }
}
