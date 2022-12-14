import "dotenv/config";
import express from "express";
import proxy from "./proxy";

const app = express();
const PORT = process.env.PORT || 8080;

app.use("/", proxy);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
