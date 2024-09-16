function findPair() {
    const numbersInput = document.getElementById('numbers').value;
    const targetInput = document.getElementById('target').value;
    const cleanedInput = cleanInput(numbersInput);

    if (!cleanedInput) {
        displayError('Error: Ingreso inválido. Revisa los números.');
        return;
    }

    const numbers = cleanedInput.split(',').map(Number);
    const target = parseInt(targetInput);

    if (isNaN(target) || numbers.some(isNaN)) {
        displayError('Error: Asegúrate de ingresar números válidos.');
        return;
    }

    const result = findAllSumPairs(numbers, target);
    displayResult(result);
    document.getElementById('error-message').innerText = '';  // Limpiar mensaje de error
}

function cleanInput(input) {
    // Reemplazar caracteres inválidos por comas y quitar espacios al principio y final
    const cleaned = input
        .replace(/[ _\\/@!#%&+*-]/g, ',')  // Reemplaza caracteres específicos por comas
        .replace(/[a-zA-Z]+/g, ',')        // Reemplaza cualquier texto por comas
        .replace(/\s+/g, ',')              // Reemplaza cualquier cantidad de espacios por una coma
        .replace(/,,+/g, ',')              // Elimina comas consecutivas
        .trim();                           // Elimina espacios al principio y al final

    // Validar si el input empieza con caracteres no numéricos
    if (/^[^0-9]/.test(cleaned)) {
        return null;  // Devuelve null si empieza con algo inválido
    }

    return cleaned;
}

function findAllSumPairs(numbers, target) {
    const seen = new Map();
    const pairs = [];

    for (const num of numbers) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairs.push(`(${complement}, ${num})`);
        }
        seen.set(num, true);
    }

    return pairs.length > 0 ? pairs : null;
}

function displayResult(pairs) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    if (pairs) {
        pairs.forEach(pair => {
            const pairElement = document.createElement('p');
            pairElement.innerText = `Par encontrado: ${pair}`;
            resultContainer.appendChild(pairElement);
        });
    } else {
        const noPairElement = document.createElement('p');
        noPairElement.innerText = 'None.';
        resultContainer.appendChild(noPairElement);
    }
}

function displayError(message) {
    document.getElementById('error-message').innerText = message;
}