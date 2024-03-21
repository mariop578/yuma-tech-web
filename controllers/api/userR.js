const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    if (!userData) {
      res.status(404).json({ message: " Could not find Users" });
      return;
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const newUser = new User();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    // Stores the new user
    const userData = await newUser.save();
    // Stores the SID to keep track of user and logged in flag is set to true
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
