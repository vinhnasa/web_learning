var todo = /** @class */ (function () {
    function todo(date, works) {
        this.date = date;
        this.works = works;
    }
    return todo;
}());
var todoList = /** @class */ (function () {
    function todoList(List) {
        this.List = List;
    }
    todoList.prototype.addToList = function (todo) {
        this.List.push(todo);
    };
    return todoList;
}());
var todo1 = new todo(new Date(), ['ăn', 'ung']);
var todo2 = new todo(new Date(), ['ăn1', 'ung1']);
var list1 = new todoList([]);
list1.addToList(todo1);
list1.addToList(todo2);
console.log(list1);
