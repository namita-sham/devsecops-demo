const express = require("express");
const app = express();

const githubToken = "ghp_abcdefghijklmnopqrstuvwxyz1234567890";

app.get("/", (req, res) => {
    res.send("Welcome to the vulnerable application");
});

app.listen(3000, () => {
    console.log("Application running on port 3000");
});
