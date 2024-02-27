const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const { join, login, logout } = require("../controllers/auth");
const { checkUserEmail, checkUserNickname } = require("../controllers/page");
//const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
router.use((req, res, next) => {
  //res.locals미들에워 간에 공유되는 데이터
  res.locals.user = req.user;
  res.locals.followerCount = req.user?.Followers?.length || 0;
  res.locals.followingCount = req.user?.Followings?.length || 0;
  res.locals.followingIdList = req.user?.Followings?.map((f) => f.id) || [];
  res.locals.followerIdList = req.user?.Followers?.map((f) => f.id) || [];

  //res.sessiom:사용자의 고유한 데이터

  next();
});

router.post("/sign-up", isNotLoggedIn, join);

router.post("/sign-in", isNotLoggedIn, login);

router.post("/logout", isLoggedIn, logout);

router.get("/email-check/:email", checkUserEmail);

router.get("/nickname-check/:nickname", checkUserNickname);

module.exports = router;
