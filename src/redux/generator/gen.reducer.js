import { PaperActionTypes } from "./gen.types";
import QUESTIONS from "../questions/questions.data";

function generic(arr, topic, diff, num) {
  const array = arr
    .sort(() => Math.random() - 0.5)
    .filter((item) => item.topic === topic && item.difficulty === diff)
    .slice(num);
  return array;
}
const INITIAL_STATE = {
  questions: QUESTIONS,
  exam: null,
  topicSelection: "",
  difficultySelection: "",
};

const genReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaperActionTypes.SET_DIFFICULTY_SELECTION:
      return { ...state, difficultySelection: action.payload };
    case PaperActionTypes.SET_TOPIC_SELECTION:
      return { ...state, topicSelection: action.payload };
    case PaperActionTypes.SET_PAPER:
      if (
        state.difficultySelection === "mix1" &&
        state.topicSelection === "topic1"
      )
        return {
          ...state,
          exam: []
            .concat(
              generic(state.questions, "algo", "easy", 2),
              generic(state.questions, "algo", "medium"),
              generic(state.questions, "algo", "hard", 1)
            )
            .sort(() => Math.random() - 0.5),
        };
      else if (
        state.difficultySelection === "mix1" &&
        state.topicSelection === "topic2"
      )
        return {
          ...state,
          exam: []
            .concat(
              generic(state.questions, "os", "easy", 2),
              generic(state.questions, "os", "medium"),
              generic(state.questions, "os", "hard", 1)
            )
            .sort(() => Math.random() - 0.5),
        };
      else if (
        state.difficultySelection === "mix1" &&
        state.topicSelection === "topic3"
      )
        return {
          ...state,
          exam: []
            .concat(
              generic(state.questions, "os", "easy", 3),
              state.questions.find(
                (item) => item.topic === "algo" && item.difficulty === "easy"
              ),
              generic(state.questions, "algo", "medium"),
              generic(state.questions, "os", "hard", 1)
            )
            .sort(() => Math.random() - 0.5),
        };
      else if (
        state.difficultySelection === "mix2" &&
        state.topicSelection === "topic1"
      )
        return {
          ...state,
          exam: []
            .concat(
              generic(state.questions, "algo", "easy", 4),
              generic(state.questions, "algo", "medium"),
              generic(state.questions, "algo", "hard")
            )
            .sort(() => Math.random() - 0.5),
        };
      else if (
        state.difficultySelection === "mix2" &&
        state.topicSelection === "topic2"
      )
        return {
          ...state,
          exam: []
            .concat(
              generic(state.questions, "os", "easy", 4),
              generic(state.questions, "os", "medium"),
              generic(state.questions, "os", "hard")
            )
            .sort(() => Math.random() - 0.5),
        };
      else if (
        state.difficultySelection === "mix2" &&
        state.topicSelection === "topic3"
      )
        return {
          ...state,
          exam: []
            .concat(
              generic(state.questions, "algo", "easy", 4),
              generic(state.questions, "algo", "medium"),
              generic(state.questions, "os", "hard")
            )
            .sort(() => Math.random() - 0.5),
        };
      else {
        alert("Please select topic and difficulty");
        return state;
      }
    default:
      return state;
  }
};
export default genReducer;
