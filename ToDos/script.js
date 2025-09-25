
//globals
let todos = [];
let users = [];
const todoList = document.getElementById('todo-list');
const userSelect = document.getElementById('user-todo');
const form = document.querySelector('form');

//Atach events
document.addEventListener('DOMContentLoaded', initApp);

//basic logic
function getUserName(userId) {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Unknown';
}

function printTodo({id, userId, title, completed}) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = id;
    li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(userId)}</b></span>`

    const status = document.createElement('input');
    status.type = 'checkbox';
    status.checked = completed;
    status.addEventListener('change', handleTodoChange);

    const close = document.createElement('span');
    close.innerHTML = '&times;'; //крестик
    close.className = 'close';
    close.addEventListener('click', handleClose);

    li.prepend(status); // добавим "status" в начало <li>
    li.append(close);   // добавим "close" в конец <li>

    todoList.prepend(li);
}

function createUserOption(user) {
    const option = document.createElement('option');
    option.value = user.id;
    option.innerText = user.name;

    userSelect.append(option);
}

function removeTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
    const todo = todoList.querySelector(`[data-id="${todoId}"]`);
    todo.querySelector('input').removeEventListener('change', handleTodoChange);
    todo.querySelector('.close').removeEventListener('click', handleClose);

    todo.remove();
}

function errorAlert(error){
    alert(error.message);
}

//event logic
function initApp() {
    Promise.all([getAllTodos(), getAllUsers()]).then(values => {
        [todos, users] = values;
        

        //отправить в разметку
        todos.forEach(todo => printTodo(todo));
        users.forEach(user => createUserOption(user));
    });
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    createToDo({
        userId: Number(form.user.value),
        title: form.todo.value,
        completed: false,
    });
    form.reset();
}

function handleTodoChange() {
    const todoId = this.parentElement.dataset.id //доступ к id родителя checkbox
    const completed = this.checked;

    toggleTodoComplete(todoId, completed);
}

function handleClose() {
    const todoId = this.parentElement.dataset.id;
    deleteTodo(todoId);
}

//async logic

async function getAllTodos() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
        const data = await response.json();
    
        return data;   
    } catch(error) {
        errorAlert(error);
    } 
}

async function getAllUsers() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
    const data = await response.json();

    return data;    
    }catch(error) {
        errorAlert(error);
    }
} 

async function createToDo(todo) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const newTodo = await response.json();

    printTodo(newTodo);
        
    } catch (error) {
        errorAlert(error);
    }
}

async function toggleTodoComplete(todoId, completed) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: 'PATCH', // точечная замена
            body: JSON.stringify({ completed }),
            headers: {
                'Content-Type': 'application/json',
            },
    
        });
        const data = await response.json();
        console.log(data)
    
        if(!response.ok){
            throw new Error('Failed to connect with the server! Please try later!')
        }
    } catch (error) {
        errorAlert(error);
    }
    
}

async function deleteTodo(todoId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
            },
    
        });
        if(response.ok) {
            removeTodo(todoId);
        }
        else {
            throw new Error('Failed to connect with the server! Please try later!');
        }
        
    } catch (error) {
        errorAlert(error);
    }
}