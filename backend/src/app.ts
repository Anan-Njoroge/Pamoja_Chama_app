import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';
import authRoutes from './modules/auth/auth.routes'

export const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get(
  '/',
  (_req, res) => {
    res.json({
      success: true,
      message:
        'Pamoja Chama Backend API',
    });
  },
);

app.use(errorHandler);