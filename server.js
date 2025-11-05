const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello DevOps CI/CD Project Running Successfully!");
});

app.listen(port, "0.0.0.0" , () => {
    console.log(`Server running on port ${port}`);
});

