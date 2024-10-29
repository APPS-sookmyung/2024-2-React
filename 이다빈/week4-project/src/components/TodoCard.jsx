import React from "react";

export default function TodoCard({
  id,
  todo,
  removeTodo,
  editTodo,
  setEditTodo,
  editButton,
}) {
  return (
    <li>
      <div>{todo}</div>
      <button onClick={() => removeTodo(id)}>삭제</button>
      <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
      <button onClick={() => editButton(id)}>수정</button>
    </li>
  );
}
