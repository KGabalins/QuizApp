const mongoose = require("mongoose");

const QuizQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  answers: {
    type: [String],
    required: true,
    validate: [
      {
        validator: function (arr) {
          return arr.length === 4;
        },
        message: "Please provide exactly 4 answers",
      },
      {
        validator: function (arr) {
          let answerExists = false;

          arr.map((answer) => {
            if (answer === this.correctAnswer) answerExists = true;
          });

          return answerExists;
        },
        message: "One of the answers should match the correct answer",
      },
    ],
  },
});

const QuizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, default: 0 },
  type: {
    type: String,
    enum: ["Travel", "Interesting", "Inteligent", "Games", "Sports"],
    required: true,
  },
  questions: {
    type: [QuizQuestionSchema],
    validate: [
      validateQuestionLength,
      "The quiz should contain atleast 10 questions, and no more than 30 questions",
    ],
  },
});

function validateQuestionLength(arr) {
  return arr.length >= 10 && arr.length <= 30;
}

const QuizModel = mongoose.model("QuizModel", QuizSchema);

module.exports = QuizModel;
