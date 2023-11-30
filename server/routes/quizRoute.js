const express = require("express");
const {
  postQuiz,
  getQuizById,
  getAllQuizes,
} = require("../controllers/quizController");
const router = express.Router();

router.route("/").get(getAllQuizes).post(postQuiz);
router.route("/:quizId").get(getQuizById);

module.exports = router;
