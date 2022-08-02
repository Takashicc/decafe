import express, { Router } from "express";

const app = express();
app.use(express.json());

const exampleRoute = Router();
exampleRoute.route("/").get((req, res) => {
  console.log("get request...");
  console.log(req);
  res.status(200).send({ sample: "text" });
});
app.use("/data", exampleRoute);

const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
