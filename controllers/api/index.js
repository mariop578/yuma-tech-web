const router = require("express").Router();
const userRoutes = require("./userR");
const postRoutes = require("./postR");
const commentRoutes = require("./commentR");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
module.exports = router;
