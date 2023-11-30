const { StatusCodes } = require("http-status-codes");
const QuizQuestionModel = require("../models/quizQuestionModel");
const QuizModel = require("../models/quizModel");

const postQuiz = async (req, res) => {
  try {
    const result = await QuizModel.create(req.body);

    res.status(StatusCodes.CREATED).json(req.body);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getQuizById = async (req, res) => {
  const { quizId } = req.params;

  try {
    const quiz = await QuizModel.findById(quizId);

    res.status(StatusCodes.OK).json({ quiz });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error });
  }
};

const getAllQuizes = async (req, res) => {
  const quizes = await QuizModel.find();

  res.status(StatusCodes.OK).json({ quizes });
};

module.exports = {
  postQuiz,
  getAllQuizes,
  getQuizById,
};
