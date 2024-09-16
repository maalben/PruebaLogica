function sortStrings() {
    const input = document.getElementById('input').value.trim();
    const resultElement = document.getElementById('result');
    const errorMessageElement = document.getElementById('error-message');

    // Limpiar mensajes de error
    errorMessageElement.innerText = '';

    // Validar entrada
    if (!input) {
        errorMessageElement.innerText = 'Por favor, ingresa una cadena de palabras.';
        return;
    }

    // Ordenar palabras
    const sortedWords = sortWords(input);
    resultElement.innerHTML = `<p>${sortedWords}</p>`;
}

function sortWords(str) {
    // Reemplaza separadores diversos y maneja camel case
    const cleanedStr = str
        .replace(/[^\w\s]/g, ' ') // Reemplaza cualquier carácter que no sea una palabra o espacio con un espacio
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Inserta un espacio entre palabras en camel case
        .replace(/\s+/g, ' ') // Reemplaza espacios múltiples por un solo espacio
        .trim(); // Elimina espacios en blanco al principio y al final

    // Validar después de limpieza
    if (!cleanedStr) {
        return 'Entrada vacía o inválida después de limpieza.';
    }

    // Ordenar palabras
    return cleanedStr
        .split(' ') // Divide la cadena en palabras usando espacios como delimitadores
        .map(word => word.trim()) // Elimina espacios en blanco adicionales alrededor de cada palabra
        .filter(word => word.length > 0) // Elimina palabras vacías
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())) // Ordena alfabéticamente sin distinguir mayúsculas de minúsculas
        .join(' '); // Une las palabras ordenadas en una cadena
}