const Post = require("../models/post");
const Story = require("../models/story");
const Diary = require("../models/diary");

const PostComment = require("../models/postComment");
const StoryComment = require("../models/storyComment");
const DiaryComment = require("../models/diaryComment");

const getCommentModelByContentType = (contentType) => {
  switch (contentType) {
    case "post":
      return PostComment;
    case "diary":
      return DiaryComment;
    case "story":
      return StoryComment;
    default:
      return null;
  }
};

const getContentModelByContentType = (contentType) => {
  switch (contentType) {
    case "post":
      return Post;
    case "diary":
      return Diary;
    case "story":
      return Story;
    default:
      return null;
  }
};

module.exports = { getCommentModelByContentType, getContentModelByContentType };
