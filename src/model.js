const TodoItem = require("./todoItem");

/**
 * @class Controller
 */
class Model {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todoItems')) || [];
        this.modelAdd.bind(this);
        this.modelGet.bind(this);
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }
    _commit() {
        this.onTodoListChanged(this.todos);
        localStorage.setItem('todoItems', JSON.stringify(this.todos));
    }
    modelGet() {
        this._commit();
    }
    modelAdd(content) {
        let newID;
        if (this.todos.length == 0) {
            newID = 1;
        } else {
            newID = this.todos[this.todos.length - 1].id + 1;
        }
        const newItem = new TodoItem(newID, content);

        this.todos.push(newItem);
        this._commit();
    }
    modelDelete(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                if (this.todos.length > 1) {
                    this.todos.splice(i, 1);
                    return this._commit();
                } else {
                    this.todos = [];
                    return this._commit();
                }
            }
        }
    }
    modelFavorite(id) {
        console.log("works");
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos[i].favorite = !this.todos[i].favorite;
                return this._commit();
            }
        }
    }
    modelEdit(id, newContent) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos[i].content = newContent;
                return this._commit();
            }
        }
    }
    modelDone(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos[i].done = !this.todos[i].done;
                return this._commit();
            }
        }
    }
    modelClear() {
        this.todos = [];
        this._commit();
    }
}

module.exports = Model;