import path from "path";
import express from "express";
import router from "./router";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

app.use("/api/v1", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
