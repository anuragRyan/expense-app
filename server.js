const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const path = require("path");

dotenv.config();

connectDb();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//user routes
app.use("/api/v1/users", require("./routes/userRoutes"));

//transaction routes
app.use("/api/v1/transaction", require("./routes/transactionRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
