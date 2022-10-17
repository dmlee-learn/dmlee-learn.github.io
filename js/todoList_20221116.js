let todolistArray = [];
const TODOS = 'todos';
class todoClass {
    TODOFORM_NAME = 'todo-form';
    TODOFORM_INPUT_NAME = 'todo-form-input';
    TODOFORM_SUBMIT_NAME = 'todo-form-submit';
    TODOLIST_NAME = 'todo-list';
    todoDivId = '';
    todoForm = '';
    todoList = '';
    

    constructor(todoDivId) {
        this.todoDivId = document.querySelector(`#${todoDivId}`);
    }

    init(){

        //create form
        this.todoForm = document.createElement('form');
        this.todoForm.setAttribute('id', this.TODOFORM_NAME);
        this.todoformInput = document.createElement('input');
        this.todoformInput.setAttribute('id', this.TODOFORM_INPUT_NAME);
        this.todoformInput.placeholder="input to your todo"
        this.todoformButton = document.createElement('button');
        this.todoformButton.setAttribute('id', this.TODOFORM_SUBMIT_NAME);
        this.todoformButton.setAttribute('type', 'submit');
        this.todoformButton.innerText = 'submit';
        this.todoformButton.classList.add('hidden');

        //create list
        this.todoList = document.createElement('ul');        
        this.todoList.setAttribute('id', this.TODOLIST_NAME);

        this.todoForm.appendChild(this.todoformInput);
        this.todoForm.appendChild(this.todoformButton);
        this.todoDivId.appendChild(this.todoForm);
        this.todoDivId.appendChild(this.todoList);

        //this.todoformButton inti
        this.todoformButton.addEventListener('click', this.onTodoformButtonClick);
        
        const todolistStorage = localStorage.getItem(TODOS);
        if(todolistStorage !== null) {
            todolistArray = JSON.parse(todolistStorage);
            console.log(todolistArray);
            //this.loadTodoList(todolistArray);
            todolistArray.forEach(this.makeTodoItem);
        }
    }

    saveTodoList(todolistArray){
        localStorage.setItem(TODOS, JSON.stringify(todolistArray));
    }

    makeTodoItem(item) {
        const TODOLIST_NAME = 'todo-list';
        const todoList = document.querySelector(`#${TODOLIST_NAME}`);

        const todoItem = document.createElement('li');
        const span = document.createElement('span'); 
        const button = document.createElement('button');
        
        span.innerText = item;

        button.innerText = '❌';
        

        todoItem.appendChild(span);
        todoItem.appendChild(button);
        todoList.appendChild(todoItem);
        button.addEventListener('click', todo.onDeleteTodo);
        
    }
    
    onTodoformButtonClick(event) {
        event.preventDefault();
        const TODOLIST_NAME = 'todo-list';        
        const parent = this.parentElement;
        const input = parent.querySelector('input');
        const todoList = document.querySelector(`#${TODOLIST_NAME}`);

        const todoItem = document.createElement('li');
        const span = document.createElement('span'); 
        const button = document.createElement('button');
        
        const inputText = input.value;
        span.innerText = inputText;
        console.dir(this);
        todolistArray.push(inputText);
        input.value = '';

        button.innerText = '❌';
        

        todoItem.appendChild(span);
        todoItem.appendChild(button);
        todoList.appendChild(todoItem);
        button.addEventListener('click', todo.onDeleteTodo);
        console.log(todolistArray);
        todo.saveTodoList(todolistArray);
    }

    onDeleteTodo(event) {
        const parent = event.target.parentElement;       
        console.dir(parent); 
        parent.remove();
    }

}

let todo = new todoClass("todoDiv");
todo.init();
/*
const todo = {
    todoForm:document.querySelector('#todo-form')
    , todoList:document.querySelector('#todo-list')
    , 
};
*/

