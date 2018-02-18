/*
 * reducer.js - contains the programs main reducing function
 * It takes two arguments
 *    state - the current state
 *    action - an action to perform
 */

import C from "../constants";

const setCurrentQuestionReducer = (state = {}, action) => {
  const index = Math.floor(Math.random() * state.cards.length);
  return {
    ...state,
    current: {
      question: state.cards[index].question,
      answer: state.cards[index].answer,
      givenAnswer: ""
    }
  };
};

const onAnswerChangeReducer = (state = {}, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      givenAnswer: action.payload
    }
  };
};

const submitAnswerReducer = (state = {}, action) => {
  // Destructure some values for clarity
  let { givenAnswer, answer } = state.current;

  // Is the user's answer correct set status to true otherwise false
  let status = answer === givenAnswer ? true : false;

  // Build the answer object
  answer = {
    ...state.current,
    status: status
  };

  // Insert the answer object into the answers array
  return {
    ...state,
    answers: [...state.answers, answer]
  };
};

export const reducer = (state = {}, action) => {
  console.log("reducer was called with state", state, "and action", action);

  switch (action.type) {
    case C.SET_CURRENT_QUESTION:
      return setCurrentQuestionReducer(state, action);
    case C.ON_ANSWER_CHANGE:
      return onAnswerChangeReducer(state, action);
    case C.SUBMIT_ANSWER:
      return submitAnswerReducer(state, action);
    default:
      return state;
  }
};
