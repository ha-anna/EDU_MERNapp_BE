import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
const app = express();
import { MONGO_URI_LOCAL } from './db/db.js'
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI

app.get("/", (req, res) => {
  console.log('Getting data', req, res)
})

mongoose.connect(MONGO_URI || MONGO_URI_LOCAL).then(() => {
      app.listen(PORT, () => {
      console.log('connected to db and listening on port 4000')
        })
    })
    .catch((error) => {
  console.log(error)
})