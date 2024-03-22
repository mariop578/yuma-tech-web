const router = require("express").Router();
const userRoutes = require("./userR");
const postRoutes = require("./postR");

router.use("/user", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
