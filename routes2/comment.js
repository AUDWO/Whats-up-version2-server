const express = require("express");
const {
  renderPostsComments,
  renderStoryComments,
  renderDiaryComments,
} = require("../controllers/page");
const router = express.Router();

//get
router.get("/post/:postId", renderPostsComments);
router.get("/story/:storyId", renderStoryComments);
router.get("/diary/:diaryId", renderDiaryComments);

//post
router.post("/post/:postId");
router.post("/story/:storyId");
router.post("/diary/:diaryId");

module.exports = router;
