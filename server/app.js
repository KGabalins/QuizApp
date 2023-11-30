const express = require("express");
const app = express();
const quizRoutes = require("./routes/quizRoute");
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/api/v1/quiz", quizRoutes);

const port = process.env.PORT || 3000;
const url = process.env.MONGODB_URL;

const startApp = async () => {
  try {
    await connectDB(url);
    console.log("Connected to MongoDB successfully...");
    app.listen(port, () => console.log(`Server running on port: ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
