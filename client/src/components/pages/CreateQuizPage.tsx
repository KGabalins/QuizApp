import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CreateQuestionsForm from "../forms/CreateQuestionsForm";
import QuestionForm from "../forms/QuestionForm";

type QuizForm = {
  name: string;
  type: string;
};

export type QuestionForm = {
  id: number;
  question: string;
  correctAnswer: string;
  answers: string[];
};

const CreateQuizPage = () => {
  const [quizForm, setQuizForm] = useState<QuizForm>({
    name: "",
    type: "Travel",
  });
  const [questions, setQuestions] = useState<QuestionForm[]>(() => {
    const questions: QuestionForm[] = [];

    for (let i = 0; i < 10; i++) {
      questions.push({
        id: i,
        question: "",
        correctAnswer: "",
        answers: ["", "", "", ""],
      });
    }

    return questions;
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setQuizForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-300 m-4 p-4 rounded-xl ">
      <h1 className="text-center font-bold">Create quiz</h1>

      <form
        className="flex flex-col items-center p-2 gap-2"
        onSubmit={submitHandler}
      >
        <label htmlFor="quizName">Quiz name:</label>
        <input
          id="quizName"
          name="name"
          type="text"
          value={quizForm.name}
          onChange={handleChange}
        />
        <label htmlFor="quizName">Quiz type:</label>
        <select name="type" value={quizForm.type} onChange={handleChange}>
          <option value="Travel">Travel</option>
          <option value="Interesting">Interesting</option>
          <option value="Inteligent">Inteligent</option>
          <option value="Games">Games</option>
          <option value="Sports">Sports</option>
        </select>
        {questions.map((question) => {
          return <CreateQuestionsForm question={question} />;
        })}
        <div className="flex gap-2 [&>button]:bg-slate-400 [&>button]:py-1 [&>button]:px-4 [&>button]:rounded-xl">
          {questions.length < 30 && (
            <button
              onClick={() =>
                setQuestions((prevState) => {
                  return [
                    ...prevState,
                    {
                      id: prevState.length,
                      question: "",
                      correctAnswer: "",
                      answers: ["", "", "", ""],
                    },
                  ];
                })
              }
            >
              Add
            </button>
          )}
          {questions.length > 10 && (
            <button
              onClick={() => {
                setQuestions((prevState) => {
                  const newArray = prevState.slice(0, -1);
                  return newArray;
                });
              }}
            >
              Remove
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

//"Travel", "Interesting", "Inteligent", "Games", "Sports"

export default CreateQuizPage;
