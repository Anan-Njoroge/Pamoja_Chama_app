/**
 * ============================================================================
 * Express Application
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Configures the Express application.
 *
 * Responsibilities
 * ----------------
 * • Register global middleware
 * • Register API routes
 * • Register 404 middleware
 * • Register global error handler
 *
 * ============================================================================
 */

import express from 'express';

import cors from 'cors';

import helmet from 'helmet';

import compression from 'compression';

import morgan from 'morgan';

import router from './routes';

import { notFoundMiddleware } from './middleware/notFound.middleware';

import { errorMiddleware } from './middleware/error.middleware';

const app = express();

/**
 * --------------------------------------------------------------------------
 * Global Middleware
 * --------------------------------------------------------------------------
 */

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

/**
 * --------------------------------------------------------------------------
 * Health Check
 * --------------------------------------------------------------------------
 */

app.get('/health', (_req, res) => {

  res.status(200).json({

    success: true,

    message: 'Pamoja Chama Backend is running.',

  });

});

/**
 * --------------------------------------------------------------------------
 * API Routes
 * --------------------------------------------------------------------------
 */

app.use('/api', router);

/**
 * --------------------------------------------------------------------------
 * 404 Middleware
 * --------------------------------------------------------------------------
 */

app.use(notFoundMiddleware);

/**
 * --------------------------------------------------------------------------
 * Global Error Handler
 * --------------------------------------------------------------------------
 */

app.use(errorMiddleware);

export default app;