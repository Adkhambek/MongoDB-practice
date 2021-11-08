require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose
    .connect(DB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("OK");
});

app.listen(PORT, () => console.log("server is running..."));
