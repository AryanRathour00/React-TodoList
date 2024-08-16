import React from "react";
import { useState } from "react";

import { Todo, Todos } from "./index";

const todoList = () => {
  const [todo, setTodo] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const addTodo = () => {
    setTodo([...todo, { todoName: todoName, todoDate: todoDate }]);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <>
      <div className="container p-5 rounded-lg bg-gray-800">
        <Todo
          onTodoNameInput={(e) => {
            setTodoName(e);
          }}
          onTodoDateInput={(e) => {
            setTodoDate(e);
          }}
          addTodo={addTodo}
        />
        <Todos
          todo={todo}
          onTodoUpdate={(e) => {
            setTodo(e);
          }}
        />
      </div>
    </>
  );
};

export default todoList;
