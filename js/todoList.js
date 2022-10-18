//use todoObject(divname);
let todoObject = {
    TODOS:'todos'
    , TODOFORM_NAME : 'todo-form'
    , TODOFORM_INPUT_SPAN:'todo-form-span'
    , TODOFORM_INPUT_NAME:'todo-form-input'
    , TODOFORM_SUBMIT_NAME:'todo-form-submit'
    , TODOLIST_NAME:'todo-list'
    , ID:'id'
    , TEXT:'text'
    , INLINE:'inline'
    , todolistArray:[]
    , todoDivId:{}
    , todoForm:document.createElement('form')
    , todoformInput:document.createElement('input')
    , todoformButton:document.createElement('button')
    , todoList:document.createElement('ul')

    , init:(todoDivId) => {
        todoObject.todoDivId = document.querySelector(`#${todoDivId}`);

         //create form
        const h2 = document.createElement('h2');
        h2.classList.add(todoObject.INLINE);
        h2.innerText = 'What is main your focus?';
        todoObject.todoForm.setAttribute(todoObject.ID, todoObject.TODOFORM_NAME);
        todoObject.todoformInput.setAttribute(todoObject.ID, todoObject.TODOFORM_INPUT_NAME);
        todoObject.todoformInput.setAttribute('type', 'text');
        todoObject.todoformInput.placeholder="input to your todo"
        todoObject.todoformButton.setAttribute(todoObject.ID, todoObject.TODOFORM_SUBMIT_NAME);
        todoObject.todoformButton.setAttribute('type', 'submit');
        todoObject.todoformButton.innerText = 'submit';
        todoObject.todoformButton.classList.add('hidden');

        //create list     
        todoObject.todoList.setAttribute(todoObject.ID, todoObject.TODOLIST_NAME);

        todoObject.todoForm.appendChild(h2);
        todoObject.todoForm.appendChild(todoObject.todoformInput);
        todoObject.todoForm.appendChild(todoObject.todoformButton);
        todoObject.todoDivId.appendChild(todoObject.todoForm);
        todoObject.todoDivId.appendChild(todoObject.todoList);

        //todoObject.todoformButton inti
        todoObject.todoformButton.addEventListener('click', todoObject.onTodoformButtonClick);
        
        //if save make list
        const todolistStorage = localStorage.getItem(todoObject.TODOS);
        if(todolistStorage !== null) {
            todoObject.todolistArray = JSON.parse(todolistStorage);
            todoObject.todolistArray.forEach(todoObject.makeTodoItem);
        }
    }
    
    , makeTodoItem:(item) => {
        const todoItem = document.createElement('li');
        const span = document.createElement('span'); 
        const button = document.createElement('button');
        todoItem.setAttribute(todoObject.ID, item.id);
        span.innerText = item.text;
        button.classList.add('todo-list-delete-button');
        button.innerText = '❌';        

        todoItem.appendChild(span);
        todoItem.appendChild(button);
        todoObject.todoList.appendChild(todoItem);
        button.addEventListener('click', todoObject.onDeleteTodo);
    }
    , saveTodoList:(todolistArray) => {
        todoObject.saveStorage(todoObject.TODOS, todolistArray);
    }
    
    , saveStorage:(key, todolistArray) => {
        localStorage.setItem(key, JSON.stringify(todolistArray));
    }

    , onTodoformButtonClick:(event) => {
        event.preventDefault();                
        const inputText = todoObject.todoformInput.value;        
        const itemArray = {id:Date.now(), text:inputText};
        todoObject.makeTodoItem(itemArray);
        todoObject.todolistArray.push(itemArray);
        todoObject.todoformInput.value = '';       
        todoObject.saveTodoList(todoObject.todolistArray);
    }

    , onDeleteTodo:(event) => {
        const parent = event.target.parentElement;
        todoObject.removeById(parseInt(parent.id));
        parent.remove();
    }

    , removeById:(id) => {      
        todoObject.todolistArray = todoObject.todolistArray.filter(item => id !== item.id);
        todoObject.saveTodoList(todoObject.todolistArray);
    }
};

