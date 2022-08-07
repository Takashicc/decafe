import path from "path";
import express from "express";
import router from "./router";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static("public/images"));
app.use("/shops/images", express.static("public/shops/images"));
app.use(express.static(path.join(__dirname, "../client")));

app.use("/api/v1", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
