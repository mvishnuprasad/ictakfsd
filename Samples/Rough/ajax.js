function ajax(){


    // creating an XHR object with
    var xhttp = new XMLHttpRequest();
    // Event Listner
    
    xhttp.onreadystatechange = function(){
        //check conditions of
        if(this.readyState ==4&&this.status == 200){
            // document.getElementById("demo").innerHTML= this.responseText;
           var res = JSON.parse(this.responseText); 
   var jpeople = res.people;
   var op = "";
   for (var i = 0; i < jpeople.length; i++){
    op += jpeople[i].name+ "<br>";
   }
   document.getElementById("demo").innerHTML= op;
        
        }
    }
    //initiate
    xhttp.open("GET", "people.json",true);
    xhttp.send();
    }