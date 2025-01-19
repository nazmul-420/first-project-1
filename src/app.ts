import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRouters } from "./app/config/modules/students/student.route";

const app: Application = express();
// const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1/students", StudentRouters);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get("/", getAController);

export default app;
