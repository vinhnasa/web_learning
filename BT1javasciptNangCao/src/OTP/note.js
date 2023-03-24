var Note = /** @class */ (function () {
    function Note(title, content, amount) {
        this.title = title;
        this.content = content;
        this.amount = amount;
    }
    Note.prototype.addNote = function (extraQuantity) {
        this.amount = extraQuantity;
    };
    return Note;
}());
var NoteList = /** @class */ (function () {
    function NoteList(name, listArray) {
        this.name = name;
        this.listArray = listArray;
    }
    NoteList.prototype.addNoteToList = function (note, number) {
        if (note) {
            this.listArray[number] = note.title + note.content + note.amount;
        }
        else {
            console.log('Out of product');
            return;
        }
    };
    return NoteList;
}());
var Note1 = new Note('note1', 'here is note 1', 1);
Note1.addNote(5);
var NoteList1 = new NoteList('list1', []);
NoteList1.addNoteToList(Note1, 1);
console.log(NoteList1, 'danh sách');
