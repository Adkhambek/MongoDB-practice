const router = require("express").Router();
const User = require("../../models/userModel");

router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({
            status: "success",
            results: allUsers.length,
            users: allUsers,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: "success",
            users: newUser,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: "success",
            user,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            user,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            user: null,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});

module.exports = router;
