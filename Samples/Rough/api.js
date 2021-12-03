function api(){


    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState ==4&&this.status == 200){
           var res = JSON.parse(this.responseText); 
  
   var op = "";
   for (var i = 0; i < res.length; i++){
    op += res[i].title+ "<br>";
   }
   document.getElementById("demo").innerHTML= op;
        
        }
    }
    //initiate
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts",true);
    xhttp.send();
    }