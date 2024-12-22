 
 const passwordInput = document.getElementById('inputPassword');
 const passwordStrength = document.getElementById('passwordStrength');

 passwordInput.addEventListener('input', function() {
   const password = passwordInput.value;
   const strength = checkPasswordStrength(password);
   passwordStrength.textContent = strength;
 });

 function checkPasswordStrength(password) {
   let strength = 'Weak';
   if (password.length >= 8) {
     if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
       strength = 'Strong';
     } else if (/[a-z]/.test(password)) {
       strength = 'Medium';
     }
   }
   return strength;
 }


 const form = document.getElementById('signInForm');
 form.addEventListener('submit', function(event) {
   if (!form.checkValidity()) {
     event.preventDefault();
     event.stopPropagation();
   }
   form.classList.add('was-validated');
 });