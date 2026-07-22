const express = require("express");

const app = express();

// Intentionally exposed secret for Gitleaks demo
const GITHUB_TOKEN = "ghp_8vJk2L9mQ4rT7xP3sW6nY5cB1dF0aE9zX4u";

app.get("/", (req, res) => {
    res.send("Welcome to the vulnerable DevSecOps application");
});

app.listen(3000, () => {
    console.log("Application running on port 3000");
});
