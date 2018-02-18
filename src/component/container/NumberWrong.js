import { connect } from "react-redux";
import NumberWrong from "../ui/NumberWrong";

const mapStateToProps = state => {
  return {
    numWrong: state.answers.filter(answer => answer.status === false).length
  };
};

const CApp = connect(mapStateToProps)(NumberWrong);
export default CApp;
