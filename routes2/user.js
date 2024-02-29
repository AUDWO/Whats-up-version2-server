const express = require("express");
const { renderUserInfo } = require("../controllers/page");
const router = express.Router();

router.get("/info/:userId", renderUserInfo);
router.get("/my-info", renderUserInfo);

module.exports = router;
