import { connect } from "react-redux";
import AnswerTable from "../ui/AnswerTable";

const mapStateToProps = state => {
  return {
    data: state.answers
  };
};

const Container = connect(mapStateToProps)(AnswerTable);
export default Container;
