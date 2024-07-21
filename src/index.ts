import "dotenv/config";
import { add } from "./util.js";

// env usage
console.log(`server name: ${process.env.SERVER_NAME}`);
console.log(`env: ${process.env.NODE_ENV}`);
console.log(add(40, 2));

const a = 2;
console.log(a);
