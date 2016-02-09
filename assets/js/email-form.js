$(document).ready(function(){

  $('#send-button').on('click', function(){

    var emailVal = $('#email-input').val();
    var emailMsgVal = $('#email-message').val();

    $.post('/api/email', { email:emailVal, message: emailMsgVal }, function(res){

        alert('Email has been sent');

    });

  });

});
