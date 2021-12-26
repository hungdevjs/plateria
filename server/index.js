import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import routes from "./routes/index.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { autoIndex: true, autoCreate: true });

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB database connected successfully!")
);

process.setMaxListeners(Infinity);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));

app.get("/", (req, res) => res.send("Server is running OK"));

app.use("/api", routes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
