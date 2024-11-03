import React from 'react'

// Todo 내용, 작성 시간, 삭제 버튼, 수정 버튼


export default function TodoCard({ key, todo, removeCard, updateCard }) {
  return (
    <div className="todo-content">
      <span>{todo}</span>
      <button onClick={removeCard}>삭제</button>
      <button onClick={updateCard}>수정</button>
    </div>
  )
}
