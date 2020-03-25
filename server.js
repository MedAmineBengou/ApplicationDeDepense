const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

//Connect
connectDB();

dotenv.config({ path: "./config/config.env" });
const transactions = require("./routes/transactions");
const app = express();
app.use(express.json());

app.use("/api/v1/transactions", transactions);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Run on port ${PORT}`.cyan.bold));
