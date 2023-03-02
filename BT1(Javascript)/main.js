
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

if (avg <= 70) {
    document.write("Grade : D"); 
} 
else if (avg <= 80) {
    document.write("Grade : C"); 
} 
else if (avg <= 90){
    document.write("Grade : B"); 
} 
else if (avg <= 100){
    document.write("Grade : A"); 
}