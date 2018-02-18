import { connect } from "react-redux";
import QuizQuestion from "../ui/QuizQuestion";

import { setCurrent, submitAnswer, onAnswerChange } from "../../redux/actions";

const mapStateToProps = state => {
  return {
    question: state.current.question,
    answer: state.current.answer,
    givenAnswer: state.current.givenAnswer
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrent: () => {
      dispatch(setCurrent());
    },
    onAnswerChange: evt => {
      dispatch(onAnswerChange(evt.target.value));
    },
    submitAnswer: evt => {
      evt.preventDefault();
      dispatch(submitAnswer());
      dispatch(setCurrent());
    }
  };
};

const CApp = connect(mapStateToProps, mapDispatchToProps)(QuizQuestion);
export default CApp;
