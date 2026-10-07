import { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import Result from "./Result";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const question = questions[currentQuestion];
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };
  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
    if (selectedAnswer === question.answer) {
      setScore(score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };
  if (showResult) {
    return (
      <Result score={score} totalQuestions={questions.length} restartQuiz={restartQuiz}/>
    );
  }
  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>🎯 Quiz App</h1>
        <p>Question {currentQuestion + 1} of {questions.length}</p>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        ></div>
      </div>
      <Question question={question} selectedAnswer={selectedAnswer} handleAnswer={handleAnswer}/>
      <button className="next-btn" onClick={handleNext}>
        {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next →"}
      </button>
    </div>
  );
}
export default Quiz;