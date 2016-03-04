  // trim helper
  trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
  }
  
  isValidPassword = function(val) {
     if(val.length >= 6) {
        return true;
     } else {
        Session.set('notice', 'Your password is too short.');
        return false;
     }
  }

  passwordMatchesConfirmation = function(password, confirmation) {
    if (password === confirmation) {
      return true;
    } else {
      Sesstion.set('notice', 'Passwords don\'t match');
      return false;
    }
  }