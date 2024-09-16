function checkPrime() {
    const input = document.getElementById('input').value.trim();
    const resultElement = document.getElementById('result');
    const errorMessageElement = document.getElementById('error-message');

    // Limpiar mensajes de error
    errorMessageElement.innerText = '';

    // Convertir a número entero
    const number = parseInt(input, 10);

    // Validar entrada
    if (isNaN(number) || number <= 0) {
        errorMessageElement.innerText = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    // Verificar si el número es primo
    const isPrime = isPrimeNumber(number);
    resultElement.innerHTML = `<p>${isPrime ? 'Verdadero' : 'Falso'}</p>`;
}

function isPrimeNumber(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function limitInputLength(input) {
    if (input.value.length > 12) {
        input.value = input.value.slice(0, 11); // Limita a 12 caracteres
    }
}