import { Link } from "react-router-dom";
import { Quiz } from "../pages/QuizPage";

type Props = {
  quiz: Quiz;
};

const QuizItem = ({ quiz: { name, rating, _id } }: Props) => {
  return (
    <div className="bg-slate-500 p-4 rounded-md flex flex-col">
      <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/19/16/intelligence.jpg" />
      <h1 className=" justify-self-end">{name}</h1>
      <h2>Rating: {rating}/5 </h2>
      <Link
        to={`/quiz/${_id}`}
        className="bg-slate-400 text-center hover:bg-slate-300 rounded-md py-1"
      >
        Go
      </Link>
    </div>
  );
};

export default QuizItem;
