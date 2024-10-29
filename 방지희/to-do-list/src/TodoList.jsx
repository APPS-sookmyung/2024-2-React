import React, { useState } from "react";

let todoId = 0;

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const [editData, setEditData] = useState(null);

  const addTodo = () => {
    setNewTodo("");

    const newList = [...todoList];
    newList.push({
      id: todoId++,
      text: newTodo,
    });
    setTodoList(newList);
  };

  const editTodo = (todo) => {
    setEditData(todo);
  };

  const saveEdit = () => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === editData.id ? { ...todo, text: editData.text } : todo
      )
    );
    setEditData(null);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {editData && editData.id === todo.id ? (
              <>
                <input
                  type="text"
                  defaultValue={editData.text}
                  onChange={(e) =>
                    setEditData({ ...editData, text: e.target.value })
                  }
                />
                <button onClick={saveEdit}>저장</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => editTodo(todo)}>수정</button>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
