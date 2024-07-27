import React from "react";
import { useState } from "react";
import { BsFillPencilFill, BsCheck2, BsXLg } from "react-icons/bs";

const todoList = () => {
  const [todo, setTodo] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [editedName, setEditedName] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [isEdited, setIsEdited] = useState(null);

  const addTodo = () => {
    setTodo([...todo, { todoName: todoName, todoDate: todoDate }]);
    setTodoName("");
    setTodoDate("");
  };
  const deleteTodo = (index) => {
    const updatedList = [...todo];
    updatedList.splice(index, 1);
    setTodo(updatedList);
  };

  const startEditing =(index) =>{
      setIsEdited(index);
      setEditedDate(todo[index].todoDate);
      setEditedName(todo[index].todoName);
  }
  const cancelEditing =() =>{
    setIsEdited(null);
    setEditedDate("");
    setEditedName("");
  }
  const updateList=(index) =>{
      const updatedList = todo.map((i, element)=>
        i === index? {todoName: editedName, todoDate: editedDate} : element
      )
      setTodo(updatedList);
      cancelEditing();
  }
  return (
    <>
      <div className="container p-5 rounded-lg bg-gray-800">
        <input
          className="p-2 mr-2 rounded-2xl"
          type="text"
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
        <input
          type="date"
          className="p-2 mr-2 rounded-2xl"
          onChange={(e) => {
            setTodoDate(e.target.value);
          }}
        />
        <button
          className="bg-green-600 py-2 px-4 rounded-md hover:border-2 hover:border-green-900"
          onClick={addTodo}
        >
          Add
        </button>

        {todo.map((element, index) => (
          <div className="container mt-2 flex items-center gap-2" key={index}>
            {isEdited === index ? (
              <>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-40 bg-violet-600 p-2 rounded-md text-nowrap overflow-hidden text-ellipsis ml-1"
                  value={editedName}
                  onChange={(e)=>{
                    setEditedName(e.target.value);
                  }}
                />
                <input
                  type="date"
                  name=""
                  id=""
                  className="w-36 bg-violet-600 p-2 rounded-md"
                  value={editedDate}
                  onChange={(e)=>{
                    setEditedDate(e.target.value);
                  }}
                />
                <button className="bg-red-500 py-3 px-4 rounded-md hover:border-2 hover:border-red-900"
                  onClick={()=>
                    cancelEditing()
                  }
                >
                  <BsXLg />
                </button>
                <button className="bg-lime-500 py-3 px-4 rounded-md hover:border-2 hover:border-lime-900"
                onClick={()=>updateList(index)}
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
      </div>
    </>
  );
};

export default todoList;
