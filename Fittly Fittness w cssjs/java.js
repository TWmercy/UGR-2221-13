const form = document.getElementById('form');
const Age = document.getElementById('Age');
const Phone = document.getElementById('Phone');
const Email = document.getElementById('Email');

form.addEventListener('submit', e => {
    if (!checkInputs()) {
          e.preventDefault();
      }
  });

  function checkInputs() {
    // trim to remove the whitespaces
    const FullnameValue = fullname.value.trim();
    const AgeValue = Age.value.trim();
    const PhoneValue = Phone.value.trim();
    const EmailValue = Email.value.trim();
   
      var check = true;
  
  }  
  if(FullnameValue === '') {
    setErrorFor(Fullname, 'Please enter Full name');
        check  = false;
        
  } else {
    setSuccessFor(Fullname);
  }


  if(AgeValue === '') {
    setErrorFor(Age, 'Please enter Age');
        check  = false;
        
  } else {
    setSuccessFor(Age);
  }


  if(Phone === '') {
    setErrorFor(Phone, 'Please enter Phone number');
        check  = false;
        
  } else {
    setSuccessFor(Phone);

  }
  if(EmailValue === '') {
    setErrorFor(Email, 'Please enter Email');
        check = false;
  } else if (!isEmail(EmailValue)) {
    setErrorFor(Email, 'Not a valid Email');
        check = false;
  } else {
    setSuccessFor(Email);
  }



  function setErrorFor(input, message) {
    const inputBox = input.parentElement;
    const small = inputBox.querySelector('small');
    inputBox.className = 'input-box error';
    small.innerText = message;
  }


  function setSuccessFor(input) {
    const inputBox = input.parentElement;
    inputBox.className = 'input-box success';
  }


  function isEmail(Email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);
  }
  
  function alertFunction() {
      if(checkInputs()) {
          alert('Your message has been submitted. Thank you for reaching out.')
      }
  }