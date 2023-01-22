import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import { useEffect, useState } from 'react'

function List({todoList, setTodos, activeFilter}) {
  const [value, setValue] = useState();
  
  const changeAllListStatus = (e) => {
    let todos = [];
    todoList.map((todo) => {
        let toDo = {text: todo.text, done: e.target.checked};
        todos.push(toDo);
    })
    setTodos(todos);

    var checkboxes = document.getElementsByName('listToggle');
    for (var checkbox of checkboxes) {
        checkbox.checked = e.target.checked;
    }
  }

  const changeListItemStatus = (e, toDo, index) => {          
    let todos = Object.entries(todoList);

    toDo.done = e.target.checked;
    console.log(toDo);

    setTodos(existingItems => {
        return [
          ...existingItems.slice(0, index),
          toDo,
          ...existingItems.slice(index + 1),
        ]
    })

    console.log(todoList);
  }

  const deleteToDo = (e, index) => {
    setTodos(existingItems => {
      return [
        ...existingItems.slice(0, index),
        ...existingItems.slice(index + 1),
      ]
    })
     
  }

  return (
    <section className='main' hidden={Object.values(todoList).length == 0}>
      <input id="toggle-all" className="toggle-all" type="checkbox" onChange={changeAllListStatus}/>
      <label htmlFor="toggle-all">
          Mark all as complete
		  </label>

      <ul className='todo-list'>
        {
          todoList.map((todo, index) => 
            <li key={index} className={todo.done ? 'completed' : ''}
              hidden={(todo.done && activeFilter === 'active') || (!todo.done && activeFilter === 'completed')}>
                {console.log(todo)}
                <div className="view">
                  <input name='listToggle' className="toggle" type="checkbox" checked={todo.done} onChange={(e) => changeListItemStatus(e, todo, index)}/>
                  <label>{todo.text}</label>
                  <button className="destroy" onClick={(e) => deleteToDo(e, index)}></button>
                </div>
            </li>
          )
        }
      </ul>        
    </section>
  )
}

export default List