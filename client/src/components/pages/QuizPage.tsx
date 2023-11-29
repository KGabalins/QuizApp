import { useEffect, useState } from "react";

import ScoreBoard from "../items/ScoreBoard";
import QuestionForm from "../forms/QuestionForm";

export type Question = {
  prompt: string;
  correctAnswer: string;
  answers: string[];
  guess: string | null;
};

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([
    {
      prompt: "What color is the sky?",
      correctAnswer: "Blue",
      answers: ["Red", "Green", "Blue", "Yellow"],
      guess: null,
    },
    {
      prompt: "In which year did Counter Strike: Global Offensive release?",
      correctAnswer: "2012",
      answers: ["2013", "2014", "2012", "2010"],
      guess: null,
    },
    {
      prompt: "Capital of Latvia?",
      correctAnswer: "Riga",
      answers: ["Jelgava", "Riga", "Daugavpils", "Ozolnieki"],
      guess: null,
    },
  ]);

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
