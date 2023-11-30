import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ScoreBoard from "../items/ScoreBoard";
import QuestionForm from "../forms/QuestionForm";
import axios from "axios";

export type Question = {
  question: string;
  correctAnswer: string;
  answers: string[];
  guess: string | null;
};

export type Quiz = {
  _id: string;
  name: string;
  rating: number;
  type: string;
  questions: Question[];
};

const QuizPage = () => {
  // const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const { quizId } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0]
  );

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    selectedAnswer: string
  ) => {
    e.preventDefault();
    setQuestions((prevState) => {
      prevState[currentQuestionIndex].guess = selectedAnswer;
      return prevState;
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    axios
      .get(`/api/v1/quiz/${quizId}`)
      .then(({ data }) => {
        const { quiz } = data;

        // setQuiz(quiz);
        setQuestions(quiz.questions);
      })
      .catch((err) => console.log(err));
  }, [quizId]);

  return (
    <div className="flex justify-center items-center h-screen">
      {currentQuestion ? (
        <QuestionForm question={currentQuestion} handleSubmit={handleSubmit} />
      ) : (
        <ScoreBoard questions={questions} />
      )}
    </div>
  );
};

export default QuizPage;
