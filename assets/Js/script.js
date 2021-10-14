$(document).ready(function(){

  $("select").change(function(){
    if ($(this).val()=="") $(this).css({color: "#aaa"});
    else $(this).css({color: "#000"});
  });
  
});	