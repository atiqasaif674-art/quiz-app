//question → current question ka data
// selectedAnswer → user ne konsa answer select kiya
// handleAnswer → answer select hone par chalne wala function
function Question({question,selectedAnswer,handleAnswer}) {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      {/* Iske andar quiz ke saare options show honge. */}
      <div className="options">
        {question.options.map((option, index) => (
          // Agar user ka selected answer current option ke equal hai, to "selected" class lagao
          <button key={index} className={`option ${
              selectedAnswer === option ? "selected": ""}`}
            onClick={() => handleAnswer(option)}>
            <span className="option-letter">
              {/* Ye basically A, B, C, D... generate karne ke liye use ho rahi hai */}
              {String.fromCharCode(65 + index)}
            </span>
            {/* Ye actual option ka text screen par show karta hai. */}
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Question;
//Pehla question → poora object
// Dusra question → object ke andar question ki property
//  {String.fromCharCode(65 + index)}
// to index automatically position deta hai:
// Pehla option  → index = 0
// Dusra option  → index = 1
// Teesra option → index = 2
// Chautha option → index = 3
// 2. 65 kyun? JavaScript mein characters ke numeric codes hote ha