/**
 * @class Controller
 */
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.model.bindTodoListChanged(this.onTodoListChanged.bind(this));
        this.connectedGet();

        this.view.viewAdd(this.connectedAdd.bind(this));
        this.view.viewDelete(this.connectedDelete.bind(this));
        this.view.viewFavorite(this.connectedFavorite.bind(this));
        this.view.viewEdit(this.connectedEdit.bind(this));
        this.view.viewDone(this.connectedDone.bind(this));
        this.view.viewClear(this.connectedClear.bind(this));
    }
    // binding methods
    onTodoListChanged(todos) {
        this.view.render(todos);
    }
    connectedGet() {
        this.model.modelGet();
    }
    connectedAdd(todo) {
        this.model.modelAdd(todo);
    }
    connectedDelete(todo) {
        this.model.modelDelete(todo);
    }
    connectedFavorite(todo) {
        console.log("hi");
        this.model.modelFavorite(todo);
    }
    connectedEdit(id, newContent) {
        this.model.modelEdit(id, newContent);
    }
    connectedDone(todo) {
        this.model.modelDone(todo);
    }
    connectedClear(todo) {
        this.model.modelClear(todo);
    }
}

module.exports = Controller;