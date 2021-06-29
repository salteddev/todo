let addMessage = document.querySelector('.main-input');
let addButton = document.querySelector('.main-btn');
let todoList = [];
let todo = document.querySelector('.todo');
if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'))
    displayMessages()
}

addButton.addEventListener('click', function (){
    let newToDo = {
        todo: addMessage.value,
        checked: false,
        btn: true,
    };
    if (addMessage.value != ''){
        todoList.push(newToDo);
        displayMessages();
        localStorage.setItem('todo', JSON.stringify(todoList));
    }
    addMessage.value = '';
})
function displayMessages(){
    let displayMessage = '';
    todoList.forEach(function (item, index){
        // let btn = document.createElement("button");
        // btn.innerText = "Delete";
        // btn.id = `todo-${index}`;
        // btn.classList.add("delete-btn");
        let displayBtn = '';
        if (item.btn = true){
            displayBtn +=
            `<div class="delete-btn">
                <span></span>
            </div>`;
        }
        displayMessage += `
        <li class="todo-item">
            <input ${item.checked ? 'checked' : ''} id="item-${index}" type="checkbox"><label for="item-${index}">${item.todo}</label>
            ${displayBtn}
        </li>
        `
    });
    todo.innerHTML = displayMessage;
    let deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach(function (item, index){
        item.addEventListener('click', function (event){
            todoList.splice(index, 1);
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        });

    });
}
todo.addEventListener('change', function (event){
    let idInput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for='+ idInput +']');
    let valueLabel = forLabel.innerHTML;
    todoList.forEach(function(item){
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        };
    });
});






