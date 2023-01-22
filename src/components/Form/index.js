import React from 'react'

function Form(props) {

  const addTodo = (e) => {   
    if (e.key === 'Enter') {
      const text = e.target.value.trim(); 
      if(text !== "") {
        const todo = {text: text, done: false}
        props.addTodos([...props.toDos, todo]);
      }      
      e.target.value = '';
    }    
  }

  return (
    <div>
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={addTodo}/>    
    </div>
  )
}

export default Form