// Core Modules
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __filename
const __filename = fileURLToPath(import.meta.url);

// Then get __dirname from __filename
const __dirname = path.dirname(__filename);

// Export as ES6 module
export { __dirname as rootDir };
