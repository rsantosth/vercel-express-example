const express = require("express");
const app = express();

const mockResponse = require('../apiResponse');

app.get("/status", (req, res) => res.send("API is online"));

app.post("/cargo-routes", (req, res) => res.status(200).json(mockResponse));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;