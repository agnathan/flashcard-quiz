import { connect } from "react-redux";
import PercentRight from "../ui/PercentRight";

const mapStateToProps = state => {
  let numRight = state.answers.filter(answer => answer.status === true).length;
  let numWrong = state.answers.filter(answer => answer.status === false).length;
  let percentage =
    numRight === 0 && numWrong === 0
      ? 0
      : Math.floor(
          parseFloat(numRight) *
            100 /
            (parseFloat(numWrong) + parseFloat(numRight))
        );

  return {
    percentage: { percentage }
  };
};

const CApp = connect(mapStateToProps)(PercentRight);
export default CApp;
