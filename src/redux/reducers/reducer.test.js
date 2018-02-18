import C from "../constants";
import { reducer } from "./reducer";
import initialState from "../initialState";
import { onAnswerChange } from "../actions";

describe("The reducer", () => {
  const state = {
    current: {
      answer: "54",
      question: "6 x 9"
    },
    answers: []
  };

  it("should return an answers array with 1 answer after using setCurrent and SUBMIT_ANSWER", () => {
    reducer(state, onAnswerChange("54"));

    expect(
      reducer(state, {
        type: C.SUBMIT_ANSWER
      })
    ).toEqual({
      answers: [
        {
          answer: "54",
          question: "6 x 9",
          status: false
        }
      ],
      current: {
        answer: "54",
        question: "6 x 9"
      }
    });
  });
});
//
// test("reducer", () => {
//   let state;
//   state = reducer({ count: 1 }, { type: C.DECREMENT });
//   expect(state).toEqual({ count: 0 });
// });
