 
 
 function show() {
   
    var txt = document.getElementById("text").value;
    var i = document.getElementById("screen").innerHTML = txt;
    
    }

    function back() {
      document.getElementById("home").style.display = "flex";
      document.getElementById("chatapp").style.display = "none";
      
   }

 function sho() {
   document.getElementById("home").style.display = "none";
   document.getElementById("chatapp").style.display = "flex";

}
 
 function tune() {
  document.getElementById("home").style.display = "none";

  document.getElementById("call").style.display = "flex";
  
 }
 