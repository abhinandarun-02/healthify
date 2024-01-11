import express, { Request, Response } from "express";
import cors from 'cors';
import morgan from "morgan";
import helmet from "helmet";

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/server-status", (req:Request, res:Response) => {
    res.status(200).json({ message: "Server up and running!" });
});

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`));