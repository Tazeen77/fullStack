

var input=document.getElementById("password");


input.addEventListener('blur',function(){document.getElementById("message").style.display="none";});

input.addEventListener('focus',function() { document.getElementById("message").style.display = "block";});


input.addEventListener('keyup',function(){
  
  
  
  var lowerCaseregex = /[a-z]/g;
  if(input.value.match(lowerCaseregex))
    {
      letter.classList.add("valid");
      letter.classList.remove("invalid");
    }

 
  var upperCaseregex=/[A-Z]/g;
  if(input.value.match(upperCaseregex))
   {
      capital.classList.add("valid");
      capital.classList.remove("invalid");
    }
 
   var numberregex=/[0-9]/g;
   if(input.value.match(numberregex))
   {
      number.classList.add("valid");
      number.classList.remove("invalid");
    }
 
   if(input.value.length>=8)
   {
	length.classList.add("valid");
	length.classList.remove("invalid");
   }

 
});
