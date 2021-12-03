// "use strict"
// x=22;

// function press(){
//     "use strict";
//     y=33;
// }

// press();

"use strict";
var y = 33;
// delete y;
eval("var y = 3")
console.log(y)
var str = "This is a string   message  ";
document.write("<br>"+str.length);
document.write("<br>"+str.indexOf("message"));
document.write("<br>"+str[2]);
document.write("<br>"+str.replace(" is", "  IS"));
document.write("<br>"+str.trim());
document.write("<br>"+str.split(" ,"));
document.write("<br>"+str.slice(4,9));
document.write("<br>"+str.substring(1,2));

// var fruits = ["Aa","va","ca","AAAA","EDE","iedj"];
// document.write("<br>"+Array.isArray(fruits));
// fruits.forEach(func);

// function func(value){
//     document.write("<br>"+value);
// }
// fruits.filter(func1);
// function func1(value1){
//     return value1.startsWith("c");
// }
// document.write("<br> "+fruits.filter(func1));

function argFunction(val){
    document.write(val);
}

function callbackFunction (var1 , Callback){
    var1+="a";
    Callback(var1);
}

 callbackFunction("Zebr" , argFunction);