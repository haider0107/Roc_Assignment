import React, { useState } from "react";
import Navebar from "../components/Navebar";
import TodoList from "../components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

let data = [
  {
    id: 1,
    todo: "Hello",
    date: new Date(),
    status: "New",
    isCompleted: false,
  },
  {
    id: 2,
    todo: "Hello1",
    date: new Date(),
    status: "On-Hold",
    isCompleted: false,
  },
  {
    id: 3,
    todo: "Hello2",
    date: new Date(),
    status: "In-Progress",
    isCompleted: false,
  },
];

function Dashboard() {
  const [todos, setTodos] = useState(data);
  const [onHoldtodos, setOnHoldtodos] = useState([]);
  const [inProgressTodos, setInProgressTodos] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let add,
      active = todos,
      hold = onHoldtodos,
      progress = inProgressTodos;

    if (source.droppableId === "New") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === "On-Hold") {
      add = hold[source.index];
      hold.splice(source.index, 1);
    } else {
      add = progress[source.index];
      progress.splice(source.index, 1);
    }

    if (destination.droppableId === "New") {
      active.splice(destination.index, 0, add);
    } else if (destination.droppableId === "On-Hold") {
      hold.splice(destination.source, 0, add);
    } else {
      progress.splice(destination.source, 0, add);
    }

    setInProgressTodos(progress);
    setOnHoldtodos(hold);
    setTodos(active);
  };

  return (
    <div>
      <Navebar />
      <DragDropContext onDragEnd={onDragEnd}>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          onHoldtodos={onHoldtodos}
          setOnHoldtodos={setOnHoldtodos}
          inProgressTodos={inProgressTodos}
          setInProgressTodos={setInProgressTodos}
        />
      </DragDropContext>
    </div>
  );
}

export default Dashboard;
