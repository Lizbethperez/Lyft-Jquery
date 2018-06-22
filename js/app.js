
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

  function getCode(){
      var codeRandom = Math.floor((Math.random() * 1000) + 1);
      if(codeRandom>=100){
        var numberToString=codeRandom.toString();
      swal( numberToString, "This is your Code!", "success");
      return;
      }

   
  }
  function countCode(){
    var initialCode=$('#code').val();
    if(initialCode.length==2){
      $('#btn-next-modal2').removeClass('disabled'); // se le quita la clase al boton para que este se habilite
      console.log(phone);
    }else if(phone.length>2){
      $('#btn-next-modal2').attr('disabled','disabled');;
    }

  }
  
  function activeButtonName(){
    $('#btn-next-UserData').removeClass('disabled');
  }

$(document).ready(function(){
    $('.modal').modal();
    $('select').formSelect();
    $('#phone').keydown(countNumber);
    $('#btn-next').click(getCode);
    $('#code').keydown(countCode);
    $('#icon_name').keydown(activeButtonName);
  });
      