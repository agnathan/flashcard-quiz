import C from "./constants";

export const setCurrent = () => {
  return {
    type: C.SET_CURRENT_QUESTION
  };
};

export const submitAnswer = answer => {
  return {
    type: C.SUBMIT_ANSWER
  };
};

export const onAnswerChange = givenAnswer => {
  return {
    type: C.ON_ANSWER_CHANGE,
    payload: givenAnswer
  };
};
