const input = document.getElementsByTagName('input');
var button = document.getElementsByTagName('button');

function events(){
   if(input === ''){
      button.addEventListener('click', validateInputs);
   }
}


function validateInputs() {
   for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('blur', function () {
         const errorText = document.getElementsByClassName('error-text');
         const errorIcon = document.getElementsByClassName('error-icon');

         if(!this.value) {
            this.classList.add('invalid');
            errorText[i].classList.add('visible');
            errorIcon[i].classList.add('visible');
         } else{
            this.classList.remove('invalid');
            errorText[i].classList.remove('visible');
            errorIcon[i].classList.remove('visible');
         }
      })
   }
}

validateInputs();

