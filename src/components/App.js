import React, { Component } from "react";
import AddTodoContainer  from "../containers/AddTodoContainer";
import TodoListContainer  from "../containers/TodoListContainer";
import FooteContainer from "../containers/FooteContainer";

export default class App extends Component {
 
  render() {
    return (
      <div>
        <AddTodoContainer></AddTodoContainer>
        <TodoListContainer></TodoListContainer>
        <FooteContainer></FooteContainer>
      </div>      
    );
  }
}
