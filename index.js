const express = require("express");
const app = express();
const Router = express.Router();

Router.get("/", (req, res) => {
    res.status(200).json({ msg: "this is setting" });
});

app.use("/", Router);

app.listen(3000, () => {
    console.log("started");
});
