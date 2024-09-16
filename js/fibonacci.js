function generateFibonacci() {
    const n = parseInt(document.getElementById('input').value);
    if (isNaN(n) || n <= 0) {
        document.getElementById('result').innerText = 'Por favor, ingrese un número válido mayor que 0.';
        return;
    }



    const sequence = fibonacci(n);
    const resultDiv = document.getElementById('result');
    const resultDivPre = document.getElementById('resultPre');
    const resultDivPre2 = document.getElementById('resultPre2');
    resultDiv.innerHTML = '';  // Limpiar contenido previo
    resultDivPre.innerHTML = '';
    resultDivPre2.innerHTML = '';

    if ( n > 1477) {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.innerText = "Valores muy grandes no son recomendados.";
        resultDivPre.appendChild(p1);
        p2.innerText = "Le sugerimos hasta 1477.";
        resultDivPre2.appendChild(p2);

    }

    // Imprimir cada número en una nueva línea
    sequence.forEach(num => {
        const p = document.createElement('p');
        p.innerText = num;
        resultDiv.appendChild(p);
    });
}

function fibonacci(n) {
    let a = 0, b = 1, result = [];
    for (let i = 0; i < n; i++) {
        result.push(a);
        [a, b] = [b, a + b];
    }
    return result;
}

function limitInputLength(input) {
    if (input.value.length > 5) {
        input.value = input.value.slice(0, 5); // Limita a 6 caracteres
    }
}