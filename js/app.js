
//funcion para ejecutar el Splash

$(function(){
    setTimeout(function() {
       $('#splash').fadeOut(1000);
    }, 2000);
 });
 
 //Se utiliza esta funcion para que solo se permitan digitos del 0 al 9 en el input
$('.input-number').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

$('.input-code').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

 //funcion para permiter solo 10 digitos al ingresar el telefono
 function countNumber(){
    var phone=$("#phone").val();
    console.log(phone.length);
    if(phone.length==9){
      $('#btn-next').removeClass('disabled'); // se le quita la clase al boton para que este se habilite
      console.log(phone);
    }else if(phone.length>9){
      $('#phone').attr('disabled','disabled');;
    }
 }
var codeRandom=0;
var getCode =function (){
      codeRandom = Math.floor((Math.random() * 1000) + 1);
      if(codeRandom>=100){
        var numberToString=codeRandom.toString();
      swal( numberToString, "This is your Code!", "success");
      //countCode(codeRandom);
      return codeRandom;
      }
  }
  function countCode(e,codeRandom1){
    var initialCode=$('#code').val();
    console.log(initialCode,codeRandom1);
  if(initialCode.length==3){
      if(initialCode==codeRandom1){
        swal( "good job", "This is your Code!", "success")
        .then(function(){
          $('#btn-next-modal2').removeClass('disabled'); // se le quita la clase al boton para que este se habilite
          location.href="index3.html"
        });
        
      }
    }
    /*if(initialCode.length==2){
      $('#btn-next-modal2').removeClass('disabled'); // se le quita la clase al boton para que este se habilite
      console.log(initialCode);
      if(initialCode===codeRandom1){
        location.href="index3.html"
      }else {
        swal( "good job", "This is your Code!", "success");
      }*/
    /*}else if(phone.length2){
      $('#btn-next-modal2').attr('disabled','disabled');;
    }*/

  }
  
  function activeButtonName(){
    $('#btn-next-UserData').removeClass('disabled');
  }

$(document).ready(function(){
    $('.modal').modal();
    $('select').formSelect();
    $('#phone').keydown(countNumber);
    $('#btn-next').click(getCode);
    $('#code').keyup(function(e){countCode(e,codeRandom) });
    $('#icon_name').keydown(activeButtonName);
  });
      