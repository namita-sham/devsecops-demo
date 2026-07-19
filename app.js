const express = require("express");
const app = express();

const API_KEY = "ghp_DEMO_FAKE_SECRET_123456789";

app.get("/", (req, res) => {
    res.send("Welcome to the vulnerable application");
});

app.listen(3000, () => {
    console.log("Application running on port 3000");
});
