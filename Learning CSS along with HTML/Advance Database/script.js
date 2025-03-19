const signUpButton=document.getElementById('register-btn');
const signInButton=document.getElementById('signIn-btn');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('register');

signUpButton.addEventListener('click', function(){
  signInForm.style.display="none";
  signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
  signInForm.style.display="block";
  signUpForm.style.display="none";
})