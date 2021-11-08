const router = require("express").Router();
const User = require("../../models/userModel");

router.get("/", (req, res) => {
    res.send("OK");
});

module.exports = router;
