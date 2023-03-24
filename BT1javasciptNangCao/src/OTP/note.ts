class Note {
    title: string;
    content: string;
    amount: number;
    constructor(title: string, content: string, amount: number) {
        this.title = title;
        this.content = content;
        this.amount = amount
    }

    addNote(extraQuantity: number) {
        this.amount = extraQuantity;
    }

}

class NoteList {
    name: string;
    listArray: String[];
    constructor(name: string, listArray: String[]) {
        this.name = name;
        this.listArray = listArray;
    }

    addNoteToList(note: Note,number:number) {
        if (note) {
            this.listArray[number] = note.title + note.content + note.amount;
        } else {
            console.log('Out of product');
            return;
        }
    }
}

let Note1 = new Note('note1', 'here is note 1',1);
Note1.addNote(5);

let NoteList1 = new NoteList('list1',[]);
NoteList1.addNoteToList(Note1,1);

console.log(NoteList1,'danh sách');





