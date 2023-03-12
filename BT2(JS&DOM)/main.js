function reset(){
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("c").value = null;
    document.getElementById("kq1").value = null;
    document.getElementById("kq2").value = null;
    document.getElementById("kq3").value = null;
    document.getElementById("log").innerText="";
}
// Ham tinh tong
function sum(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    b = (b/100)*12;
    c = c*12;
    var x = Math.pow(1+b,c);
    var a1 = (a*x*b)/(x-1);
    var a2 = a1*c;
    var a3 = a2-a;
    check(a,b,c,a1,a2,a3);
    
}
// Ham check value
function check(a, b, c, a1, a2, a3) {
    if(isNaN(a1)==false&&isNaN(a2)==false&&isNaN(a3)==false){
        document.getElementById("kq1").value = a1;
        document.getElementById("kq2").value = a2;
        document.getElementById("kq3").value = a3;
        document.getElementById("log").innerText="";
    }
    else{
        if(isNaN(a)==true && isNaN(b)==true&& isNaN(c)==true){
            document.getElementById("log").innerText="Vui long nhap gia tri a va b o dang gia tri so!";
            document.getElementById("a").value = null;
            document.getElementById("b").value = null;
            document.getElementById("c").value = null;
            document.getElementById("kq1").value = null;
            document.getElementById("kq2").value = null;
            document.getElementById("kq3").value = null;
        }
        else
            if(isNaN(a)==true){
                document.getElementById("log").innerText="Vui long nhap gia tri a o dang gia tri so!";
                document.getElementById("a").value = null;
                document.getElementById("kq1").value = null;
                document.getElementById("kq2").value = null;
                document.getElementById("kq3").value = null;
            }
            else if(isNaN(b)==true){
                document.getElementById("log").innerText="Vui long nhap gia tri b o dang gia tri so!";
                document.getElementById("b").value = null;
                document.getElementById("kq1").value = null;
                document.getElementById("kq2").value = null;
                document.getElementById("kq3").value = null;
            }else{
                document.getElementById("log").innerText="Vui long nhap gia tri c o dang gia tri so!";
                document.getElementById("c").value = null;
                document.getElementById("kq1").value = null;
                document.getElementById("kq2").value = null;
                document.getElementById("kq3").value = null;
            }
        
    }
}