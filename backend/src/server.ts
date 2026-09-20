import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from './router/food.router';
import userRouter from './router/user.router';
import orderRouter from './router/order.router';
import { dbConnect } from "./configs/database.config";
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    "http://localhost:4200",
    origin:["https://foodmine-o11b.vercel.app/"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

export default app;
