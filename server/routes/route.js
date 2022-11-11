import express from "express";
import { getAds } from "../controller/controller.js";

const route = express.Router();

route.post("/getads", getAds);

export default route;
