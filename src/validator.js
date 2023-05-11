const validator = {
  isValid: function (creditCardNumber) {
    if (!creditCardNumber) return false;

    // Elimina todos los caracteres no numéricos
    const sanitizedNumber = creditCardNumber.replace(/\D/g, '');

    // Invierte el número para facilitar la validación del dígito de verificación
    const reversedNumber = sanitizedNumber.split('').reverse().join('');

    let sum = 0;

    // Suma los dígitos de acuerdo al algoritmo de Luhn
    for (let i = 0; i < reversedNumber.length; i++) {
      let digit = parseInt(reversedNumber.charAt(i), 10);

      if (i % 2 !== 0) {
        digit *= 2;

        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
    }

    return sum % 10 === 0;
  },

  maskify: function (creditCardNumber) {
    if (!creditCardNumber) return '';
    if (creditCardNumber.length <= 1) {
      return creditCardNumber;
    }

    const visibleDigits = 4;
    const maskedLength = creditCardNumber.length - visibleDigits;
    return '#'.repeat(maskedLength) + creditCardNumber.substring(maskedLength);
  }
};

export default validator;