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

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
