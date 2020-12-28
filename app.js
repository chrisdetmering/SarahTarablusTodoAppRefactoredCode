const input = document.getElementById('new-task');
const addBtn = document.getElementById('addTask-btn');
const list = document.querySelector('.list');
const clearBtn =  document.getElementById('clear-btn');
const clearListBtn = document.getElementById('clear-btn-2');


const getSavedTodos = () => { 
  const todos = JSON.parse(localStorage.getItem("todos")) || []; 
  return todos; 
}

const saveTodo = (todo) => {
  const todos = getSavedTodos(); 
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos)); 
} 

const displayTodo = (todo) => { 
  const todoListItem = createTodoListItem(todo); 
  const todoDeleteButton = createTodoDeleteButton(todo);

  todoListItem.appendChild(todoDeleteButton);
  list.appendChild(todoListItem);
}


const createTodoListItem = todo => { 
  const li = document.createElement('li');
  li.className = 'list-item';
  li.textContent = todo.text;
  return li; 
}


const deleteSavedTodo = todo => { 
  const todos = getSavedTodos(); 

  const newTodos = todos.filter(savedTodo => savedTodo.id !== todo.id)
  localStorage.setItem('todos', JSON.stringify(newTodos)); 
}



const createTodoDeleteButton = todo => { 
    const deleteButton = document.createElement('a');
    deleteButton.className = 'delete-btn';
    deleteButton.innerHTML = 'X'
    deleteButton.style.backgroundColor = 'rgb(255, 204, 94)';
    deleteButton.style.color = 'white';
    deleteButton.style.cursor = 'pointer';


    deleteButton.addEventListener('click', e => { 
      e.target.parentElement.remove() 
      deleteSavedTodo(todo); 
    })

    return deleteButton; 
}


const addNewTodo = (e) => {
  e.preventDefault();
  if(input.value === ''){
      alert('Make sure to add a task!');
      return; 
  }

    const todo = { 
      id: Math.random(), 
      text: input.value, 
      isCompleted: false, 
    }

    displayTodo(todo); 
    saveTodo(todo);
    input.value = '';
}

addBtn.addEventListener('click', addNewTodo);



const displaySavedTodos = () => {
  const savedTodos = getSavedTodos(); 

  savedTodos.forEach(todo => { 
    displayTodo(todo)
  })
}
displaySavedTodos();















// function removeTask(e){
//   if(e.target.classList.contains('delete-btn')){
//     e.target.parentElement.remove();
//   }
// }

// function crossTask(e){
//   if(e.target.classList.contains('check-box')){
//     const li = e.target.parentElement;
//     li.style.textDecoration = 'line-through';
//     /*e.target.siblingChild.contains('delete-btn')
//       const x = e.target.siblingChild;
//       x.style.textDecoration = 'none';*/
//   }
// }

// function clearTasks(){
//   while(list.firstChild){
//     list.removeChild(list.firstChild);
//     clearBtn.style.display = 'none';
//   }
// }














