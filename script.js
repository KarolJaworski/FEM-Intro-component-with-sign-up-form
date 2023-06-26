const formError = document.querySelector('.form-error');
const form = document.getElementById('form');

function validateName() {
  const name = document.getElementById('name').value;

  if (name.length == 0){
    return false;
  }

  if (!name.match(/^[A-Za-z]+$/)){
    return false;
  }

  return true;
}

function validateLastname() {
  const lastname = document.getElementById('lastname').value;

  if (lastname.length == 0){
    return false;
  }

  if (!lastname.match(/^[A-Za-z]+$/)){
    return false;
  }

  return true;
}

function validateEmail() {
  const email = document.getElementById('email').value;

  if (email.length == 0){
    return false;
  }

  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
    return false;
  }

  return true;
}

function validatePassword() {
  const passwd = document.getElementById('password');

  if (passwd.length == 0){
    return false;
  }

  return true;
}

function validateForm(){
  const nameValid = validateName();
  const lastnameValid = validateLastname();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  if (!nameValid || !lastnameValid || !emailValid || !passwordValid){
    formError.style.display = 'block';
    formError.innerHTML = 'Correct your inputs before submitting!';
    setTimeout(() => {
      formError.style.display = 'none';
    }, 4000);
    return false;
  }

  return true;
}

form.addEventListener('submit', (e) => {
  if (!validateForm()) {
    e.preventDefault();
  }
});
