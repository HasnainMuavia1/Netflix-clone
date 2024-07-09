$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })



document.addEventListener('DOMContentLoaded', function() {
  const inputFieldEmail = document.getElementById('floatingInputGrid');
  const errorSpanEmail = document.getElementById('error1');
  const inputFieldPassword = document.getElementById('floatingPassword');
  const errorSpanPassword = document.getElementById('error2');

  inputFieldEmail.addEventListener('blur', function() {
      // Check if the email input field is empty or not a valid email
      if (inputFieldEmail.value === '' || !isValidEmail(inputFieldEmail.value)) {
          errorSpanEmail.innerHTML = '<i class="far fa-times-circle"></i> Please enter a valid email or mobile number';
          errorSpanEmail.style.color = 'red';
          errorSpanEmail.style.fontSize='14px'
          inputFieldEmail.style.borderColor = 'red'; // Set border color to red for error
      } else {
          errorSpanEmail.textContent = '';
          inputFieldEmail.style.borderColor = ''; // Reset border color
      }
  });

  inputFieldPassword.addEventListener('blur', function() {
      // Check if the password input field meets the length criteria
      if (inputFieldPassword.value.length < 4 || inputFieldPassword.value.length > 60) {
          errorSpanPassword.innerHTML = '<i class="far fa-times-circle"></i> Please enter a valid password between 4 to 60 characters';
          errorSpanPassword.style.color = 'red';
          errorSpanPassword.style.fontSize='14px'
          
          
          inputFieldPassword.style.borderColor = 'red'; // Set border color to red for error
      } else {
          errorSpanPassword.textContent = '';
          inputFieldPassword.style.borderColor = ''; // Reset border color
      }
  });

  // Clear error messages and reset border on focus
  inputFieldEmail.addEventListener('focus', function() {
      errorSpanEmail.textContent = '';
      inputFieldEmail.style.borderColor = ''; // Reset border color
  });

  inputFieldPassword.addEventListener('focus', function() {
      errorSpanPassword.textContent = '';
      inputFieldPassword.style.borderColor = ''; // Reset border color
  });

  // Function to validate email format
  function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
