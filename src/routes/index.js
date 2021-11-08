const router = require("express").Router();
const routes = require("./api");

const baseUrl = "/api";

router.use(baseUrl, routes);
router.use(baseUrl, (req, res) =>
    res.status(404).json({
        statusCode: 404,
        error: "not found",
    })
);

module.exports = router;
