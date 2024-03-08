require("dotenv").config();

const express = require("express");
const app = express();
const port = 5050;
const cors = require("cors");
app.use(cors());
// dbconnection
const dbConnection = require("./db/dbConfig");
// questionRoutes middleware file
const questionRoutes = require("./routes/questionRoute");

// questionRoutes middleware file
const answerRoutes = require("./routes/answerRoute");

// user routes middleware file
const userRoutes = require("./routes/userRoute");
// authentication miidleware
const authMiddleware = require("./middleware/authMiddleware");
// json middleware to extra json data
app.use(express.json());
// user routes middleware file
app.use("/api/users", userRoutes);

// questions routes middleware??
app.use("/api/questions", authMiddleware, questionRoutes);

//answer routes middleware??
app.use("/api/answers", authMiddleware, answerRoutes);

// answer routes middleware??

async function start() {
  try {
    await dbConnection.execute("select 'test'");
    app.listen(port);
    console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
