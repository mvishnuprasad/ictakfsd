
      function validate(){

    
   
      var lblError = document.getElementById("error");
      lblError.innerHTML = ""

let regexp = /^([\w\.-]+)@([\w\-]+).([a-z]{2,4})(.[a-z]{2,3})?$/;

var e = document.getElementById("email");
if (regexp.test(e.value)){
  lblError.innerHTML = "correct";
  return true;
}
else{
  lblError.innerHTML = "invalid";

return false;
}     

}