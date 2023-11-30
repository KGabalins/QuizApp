import NavBar from "./components/layout/NavBar";
import CreateQuizPage from "./components/pages/CreateQuizPage";
import HomePage from "./components/pages/HomePage";
import QuizPage from "./components/pages/QuizPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/quiz/create" element={<CreateQuizPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
