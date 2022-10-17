import express, { Request, Response, NextFunction } from "express";
import router from "./router";
import cors from "cors";
import { errorHandler } from "./error/ErrorHandler";

const app = express();
app.use(express.json());

const corsOptions: cors.CorsOptions = {
  origin: ["http://localhost:3000", "https://decafe.vercel.app"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/api/v1", router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res);
  next();
});

const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server started on 127.0.0.1:${PORT}`);
});
