import React, { useState } from "react";
import "./App.css";

import AddTodo from "./layouts/AddTodo";
import FilterPanel from "./layouts/FilterPanel";
import Todos from "./layouts/Todos";
const App = () => {
  const [todos, setTodos] = useState([
    { id: "01", text: "fisrt", complited: false },
  ]);
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="content_todo">
        <AddTodo />
        <FilterPanel />
        <Todos todos={todos} />
      </div>
    </div>
  );
};

export default App;
