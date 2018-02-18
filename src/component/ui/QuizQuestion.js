import React from "react";
import TextField from "material-ui/TextField";
import "./QuestionCard.css";

const QuizQuestion = ({
  setCurrent,
  submitAnswer,
  onAnswerChange,
  question,
  answer,
  givenAnswer
}) => (
  <div className="QuizQuestion">
    <form onSubmit={submitAnswer}>
      <p className="question">{question}</p>
      <TextField
        className="givenAnswer"
        type="input"
        value={givenAnswer}
        onChange={onAnswerChange}
      />
      {/* <Button text="Next Question" onClick={setCurrent} />
      <Button text="Submit Answer" onClick={submitAnswer} /> */}
    </form>
  </div>
);

export default QuizQuestion;
