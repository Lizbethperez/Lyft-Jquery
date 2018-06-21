
$(function(){
    setTimeout(function() {
       $('#splash').fadeOut(1000);
    }, 2000);
 });

 function countNumber(){
  var phone=$("#phone").val();
  console.log(phone.length);
  if(phone.length==10){
    $('#btn-next').removeClass(disabled);
    console.log(phone);

  }
  $("#phone").val('');
 }

$(document).ready(function(){
    $('.modal').modal();
    $('select').formSelect();
    $('#phone').onkeydown(countNumber);
  });
      