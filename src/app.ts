import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Root Server API
app.get("/", (req: Request, res: Response) => {
  res.send({
    status: 200,
    Message: "Server Running",
  });
});

export default app;
