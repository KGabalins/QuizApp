import { QuestionForm } from "../pages/CreateQuizPage";

type Props = {
  question: QuestionForm;
};

const CreateQuestionsForm = ({ question }: Props) => {
  return (
    <form>
      <label key={question.id} htmlFor={`question-${question.id}`}>
        Question
      </label>
      <input id={`question-${question.id}`} type="text" />
    </form>
  );
};

export default CreateQuestionsForm;
