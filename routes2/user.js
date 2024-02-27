const express = require("express");
const { renderUserInfo } = require("../controllers/page");
const router = express.Router();

router.get("/user-info", renderUserInfo);

module.exports = router;
