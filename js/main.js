firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.alert( "Welcome User1111111 : ");

      var user = firebase.auth().currentUser;

      if(user != null){
        window.alert( "Welcome User : ");
        var email_id = user.email;


      }

    } else {
      // No user is signed in.
      window.alert( "No User");

    }
  });

  function login(){


    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;


/*
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        window.alert( "inside error func : ");

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });
*/
  }

  function logout(){
    firebase.auth().signOut();
  }

/*
(function ($) {
    "use strict";


    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);*/
