let navLinks = document.getElementById("navLinks");
         function showMenu() {
             navLinks.style.right = "0";
         }
         function hideMenu() {
             navLinks.style.right = "-200px";
         }

let btn = document.getElementById('btn');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let email = document.getElementById('email');
let success = document.querySelector('.success-message');
let container = document.querySelector('.form-container');

function hideModal() {
   container.style.display = 'none';
}

function showModal() {
    container.style.display = 'block';
}
    

form.addEventListener("submit", function(e) {
   e.preventDefault();

   if (firstName.value && lastname.value && email.value !== '') {
    success.style.display = 'block';
   } else null
 
});




    


