  Template.register.events({
    'submit #register-form' : function(e, t) {
      e.preventDefault();
      
      var email = t.find('#account-email').value, 
          password = t.find('#account-password').value,
          confirmPassword = t.find('#account-confirm-password').value;

      // Trim and validate the input
      var email = trimInput(email);
      if (isValidPassword(password) && 
        passwordMatchesConfirmation(password, confirmPassword)) {
        Accounts.createUser({email: email, password : password}, 
          function(err){
            if (err) {
              // Inform the user that account creation failed
              alert('Failed to create new account');
              console.log(err);
            } else {
              // Success. Account has been created and the user
              // has logged in successfully. 
              alert('success you have been signed in!');
            }
        });
      }
      return false;
    }
  });