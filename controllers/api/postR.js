const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/:id", async (req, res) => {
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
    if (!postData) {
      res.status(404).json({ message: "Could not find post by id" });
      return;
    }
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedPost) {
      res.status(404).json({ message: "No post found with that id" });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    await Comment.destroy({
      where: { post_id: req.params.id },
    });

    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });

    if (!deletedPost) {
      res.status(404).json({ message: "No post found with that id" });
      return;
    }
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
