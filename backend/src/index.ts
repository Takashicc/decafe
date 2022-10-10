import express from "express";
import router from "./router";
import cors from "cors";

const app = express();
app.use(express.json());

const corsOptions: cors.CorsOptions = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOptions));
app.use("/api/v1", router);

const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server started on 127.0.0.1:${PORT}`);
});
