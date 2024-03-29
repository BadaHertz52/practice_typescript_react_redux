import React from 'react';
import { Todo } from '../moduels/todo';

type TodoItemProps = {
  todo : Todo ;
  onToggle : (id:number) => void ;
  onRemove : (id: number) => void ;
};

function TodoItem ({todo, onToggle,onRemove} :TodoItemProps){
  const handleToggle = ()=> onToggle(todo.id) ;
  const handleRemove = ()=> onRemove(todo.id);

  const textStyle :React.CSSProperties ={
    textDecoration: todo.done? 'line-through' : 'none'
  } ;

  const removeStyle : React.CSSProperties = {
    color:'skyblue',
    marginLeft:0 
  };
  return(
    <li>
      <span onClick={handleToggle} style={textStyle}>{todo.text}</span>
      <span onClick={handleRemove} style={removeStyle}>(❌)</span>
    </li>
  )
}

export default TodoItem ;