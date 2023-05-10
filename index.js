$(document).ready(function() {
    $('#signup-form form').submit(function(event) {
      event.preventDefault();
  
      var email = $('#email').val();
      var phone = $('#phone').val();
  
      if (email == '') {
        alert('Por favor, informe um endereço de e-mail válido.');
        return false;
      }
      if (phone == '') {
        alert('Por favor, informe um número de telefone válido.');
        return false;
      }
  
      });
    });

 $(document).ready(function() {
    $('#h1').hover(function() {
    // Quando o mouse entra no elemento
        $(this).css('background-color', 'blue');
        $(this).css('color', 'white');
    }, function() {
    // Quando o mouse sai do elemento
        $(this).css('background-color', 'red');
        $(this).css('color', 'white');
    });
});
