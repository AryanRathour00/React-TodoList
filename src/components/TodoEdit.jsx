import React from "react";


const TodoEdit = () => {
  return (
    <>
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
  );
};

export default TodoEdit;
