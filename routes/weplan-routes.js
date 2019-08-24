const router = require("express").Router();

//webplan login
router.get("/login", (req, res) => {
  res.render("login");
});

//webplan logout
router.get("/logout", (req, res) => {
  //handle with passport
  res.send("logging out");
});

//webplan with google
router.get("/google", (req, res) => {
  //handle with passport
  res.send("logging in with google");
});

module.exports = router;
