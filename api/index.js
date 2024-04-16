const express = require("express");
const app = express();
const Router = express.Router();

app.get("/", (req, res) => {
    res.status(200).json({ msg: "this is setting hello " });
});

// app.use("/", Router);

app.listen(3000, () => {
    console.log("started");
});

module.exports = app