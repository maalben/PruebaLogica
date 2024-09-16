function checkPalindrome() {
    const input = document.getElementById('input').value.trim();
    const resultElement = document.getElementById('result');
    const errorMessageElement = document.getElementById('error-message');

    // Limpiar mensajes de error
    errorMessageElement.innerText = '';

    // Validar entrada
    if (!input) {
        errorMessageElement.innerText = 'Por favor, ingresa una cadena.';
        return;
    }

    // Llamar a la función de verificación de palíndromos
    const isPalindrome = isPalindromeString(input);
    resultElement.innerText = isPalindrome ? 'Verdadero' : 'Falso';
}

function isPalindromeString(str) {
    // Normalizar cadena: quitar espacios, pasar a minúsculas
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    // Verificar si la cadena es igual a su reverso
    return cleanedStr === cleanedStr.split('').reverse().join('');
}