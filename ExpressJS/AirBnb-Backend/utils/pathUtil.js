// Core Modules
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's path
const __filename = fileURLToPath(import.meta.url);

// Get directory of this file
const __dirname = path.dirname(__filename);

// Go one level up to get the root of the project
const rootDir = path.resolve(__dirname, '..');

export { rootDir };
