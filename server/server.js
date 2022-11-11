import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import Connect from "./database/db.js";
import Route from "./routes/route.js";

//mongodb data import function
import { companyDataInsertion } from "./dataInsertion.js";
import { adsDataInsertion } from "./dataInsertion.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Route);

//MongoDB connection
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mycluster.avivtrp.mongodb.net/SearchBar?retryWrites=true&w=majority`;

Connect(URL);

const PORT = 8000;
app.listen(
  PORT,
  () => {
    console.log(`server is live at ${PORT}`);
  }
  // ,companyDataInsertion(),
  // adsDataInsertion()
);
