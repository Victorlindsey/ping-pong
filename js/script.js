var melan = function(valuate)
{ for(Number=1;Number<valuate;Number ++){
  if(Number%3===0 && Number%5===0){$("#lili").append("<li>pingpong</li>") ;
}else if(Number%3===0){ $("#lili").append("<li>pong</li>");
}else if(Number%5===0){
                  $("#victor").append("<li>pong</li>")
                }else{ $("#lili").append("<li>"+ number+"</li>")};};};
$(document).ready(function(){
  $("form#ping-pong") .submit(function(event){
    event.preventDefault();
    var valuate=parseInt($("input#put1").val());
    melan(valuate);
  });
  });
