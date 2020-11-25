import React from "react";
import "./App.css";
import Paper from "./Paper";
import {
  setPaper,
  setDifficultySelection,
  setTopicSelection,
} from "./redux/generator/gen.actions";
import { connect } from "react-redux";

function App({ setPaper, exam, setDifficultySelection, setTopicSelection }) {
  return (
    <div className="App">
      <h1>Welcome to developer test</h1>
      <div className="select">
        <select
          onChange={setTopicSelection}
          name="todos"
          className="drop-down"
          required
        >
          <option>select a topic</option>
          <option value="topic1">Algorithm</option>
          <option value="topic2">Operating System</option>
          <option value="topic3">(60% Algo, 40% Os)</option>
        </select>
      </div>
      <div className="select">
        <select
          onChange={setDifficultySelection}
          name="todos"
          className="drop-down"
          required
        >
          <option className="drop-down">select a difficulty</option>
          <option value="mix1">(30% exam, 50% medium, 20% hard)</option>
          <option value="mix2">(10% exam, 50% medium,40% hard)</option>
        </select>
      </div>
      <Paper exam={exam} />
      <button className="generator" onClick={setPaper}>
        Generate Paper
      </button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setPaper: () => dispatch(setPaper()),
  setDifficultySelection: (e) => dispatch(setDifficultySelection(e)),
  setTopicSelection: (e) => dispatch(setTopicSelection(e)),
});
const mapStateToProps = (state) => ({
  exam: state.gen.exam,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
