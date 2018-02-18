import { connect } from "react-redux";
import NumberRight from "../ui/NumberRight";

const mapStateToProps = state => {
  return {
    numRight: state.answers.filter(answer => answer.status === true).length
  };
};

const CApp = connect(mapStateToProps)(NumberRight);
export default CApp;
