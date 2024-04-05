const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) => res.send("Hello!"));

app.post("/webhook", (req, res) => res.status(200).json({
    status: 200,
    success: true
}));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;