import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";
import Grid from "material-ui/Grid";

import QuizQuestion from "../container/QuizQuestion";
import AnswerTable from "../container/AnswerTable";
import NumberRight from "../container/NumberRight";
import NumberWrong from "../container/NumberWrong";
import PercentRight from "../container/PercentRight";
// import StatusCard from "../ui/StatusCard";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 16,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <QuizQuestion />
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <NumberRight />
          </Card>
          <Card className={classes.card}>
            <NumberWrong />
          </Card>
          <Card className={classes.card}>
            <PercentRight />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <AnswerTable />
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
