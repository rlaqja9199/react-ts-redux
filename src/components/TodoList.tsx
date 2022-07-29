import React from 'react'
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

//props타입 지정
type TodolistProps = {
    todos: Todo[];
    onToggle: (id:number) => void;
    onRemove: (id:number) => void;
}
const TodoList = ({todos, onToggle, onRemove}: TodolistProps) => {
    if(todos.length ===0) return <div>등학한 항목이 없습니다.</div>;
  return (
    <ul>
        {todos.map(todo=>(
            <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove}></TodoItem>
        ))}
    </ul>
  )
}

export default TodoList