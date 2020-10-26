const TodoItem = require("./todoItem");

/**
 * @class Controller
 */
class View {
    constructor() {
        this.todoItems = document.getElementById('todoItems');
        this.inputSection = document.getElementById('inputSection');
        this.clearAllBtn = document.getElementById('clearAll');
        this.addTodo = document.getElementById('addTodo');
        this.deleteButtons = document.getElementsByClassName('delete');
    }

    /*
    * Event Listeners
    */
    viewAdd(handlerFunction) {
        const inputSection = this.inputSection;
        this.addTodo.addEventListener('click', () => {
            this.viewAddHelper(handlerFunction, inputSection);
        }, false);


    }
    viewAddHelper(handlerFunction, inputSection) {
        const inputValue = inputSection.value;
        handlerFunction(inputValue);
        this.clearInput();
    }

    viewDelete(handlerFunction) {
        this.todoItems.addEventListener('click', (e) => {
            if (e.target.className === 'delete') {
                const parentElementID = parseInt(e.target.parentElement.parentElement.parentElement.id);
                this.viewDeleteHelper(handlerFunction, parentElementID);
            }
        }, false);
    }
    viewDeleteHelper(handlerFunction, id) {
        handlerFunction(id);
    }

    viewFavorite(handlerFunction) {
        this.todoItems.addEventListener('click', (e) => {
            if (e.target.classList.contains('favorite')) {
                const parentElementID = parseInt(e.target.parentElement.parentElement.parentElement.id);
                this.viewFavoriteHelper(handlerFunction, parentElementID);
            }
        }, false);
    }
    viewFavoriteHelper(handlerFunction, id) {
        handlerFunction(id);
    }

    viewEdit(handlerFunction) {
        this.todoItems.addEventListener('click', (e) => {
            if (e.target.classList.contains('edit')) {
                const tempInput = document.createElement('input');
                tempInput.setAttribute('value', e.target.textContent);

                const tempInputSubmit = document.createElement('a');
                tempInputSubmit.textContent = 'Submit';
                tempInputSubmit.classList.add('submit');
                tempInputSubmit.classList.add('button');

                e.target.parentElement.append(tempInput);
                e.target.parentElement.append(tempInputSubmit);

                const parentElementID = parseInt(e.target.parentElement.id);
                let hideText = document.getElementById(parentElementID);
                hideText = hideText.getElementsByClassName('edit')[0];
                hideText.textContent = "";

                tempInputSubmit.addEventListener('click', () => {
                    this.viewEditHelper(handlerFunction, parentElementID, tempInput.value);
                }, false);
            }
        }, false);
    }
    viewEditHelper(handlerFunction, id, newContent) {
        console.log(id, newContent);
        handlerFunction(id, newContent);
    }

    viewDone(handlerFunction) {
        this.todoItems.addEventListener('click', (e) => {
            if (e.target.classList.contains('done')) {
                const parentElementID = parseInt(e.target.parentElement.parentElement.id);
                this.viewDoneHelper(handlerFunction, parentElementID);
            }
        }, false);
    }
    viewDoneHelper(handlerFunction, id) {
        handlerFunction(id);
    }

    // clear all items
    viewClear(handlerFunction) {
        this.clearAllBtn.addEventListener('click', handlerFunction, false)
    }

    // clear input field
    clearInput() {
        console.log("clear");
        this.inputSection.value = '';
    }

    /**
     * Render Function
     * 
     * @param {*} todos 
     */
    render(todos) {
        console.log(todos);
        if (todos.length > 0) {
            this.todoItems.innerHTML = "";
            for (const todo of todos) {
                const todoItem = new TodoItem(todo.id, todo.content, todo.done, todo.favorite);
                todoItem.displayTodoItem();
            }
        } else {
            this.todoItems.innerHTML = "";
        }
    }
}

module.exports = View;