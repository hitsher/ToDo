
document.addEventListener('DOMContentLoaded', function() {
    const tasksList = document.querySelector('#tasksList');
    const todoForm = document.querySelector('#todoForm');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        if (textarea.value !== '') {
            addTask(textarea.value);
            textarea.value = '';
        }
    });

    function addTask(text) {
        
        const todo = document.createElement('div');
        todo.classList.add('tasksList');
    
        const todoDelete = document.createElement('button');
        todoDelete.classList.add('todoItem_delete');
        todoDelete.innerHTML = '<i class="fas fa-times-circle"></i>';
    
        const todoItem = document.createElement('div');
        todoItem.classList.add('todoItem');
         
        const par = document.createElement('p');
        par.innerText = text;

        todoItem.appendChild(par);
        todoItem.appendChild(todoDelete);

        todo.appendChild(todoItem);
       
        tasksList.append(todo);
    }

    tasksList.addEventListener('click', function(event) {
        if (event.target.closest('.todoItem_delete') !== null) {
            const todoElem = event.target.closest('.todoItem');
            todoElem.parentNode.removeChild(todoElem);
        }
    });
});