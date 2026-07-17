/**
 * ============================================================================
 * Express Application
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Creates and configures the Express application.
 *
 * RESPONSIBILITIES
 * ----------------
 * ✓ Register global middleware
 * ✓ Configure request parsing
 * ✓ Enable CORS
 * ✓ Register application routes
 * ✓ Expose the Express instance
 *
 * NOTE
 * ----
 * This file DOES NOT start the HTTP server.
 * That responsibility belongs to server.ts.
 *
 * ============================================================================
 */

import express from 'express';

import cors from 'cors';

const app = express();

/**
 * ============================================================================
 * Global Middleware
 * ============================================================================
 */

/**
 * Enable Cross-Origin Resource Sharing.
 *
 * During development we'll allow requests
 * from any origin.
 *
 * Later we'll restrict this to our
 * mobile application and production domains.
 */
app.use(cors());

/**
 * Parse incoming JSON requests.
 */
app.use(express.json());

/**
 * Parse URL encoded form requests.
 */
app.use(
  express.urlencoded({
    extended: true,
  }),
);

/**
 * ============================================================================
 * Health Check
 * ============================================================================
 *
 * Used to verify that the backend is running.
 *
 * GET /
 */

app.get('/', (_request, response) => {
  response.status(200).json({
    success: true,

    message: 'Pamoja Chama Backend is running.',

    version: '1.0.0',
  });
});

/**
 * ============================================================================
 * 404 Handler
 * ============================================================================
 */

app.use((_request, response) => {
  response.status(404).json({
    success: false,

    message: 'Endpoint not found.',
  });
});

export default app;