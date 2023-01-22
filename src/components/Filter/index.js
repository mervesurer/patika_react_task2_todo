import {useState} from 'react'

function Filter({todoList, setTodos, activeFilter, setActiveFilter}) {
  const todoDoneList = todoList.filter(todo => todo.done == true);

  const deleteToDoDoneList = () => {
	let toDoLeftList = []; 

	todoList.map((todo) => {
		if(!todo.done)
			toDoLeftList.push(todo);
	})

	setTodos(toDoLeftList);
  }

  const activeToDos = todoList.filter(todo => todo.done == false).length;

  return (
    <div className='footer' hidden={Object.keys(todoList).length == 0}>
      <span className='todo-count'>
          {activeToDos} items left
      </span>        
      <ul className="filters">
			<li>
				<a className={activeFilter == 'all' ? 'selected' : ''}
					onClick={() => setActiveFilter('all')}>All</a>
			</li>
			<li>
				<a className={activeFilter == 'active' ? 'selected' : ''}
					onClick={() => setActiveFilter('active')}>Active</a>
			</li>
			<li>
				<a className={activeFilter == 'completed' ? 'selected' : ''}
					onClick={() => setActiveFilter('completed')}>Completed</a>
			</li>
		</ul>
      <button hidden={todoDoneList == 0} className="clear-completed" onClick={deleteToDoDoneList}>
			Clear completed
		</button>
    </div>
  )
}

export default Filter