import { useState } from 'react'
import Filter from './Filter';
import Form from './Form';
import Info from './Info';
import List from './List';
import './styles.css'

function ToDos() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [todos, setTodos] = useState([
    {
        "done": true,
        "text": "Taste JavaScript"
    },
    {
        "text": "Code furiously",
        "done": true
    },
    {
        "text": "Promote Mavo",
        "done": false
    },
    {
        "text": "Give talks",
        "done": false
    },
    {
        "text": "Write tutorials",
        "done": true
    },
    {
        "text": "Have a life!",
        "done": false
    }
  ]);  

  return (
    <div className=''>        
        <div className='todoapp'>
            <Form addTodos={setTodos} toDos={todos}/>
            <List todoList={todos} setTodos={setTodos} activeFilter={activeFilter}/>
            <Filter todoList={todos} setTodos={setTodos} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>            
        </div>        
        <Info/>   
    </div>
  )
}

export default ToDos