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
document.write("<br>"+str.substring(1,2))