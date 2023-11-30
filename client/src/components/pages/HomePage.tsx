import { useEffect, useState } from "react";
import { Quiz } from "./QuizPage";
import axios from "axios";
import QuizItem from "../items/QuizItem";

const HomePage = () => {
  const [quizes, setQuizes] = useState<Quiz[]>([]);

  console.log(quizes);

  useEffect(() => {
    axios
      .get("/api/v1/quiz")
      .then(({ data: { quizes } }) => {
        setQuizes(quizes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-slate-300 m-4 p-4 rounded-xl ">
      <h1 className="text-center mb-4 font-bold">Recomended quizes</h1>
      <div className="grid grid-cols-4 gap-4 items-center">
        {quizes.map((quiz) => {
          return <QuizItem quiz={quiz} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
