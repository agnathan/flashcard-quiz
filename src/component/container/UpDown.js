import { connect } from "react-redux";
import UpDown from "../ui/UpDown";

import { increment, decrement } from "../../redux/actions";

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    }
  };
};

const CApp = connect(mapStateToProps, mapDispatchToProps)(UpDown);
export default CApp;
