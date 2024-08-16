import React from "react";

const TodoSection = () => {
  return (
    <>
      <input
        type="text"
        className="w-36 bg-teal-500 p-2 rounded-md text-nowrap overflow-hidden text-ellipsis"
        value={element.todoName}
      />
      <input
        type="date"
        className="w-32 bg-teal-500 p-2 rounded-md"
        value={element.todoDate}
      />
      <button
        className="bg-red-700 py-2 px-4 rounded-md hover:border-2 hover:border-red-800 "
        onClick={() => deleteTodo(index)}
      >
        Delete
      </button>
      <button
        className="bg-blue-700 py-3 px-4 rounded-md hover:border-2 hover:border-blue-900"
        onClick={() => startEditing(index)}
      >
        <BsFillPencilFill />
      </button>
    </>
  );
};

export default TodoSection;
