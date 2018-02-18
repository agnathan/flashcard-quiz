import React from "react";

class AnswerTable extends React.Component {
  render() {
    let answers = this.props.data
      .slice(0)
      .reverse()
      .map((answer, key) => {
        return (
          <tr key={key} className={answer.status === true ? "right" : "wrong"}>
            <td className="historyQuestion">{answer.question}</td>
            <td>{answer.givenAnswer}</td>
            <td>{answer.answer}</td>
            <td>{answer.status === true ? "Correct" : "Wrong"}</td>
          </tr>
        );
      });

    return (
      <div className="answer-list">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Question</th>
              <th>Given Answer</th>
              <th>Correct Answer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{answers}</tbody>
        </table>
        {!answers.length && (
          <div className="alert alert-info" role="alert">
            No Questions answered yet...
          </div>
        )}
      </div>
    );
  }
}

export default AnswerTable;
