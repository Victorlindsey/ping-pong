var melan = function(Number)
{ for(Number=1;Number<30;Number ++){
  if(Number%3===0 && Number%5===0){ alert("pingpong");
}else if(Number%3===0){ alert("ping");
}else if(Number%5===0){
                  alert("pong")
                           }else{ alert(Numbers)};};};
$(document).ready(function)  {
  $("form#number") .submit(function(event){
    event.preventDefault();
    var Number=parseInt($("input#put").val());
    var Result=melan(Number)
    $("ul#peter").append("<li>Result</li>");
  });
  });
