import React from 'react'
import { useState } from 'react'
import TodoCard from './TodoCard';

// TodoCard를 리스트 형식으로 관리
// 새로운 TODO 추가할 수 있는 입력창과 버튼 

let nextId = 0;
let style = "none";

export default function TodoList() {

    const [newTodo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [updatedTodo, setUpdateTodo] = useState(""); // todo update 입력창
    const [updateState, setUpdateState] = useState(false); // update 버튼 눌렀는지 확인용

    // todo 추가하기
    const addTodo = () => {
        setTodo("");

        setTodoList([
            ...todoList,
            {
                id: nextId++,
                todo: newTodo,
            },
        ]);
    }

    // todo 수정하기
    const updateTodo = (id, todo) => {
        setUpdateState(!updateState); // 버튼 누르면 update 상태 바꾸기
        setUpdateTodo(todo); // 현 todoCard의 todo 내용을 업데이트 입력창으로 불러오기; updatedTodo === todo 만들기

        // 수정 후 todo 저장
        const updatedTodoList = todoList.map((todoCard) => { return todoCard.id === id ? { ...todoCard, todo: updatedTodo } : todoCard });
        setTodoList(updatedTodoList);
    }

    // todo 수정 중 아니면 업데이트 창 숨기기
    updateState ? style = "" : style = "none";

    // todo 삭제
    const removeTodo = (id) => {
        let reducedTodo = [...todoList];
        reducedTodo.splice(id);

        setTodoList(reducedTodo);
    }

    return (
        <div>
            <h1>TODO 리스트</h1>
            <ul>
                {
                    todoList.map((card) => {
                        return (
                            <TodoCard
                                id={card.id}
                                todo={card.todo}
                                removeCard={() => removeTodo(card.id)}
                                updateCard={() => updateTodo(card.id, card.todo)}
                            />
                        )
                    })
                }
                <input style={{ display: style }} value={updatedTodo} onChange={(e) => setUpdateTodo(e.target.value)} />
            </ul>
            <input value={newTodo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>생성</button>
        </div>
    )
}
