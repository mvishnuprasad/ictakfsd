function ajax(){


    // creating an XHR object with
    var xhttp = new XMLHttpRequest();
    // Event Listner
    
    xhttp.onreadystatechange = function(){
        //check conditions of
        if(this.readyState ==4&&this.status == 200){
            document.getElementById("demo").innerHTML= this.responseText;
    
        }
    }
    //initiate
    xhttp.open("GET", "people.json",true);
    xhttp.send();
    }