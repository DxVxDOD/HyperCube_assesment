import express, { type Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.use("/", (res: Response) => res.status(200).json("pong"));

app.get("/*", (_req, res) => {
  res.sendFile("/index.html", { root: "./dist" });
});
