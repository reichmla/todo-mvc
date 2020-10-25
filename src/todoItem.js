/**
 * 
 */
class TodoItem {
    constructor(id, content, done, favorite) {
        this.id = id;
        this.content = content;
        this.done = done;
        this.favorite = favorite;
    }

    displayTodoItem() {
        const todoItems = document.getElementById('todoItems');
        const todoItemWrapper = document.createElement("div");
        const todoItemWrapperText = document.createElement("p");
        
        todoItemWrapper.setAttribute('id', this.id);
        todoItemWrapper.setAttribute('class', 'todoItem');

        todoItemWrapperText.textContent = this.content;
        todoItemWrapperText.classList.add('edit');

        todoItemWrapper.append(todoItemWrapperText);
        todoItems.append(todoItemWrapper);

       
        if (this.favorite) {
            todoItemWrapper.classList.add('favorite');
        }
        if (this.done) {
            todoItemWrapper.classList.add('done');
        }

        // add controls
        this._addFavorite(todoItemWrapper);
        this._addDone(todoItemWrapper);
        this._addDelete(todoItemWrapper);        
    }

    _addFavorite(todoItemWrapper) {
        const favorite = document.createElement("a");
        const favoriteImg = document.createElement("img");
        favoriteImg.setAttribute('src', './img/favorite.svg');
        favoriteImg.setAttribute('class', 'controlBtn favorite');
        favorite.setAttribute('class', 'favorite');

        favorite.append(favoriteImg);
        todoItemWrapper.append(favorite);

        
    }
    _addDone(todoItemWrapper) {
        const done = document.createElement("a");
        const doneImg = document.createElement("img");
        done.setAttribute('class', 'done');
        done.textContent = "done";

        done.append(doneImg);
        todoItemWrapper.append(done);

        
    }
    _addDelete(todoItemWrapper) {
        const deleteItem = document.createElement("a");
        const deleteImg = document.createElement("img");
        deleteItem.setAttribute('class', 'controlBtn delete');
        deleteImg.setAttribute('src', './img/close.svg');
        deleteImg.setAttribute('class', 'delete');
        deleteItem.append(deleteImg);
        todoItemWrapper.append(deleteItem);
    }
}

module.exports = TodoItem;