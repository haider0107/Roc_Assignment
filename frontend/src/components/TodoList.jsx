import React from "react";
import SingleTodo from "./SingleTodo";
import { IoMdAdd } from "react-icons/io";
import { Droppable } from "react-beautiful-dnd";

function TodoList({
  todos,
  setTodos,
  onHoldtodos,
  setOnHoldtodos,
  inProgressTodos,
  setInProgressTodos,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-[100%] ">
      <Droppable droppableId="New">
        {(provided) => (
          // New
          <div
            className="flex w-[95%] md:w-1/3 flex-col p-4 rounded-md m-4 bg-blue-200"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="flex justify-between items-center">
              <span className="text-[30px] text-slate-600 font-medium">
                New
              </span>{" "}
              <IoMdAdd className=" text-[20px] cursor-pointer" />
            </div>
            {todos.map((ele, index) => (
              <SingleTodo
                index={index}
                ele={ele}
                key={ele.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="On-Hold">
        {(provided) => (
          // On-Hold
          <div
            className="flex w-[95%] md:w-1/3 flex-col p-4 rounded-md m-4 bg-blue-200"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="flex justify-between items-center">
              <span className="text-[30px] text-slate-600 font-medium">
                On Hold
              </span>
              <IoMdAdd className="text-[20px] cursor-pointer" />
            </div>
            {onHoldtodos.map((ele, index) => (
              <SingleTodo
                index={index}
                ele={ele}
                key={ele.id}
                todos={onHoldtodos}
                setTodos={setOnHoldtodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="In-Progress">
        {(provided) => (
          // In-Progress
          <div
            className="flex w-[95%] md:w-1/3 flex-col p-4 rounded-md m-4 bg-blue-200"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="flex justify-between items-center">
              <span className="text-[30px] text-slate-600 font-medium">
                In Progress
              </span>
              <IoMdAdd className="text-[20px] cursor-pointer" />
            </div>
            {inProgressTodos.map((ele, index) => (
              <SingleTodo
                index={index}
                ele={ele}
                key={ele.id}
                todos={inProgressTodos}
                setTodos={setInProgressTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TodoList;

/*
{todos.map((ele) => (
        <SingleTodo ele={ele} key={ele.id} todos={todos} setTodos={setTodos} />
      ))}
*/
