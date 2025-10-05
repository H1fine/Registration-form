

const form = document.getElementById('contactForm');
const outputDiv = document.getElementById('output');

 form.addEventListener("submit", function (event) {
  
  event.preventDefault();
  
const firstNameInput = document.getElementById("firstNameInput");

const lastNameInput = document.getElementById("lastNameInput");

// const emailInput = document.getElementById("emailInput");

// const dateOfBirthInput = document.getElementById("dateOfBirthInput");

outputDiv.innerHTML =  `
<p>Hi my name first name is: ${firstNameInput.value}</p> 
<p> and my last name is ${firstNameInput.value}</p>
`
outputDiv.style.disply = 'block';

firstNameInput.value = "";
lastNameInput.value = "";

 });


 
 


 



  


