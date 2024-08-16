import React from "react";

const Todo = ({ onTodoNameInput, onTodoDateInput, addTodo }) => {
  return (
    <>
      <input
        className="p-2 mr-2 rounded-2xl"
        type="text"
        onChange={(e) => {
          onTodoNameInput && onTodoNameInput(e.target.value);
        }}
      />
      <input
        type="date"
        className="p-2 mr-2 rounded-2xl"
        onChange={(e) => {
          onTodoDateInput && onTodoDateInput(e.target.value);
        }}
      />
      <button
        className="bg-green-600 py-2 px-4 rounded-md hover:border-2 hover:border-green-900"
        onClick={addTodo}
      >
        Add
      </button>
    </>
  );
};

export default Todo;
