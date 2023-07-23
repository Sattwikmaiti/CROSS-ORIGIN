
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// const userRoute = require("./routes/user");

// const gptRoute = require("./routes/gpt");
// const chatRoute = require("./routes/chat");

// const jobRoute = require("./routes/job");

// const cors = require("cors");
import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";

import { runWithEmbeddings } from './routes/gpt.js'; // Replace 'your-file-name.js' with the actual path to your code file.


import jobRoute from "./routes/job.js";
import userRoute from "./routes/user.js";
import cors from "cors";

import chatRoute from "./routes/chat.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/chat", chatRoute);

app.use("/api/job", jobRoute);

app.post('/api/question', async (req, res) => {
  console.log("edhar aya")
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required.' });
    }

    const result = await runWithEmbeddings(question);
    res.json(result);
  } catch (error) {

    //console.error(error);
    res.status(500).json("gadha hai kya");
  }
});



app.listen(8000, () => console.log('Running on port 8000'));



