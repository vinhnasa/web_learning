function reset(){
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("kq").value = null;
    document.getElementById("log").innerText="";
}
// Ham tinh tong
function sum(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var s = (b)/(a*a);
    check(a,b,s);
    if(s <= 19.1){
        document.getElementById("log").innerText="Gay vl";
    }else if(s >19.1 && s <= 27.3){
        document.getElementById("log").innerText="Binh thuong vl";
    }else if(s > 27.3 && s <= 32.3){
        document.getElementById("log").innerText="Tren ly tuong roi";
    }else if(s > 32,3){
        document.getElementById("log").innerText="Beo phi";
    }
}
// Ham check value
function check(a, b, c) {
    if(isNaN(c)==false){
        document.getElementById("kq").value = c;
        document.getElementById("log").innerText="";
    }
    else{
        if(isNaN(a)==true && isNaN(b)==true){
            document.getElementById("log").innerText="Vui long nhap gia tri a va b o dang gia tri so!";
            document.getElementById("a").value = null;
            document.getElementById("b").value = null;
            document.getElementById("kq").value = null;
        }
        else
            if(isNaN(a)==true){
                document.getElementById("log").innerText="Vui long nhap gia tri a o dang gia tri so!";
                document.getElementById("a").value = null;
                document.getElementById("kq").value = null;
            }
            else{
                document.getElementById("log").innerText="Vui long nhap gia tri b o dang gia tri so!";
                document.getElementById("b").value = null;
                document.getElementById("kq").value = null;
            }
        
    }
}