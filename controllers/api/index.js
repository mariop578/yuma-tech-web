const router = require("express").Router();
const userRoutes = require("./userR");

router.use("/user", userRoutes);

module.exports = router;
