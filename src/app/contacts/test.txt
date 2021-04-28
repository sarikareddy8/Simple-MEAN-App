function test1(){
    var a=1;
    alert(a);
    if(true){
        var a;
        alert(a);
        a=2;
    }
    alert(a);
}
test1();