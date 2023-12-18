import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";

function SingleTodo({ ele, todos, setTodos, index }) {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(ele.todo);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Draggable draggableId={ele.id.toString()} index={index}>
      {(provided) => (
        <form
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onSubmit={(e) => handleEdit(e, ele.id)}
          className="flex rounded-md p-5 mt-4 bg-indigo-600 text-white"
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="text-black"
            />
          ) : ele.isDone ? (
            <s className="md:flex-1 p-1 border-none text-[20px]">{ele.todo}</s>
          ) : (
            <span className="flex-1 p-1 border-none text-[20px]">
              {ele.todo}
            </span>
          )}
          <span
            className="ml-3 text-[25px] cursor-pointer"
            onClick={() => {
              if (!edit && !ele.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <CiEdit />
          </span>
          <span
            className="ml-3 text-[25px] cursor-pointer"
            onClick={() => handleDelete(ele.id)}
          >
            <MdDelete />
          </span>
          <span
            className="ml-3 text-[25px] cursor-pointer"
            onClick={() => handleDone(ele.id)}
          >
            <MdFileDownloadDone />
          </span>
        </form>
      )}
    </Draggable>
  );
}

export default SingleTodo;
