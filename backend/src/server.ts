/**
 * ============================================================================
 * HTTP Server
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Starts the Express application.
 *
 * RESPONSIBILITIES
 * ----------------
 * ✓ Select the application port
 * ✓ Start the HTTP server
 * ✓ Log startup information
 * ✓ Handle startup failures
 *
 * NOTE
 * ----
 * This file should ONLY be responsible for bootstrapping the application.
 *
 * ============================================================================
 */

import app from './app';
import { env } from './config/env';

/**
 * ============================================================================
 * Server Configuration
 * ============================================================================
 */

/**
 * Server port.
 *
 * Reads the value from the environment when available,
 * otherwise falls back to port 3000.
 */
const PORT = env.port;

/**
 * ============================================================================
 * Start Server
 * ============================================================================
 */

try {
  app.listen(PORT, () => {
    console.log('');
    console.log('===================================================');
    console.log('🚀 Pamoja Chama Backend Started Successfully');
    console.log('===================================================');
    console.log(`Environment : ${env.nodeEnv}`);
    console.log(`Server URL  : http://localhost:${PORT}`);
    console.log('===================================================');
    console.log('');
  });
} catch (error) {
  console.error('');
  console.error('Failed to start the backend server.');
  console.error(error);
  process.exit(1);
}