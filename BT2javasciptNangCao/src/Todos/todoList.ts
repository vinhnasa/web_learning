class todo{
    date: Date;
    works: String[];
    constructor(date: Date,works:String[]){
        this.date  = date;
        this.works = works;
    }
}

class todoList{
    List:todo[];
    constructor(List:todo[]){
        this.List = List;
    }

    addToList(todo: todo){        
        this.List.push(todo);
    }
}
let todo1 = new todo(new Date(),['ăn','ung']);
let todo2 = new todo(new Date(),['ăn1','ung1']);

let list1 = new todoList([])

list1.addToList(todo1)
list1.addToList(todo2)

console.log(list1);