import pg from "pg";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

export const pool = new pg.Pool({
  host: DB_HOST,
  database: DB_DATABASE,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
});

// pool.query("SELECT NOW()").then((result) => {
//   console.log(result);
// });
