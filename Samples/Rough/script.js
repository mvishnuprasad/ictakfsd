
console.error("Demo error");

var x=document.getElementById("head1");
x.innerText="javascript heading";
var y = document.getElementsByClassName("text1");
y[0].style.color="red";
var z = document.getElementsByTagName("blockquote");
z[0].style.color="green";
var q= document.querySelector("h1")
q.style.color="green";
    function show(){
      var i = document.getElementById("image");
      i.setAttribute("hidden","true");
      
    }

    function reset(){
        var i = document.getElementById("image");
        i.removeAttribute("hidden","true");
        
      }

      function change(){
        var i = document.getElementById("image");
        i.removeAttribute("src","img.jpeg");
        i.setAttribute("src","img1.jpeg");
      }

      function resetimg(){
        var i = document.getElementById("image");
      
        i.removeAttribute("src","img1.jpeg");
        i.setAttribute("src","img.jpeg");
      }