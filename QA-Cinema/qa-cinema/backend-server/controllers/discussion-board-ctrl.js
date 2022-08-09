const BoardComment = require("../models/dicussionboard-model");

createBoardComment = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a comment",
    });
  }

  const boardComment = new BoardComment(body);

  if (!boardComment) {
    return res.status(400).json({ success: false, error: err });
  }

  boardComment
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: boardComment._id,
        message: "BoardComment created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "BoardComment not created!",
      });
    });
};

updateBoardComment = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  BoardComment.findOne({ _id: req.params.id }, (err, boardComment) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "BoardComment not found!",
      });
    }
    boardComment.name = body.name;
    boardComment.email = body.email;
    boardComment.comment = body.comment;
    boardComment.rating = body.rating;
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: boardComment._id,
          message: "BoardComment updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "BoardComment not updated!",
        });
      });
  });
};

deleteBoardComment = async (req, res) => {
  await BoardComment.findOneAndDelete(
    { _id: req.params.id },
    (err, boardComment) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!boardComment) {
        return res
          .status(404)
          .json({ success: false, error: `BoardComment not found` });
      }

      return res.status(200).json({ success: true, data: boardComment });
    }
  ).catch((err) => console.log(err));
};

getBoardCommentById = async (req, res) => {
  await BoardComment.findOne({ _id: req.params.id }, (err, boardComment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!boardComment) {
      return res
        .status(404)
        .json({ success: false, error: `BoardComment not found` });
    }
    return res.status(200).json({ success: true, data: boardComment });
  }).catch((err) => console.log(err));
};

getBoardComments = async (req, res) => {
  await BoardComment.find({}, (err, boardComments) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!boardComments.length) {
      return res
        .status(404)
        .json({ success: false, error: `BoardComment not found` });
    }
    return res.status(200).json({ success: true, data: boardComments });
  }).catch((err) => console.log(err));
};

module.exports = {
  createBoardComment,
  updateBoardComment,
  deleteBoardComment,
  getBoardComments,
  getBoardCommentById,
};
