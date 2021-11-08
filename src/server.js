require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose
    .connect(DB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log("server is running..."));
