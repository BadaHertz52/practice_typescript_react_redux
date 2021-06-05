import React from 'react';
import CounterContainer from './container/CounterContainer';
import TodoApp from './container/TodoApp';


function App () {
  const Appstyle :React.CSSProperties  = {
    marginLeft: 200,
    marginTop: 100
  };
  return (
    <>
      <div style = {Appstyle}>
        <h1>COUNTER</h1>
        <CounterContainer/>
      </div>
      
      <div style = {Appstyle} >
        <h1>Todo Lsit</h1>
        <TodoApp/> 
      </div>
      
      
    </>
  )
  
}

export default App;
