const router = require("express").Router();
const { Post, User, Comment } = require("./../models");
const withAuth = require("./../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    if (!postData) {
      res.send(404).json({ message: "Could not find posts" });
    }
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts });
    console.log(req.session);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
