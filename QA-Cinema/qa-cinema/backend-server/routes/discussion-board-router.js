const express = require("express");

const DiscussionBoardCtrl = require("../controllers/dicussion-board-ctrl");

const router = express.Router();

router.post("/DiscussionBoard", DiscussionBoardCtrl.createBoardComments);
router.put("/DiscussionBoard/:id", DiscussionBoardCtrl.updateBoardComments);
router.delete("/DiscussionBoard/:id", DiscussionBoardCtrl.deleteBoardComments);
router.get("/DiscussionBoard/:id", DiscussionBoardCtrl.getBoardCommentsById);
router.get("/DiscussionBoard", DiscussionBoardCtrl.getBoardComments);

module.exports = router;
