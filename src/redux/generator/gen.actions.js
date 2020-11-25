import { PaperActionTypes } from "./gen.types";
export const setPaper = () => ({
  type: PaperActionTypes.SET_PAPER,
});
export const setDifficultySelection = (e) => ({
  type: PaperActionTypes.SET_DIFFICULTY_SELECTION,
  payload: e.target.value,
});
export const setTopicSelection = (e) => ({
  type: PaperActionTypes.SET_TOPIC_SELECTION,
  payload: e.target.value,
});
