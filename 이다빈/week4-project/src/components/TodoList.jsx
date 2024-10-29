import React from "react";
import { useState } from "react";
import TodoCard from "./TodoCard";

let doId = 0;

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  // const [time, setTime] = useState(0);
  const [doList, setDoList] = useState([]);
  const [editTodo, setEditTodo] = useState("");

  const addTodo = () => {
    setNewTodo("");

    setDoList([
      ...doList,
      {
        id: doId++,
        todo: newTodo,
        isChk: false,
      },
    ]);
  };

  const removeTodo = (id) => {
    setDoList(doList.filter((todo) => todo.id !== id));
  };

  const editButton = (id) => {
    setDoList(
      doList.map((item) =>
        item.id === id ? { ...item, isChk: !item.isChk, todo: editTodo } : item
      )
    );
    setEditTodo("");
  };

  return (
    <>
      <h1>ToDoList</h1>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>추가</button>
      <ul>
        {doList.map((dos) => {
          return (
            <TodoCard
              id={dos.id}
              todo={dos.todo}
              time={dos.addTime}
              removeTodo={removeTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              editButton={editButton}
            />
          );
        })}
      </ul>
    </>
  );
}
