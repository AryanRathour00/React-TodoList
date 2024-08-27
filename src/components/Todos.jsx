import React, { useState } from "react";
import { BsFillPencilFill, BsCheck2, BsXLg } from "react-icons/bs";
import {TodoEdit} from "./index";

const Todos = ({
  todo,
  onTodoUpdate, 
}) => {
  const [isEdited, setIsEdited] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const startEditing = (index) => {
    setIsEdited(index);
    setEditedDate(todo[index].todoDate);
    setEditedName(todo[index].todoName);
  };
  const cancelEditing = () => {
    setIsEdited(null);
    setEditedDate("");
    setEditedName("");
  };
  const updateList = (index) => {
    const updatedList = todo.map((i, element) =>
      i === index ? { todoName: editedName, todoDate: editedDate } : element
    );
    onTodoUpdate(updatedList);
    cancelEditing();
  };
  const deleteTodo = (index) => {
    const updatedList = [...todo];
    updatedList.splice(index, 1);
    onTodoUpdate(updatedList);
  };

  return (
    <>
      {todo.map((element, index) => (
        <div className="container mt-2 flex items-center gap-2" key={index}>
          {isEdited === index ? (
            <>
            <TodoEdit editedName = {editedName} editedDate = {editedDate} onEditNameChange = {(e)=>{setEditedName(e)}}  />
              <input
                type="text"
                name=""
                id=""
                className="w-40 bg-violet-600 p-2 rounded-md text-nowrap overflow-hidden text-ellipsis ml-1"
                value={editedName}
                onChange={(e) => {
                  setEditedName(e.target.value);
                }}
              />
              <input
                type="date"
                name=""
                id=""
                className="w-36 bg-violet-600 p-2 rounded-md"
                value={editedDate}
                onChange={(e) => {
                  setEditedDate(e.target.value);
                }}
              />
              <button
                className="bg-red-500 py-3 px-4 rounded-md hover:border-2 hover:border-red-900"
                onClick={() => cancelEditing()}
              >
                <BsXLg />
              </button>
              <button
                className="bg-lime-500 py-3 px-4 rounded-md hover:border-2 hover:border-lime-900"
                onClick={() => updateList(index)}
              >
                <BsCheck2 />
              </button>
            </>
          ) : ( 
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
          )}
        </div>
      ))}
    </>
  );
};

export default Todos; 
