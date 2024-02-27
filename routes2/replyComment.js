const express = require("express");
const {
  renderPostReplyComments,
  renderStoryReplyComments,
  renderDiaryReplyComments,
} = require("../controllers/page");
const router = express.Router();

//get
router.get("/post/:commentId", renderPostReplyComments);
router.get("/story/:commentId", renderStoryReplyComments);
router.get("/diary/:commentId", renderDiaryReplyComments);

module.exports = router;
