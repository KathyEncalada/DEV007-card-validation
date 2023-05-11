import validator from './validator.js';

const numberInput = document.getElementById('credit-card-number');
const messageContainer = document.getElementById('message-Error')

messageContainer.style.display="none";


numberInput.onchange = function() {

  const creditCardNumber = numberInput.value;
  if (creditCardNumber !== '' || creditCardNumber !== null) {
    const isValid = validator.isValid(creditCardNumber);
    const maskedNumber = validator.maskify(creditCardNumber);
    if (isValid) {
      const msg = 'El número de tarjeta de crédito es válido: ' + maskedNumber;
      messageContainer.textContent = msg;
      messageContainer.style.color = 'green';
    } else {
      const msg = 'El número de tarjeta de crédito no es válido: ' + maskedNumber;
      messageContainer.textContent = msg;
      messageContainer.style.color = 'red';
    } 
  
    messageContainer.style.display = 'block';
  }
  
};

function showErrorMessage() {
  const creditCardNumber = numberInput.value;
  const inputNumber = document.querySelector('.input-number');
  const errorContainer = document.createElement('div');
  if (!creditCardNumber) {
    errorContainer.textContent = 'Debe ingresar un número de tarjeta de crédito.';
    errorContainer.style.color = 'red';
    inputNumber.after(errorContainer);
  }
}

const submitButton = document.getElementById('confirm-btn');
submitButton.onclick = function() {
  showErrorMessage();
};