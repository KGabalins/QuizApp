import { useState, useEffect } from "react";
import { Question } from "../pages/QuizPage";

type Props = {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    selectedAnswer: string
  ) => void;
  question: Question;
};

const QuestionForm = ({ handleSubmit, question }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [shuffledAnswers, setShuffledAnwers] = useState(
    shuffleArray(question.answers)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
  };

  function shuffleArray(arr: string[]) {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  useEffect(() => {
    setShuffledAnwers(shuffleArray(question.answers));
    setSelectedAnswer("");
  }, [question]);

  return (
    <>
      <div className=" p-4 bg-slate-300 rounded-md shadow-xl w-[400px]">
        <h1 className="font-bold">{question.question}</h1>
        <form
          onSubmit={(e) => handleSubmit(e, selectedAnswer)}
          className="flex flex-col"
        >
          {shuffledAnswers.map((answer, index) => {
            return (
              <label key={index} className="my-1">
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  onChange={handleChange}
                  checked={selectedAnswer === answer}
                />
                {answer}
              </label>
            );
          })}
          <button
            className="p-2 shadow-md bg-slate-200"
            disabled={selectedAnswer.length === 0}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default QuestionForm;
