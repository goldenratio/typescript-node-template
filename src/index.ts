import 'dotenv/config';
import { add } from './util.js';

console.log(`env: ${process.env['NODE_ENV']}`);
console.log(add(40, 2));
