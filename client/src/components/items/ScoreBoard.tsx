import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { Question } from "../pages/QuizPage";

type Props = {
  questions: Question[];
};

const ScoreBoard = ({ questions }: Props) => {
  return (
    <div className="p-4 bg-slate-300 rounded-md shadow-xl">
      <h1 className=" text-center text-xl mb-2 font-bold">Your guesses:</h1>
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <p>
              <span className="font-bold">{question.question}: </span>
              <span
                className={`${
                  question.guess === question.correctAnswer
                    ? " text-green-600"
                    : "text-red-700"
                }`}
              >
                {question.guess}{" "}
                {question.correctAnswer === question.guess ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )}
              </span>
            </p>
            <p>
              <span className=" italic">Correct answer: </span>
              <span className=" underline">{question.correctAnswer}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreBoard;
