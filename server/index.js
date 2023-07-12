
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");


const chatRoute = require("./routes/chat");

const jobRoute = require("./routes/job");

const cors = require("cors");

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




app.listen(8000, () => console.log('Running on port 8000'));



