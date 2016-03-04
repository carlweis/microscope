Template.login.events({
  'submit #login-form' : function(e, t) {
    e.preventDefault();

    // retrieve the input values
    var email = t.find('#login-email').value,
        password = t.find('#login-password').value;

    // trim and validate fields here...
    var email = trimInput(email);
    
    // if validation passes
    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        alert('Invalid username or password.');
      } else {
        // the user has been logged in.
        Router.go('postsList');
      }
    });
    return false;
  }
});