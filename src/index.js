import express from "express";
import { PORT } from "./config.js";
import userRouter from "./routers/router.users.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(userRouter);

app.listen(PORT);
console.log("Server on sport ", PORT);
