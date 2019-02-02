document.addEventListener('DOMContentLoaded', function () {
    const tasksList = document.querySelector('#tasksList');
    const todoForm = document.querySelector('#todoForm');

    todoForm.addEventListener('submit', function (e) {
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

    tasksList.addEventListener('click', function (event) {
        if (event.target.closest('.todoItem_delete') !== null) {
            const todoElem = event.target.closest('.todoItem');
            todoElem.parentNode.removeChild(todoElem);
        }
    });

    var parap = document.getElementsByTagName('p');

    const buttonAdd = document.getElementById('buttonAdd');
    buttonAdd.addEventListener('click', function () {
        for (let i = 0; i < parap.length; i++) {
            localStorage.setItem('task' + i, parap[i].innerText);
        }

    }, false)

    const showData = document.getElementById('buttonShow');
    showData.addEventListener('click', function () {
        let localStorageLength = localStorage.length;
        for (let i = 0; i < localStorageLength; i++) {
            addTask(localStorage.getItem('task' + i));
        }
    }, false)

    const delData = document.getElementById('buttonDelete');
    delData.addEventListener('click', function () {
        let localStorageLength = localStorage.length;
        for (let i = 0; i < localStorageLength; i++) {
            localStorage.removeItem('task' + i);
        }
    }, false)
});