import React from "react";
import { connect, useDispatch } from "react-redux";
import getData from "./actions/Actions";
import "./styles.css";

function App(props) {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(getData())}>AddTodo</button>
      {props.todos && (
        <div>
          {props.todos.map((a) => (
            <h4>{a.title}</h4>
          ))}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todo
  };
};

export default connect(mapStateToProps)(App);
