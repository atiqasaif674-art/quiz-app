//Ye React ka Result component hai jo quiz complete hone ke baad score, percentage aur message show karta ha
//score → user ke kitne answers correct hain
// totalQuestions → total questions kitne thay
// restartQuiz → quiz dobara start karne wala function
function Result({score,totalQuestions,restartQuiz}) {
  const percentage =(score / totalQuestions) * 100;
  return (
    <div className="result-container">
      <div className="result-icon">🏆</div>
      <h1>Quiz Completed!</h1>
      <p className="result-text">Your Score</p>
      <h2 className="score">{score} / {totalQuestions}</h2>
      <p className="percentage">You scored {percentage}%</p>
      {percentage >= 80 && (
        <p className="message">🎉 Excellent! Great job!</p>
      )}
      {percentage >= 50 && percentage < 80 && (
        <p className="message">👍 Good job! Keep practicing.</p>
      )}
      {percentage < 50 && (
        <p className="message">💪 Keep practicing. You can do better!</p>
      )}
      <button className="restart-btn" onClick={restartQuiz}>🔄 Restart Quiz</button>
    </div>
  );
}
export default Result;