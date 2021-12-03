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
// Callback functions
// setInterval(argFuncction , 1000);
// function argFunction(val){
//     document.write(val);
// }

// function callbackFunction (var1 , Callback){
//     var1+="a";
//     Callback(var1);
    
// }

//  callbackFunction( "<br>"+"Zebr" , argFunction);
 
// //Arrow function : Does not include keyword called func

//  let arrowFunc = (num1, num)=>{
//      return num1+num;

//  }
//  //or

//  let arrowFunc1 = (num1, num)=>(num1+num);

//  document.write( "<br>"+arrowFunc(2,3));
//  document.write( "<br>"+arrowFunc1(4,5));
function add(a,b, callback){
    document.write(` ${"<br>"} The sum of ${a} and ${b} is ${a+b} ${"<br>"}`)
callback()
}

function disp(){
    document.write("Addition is successful");
}

add(1222,552 , disp);
// disp();