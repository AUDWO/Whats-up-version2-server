const express = require("express");
const {
  renderAllPost,
  renderAllDiary,
  renderAllStory,
  renderOnlyPost,
  renderOnlyStory,
  renderOnlyDiary,
} = require("../controllers/page");
const router = express.Router();

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

router.get("/all-post", renderAllPost);
router.get("/all-story", renderAllStory);
router.get("/all-diary", renderAllDiary);

router.get(`/post/:postId`, renderOnlyPost);
router.get(`/story/:storyId`, renderOnlyStory);
router.get(`/diary/:diaryId`, renderOnlyDiary);

router.get(`/user-all-post/:userId`, renderAllPost);
router.get(`/user-all-diary/:userId`, renderAllDiary);

module.exports = router;
