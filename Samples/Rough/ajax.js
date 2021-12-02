function ajax(){


    // creating an XHR object with step 1
    var xhttp = new XMLHttpRequest();
    // Event Listner step 4
    
    xhttp.onreadystatechange = function(){
        //check conditions. step 5 
        if(this.readyState ==4&&this.status == 200){
            // step 6
            // document.getElementById("demo").innerHTML= this.responseText;
           var res = JSON.parse(this.responseText); 
   var jpeople = res.people;
   var op = "";
   for (var i = 0; i < jpeople.length; i++){
    op += "<li>" + jpeople[i].name+ "</li>";
   }
   document.getElementById("demo").innerHTML= op;
        
        }
    }
    //initiate step 2 
    xhttp.open("GET", "people.json",true);
    //step 3
    xhttp.send();
    }
    function api(){


        // creating an XHR object with
        var xhttp = new XMLHttpRequest();
        // Event Listner
        
        xhttp.onreadystatechange = function(){
            //check conditions of
            if(this.readyState ==4&&this.status == 200){
                // document.getElementById("demo").innerHTML= this.responseText;
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