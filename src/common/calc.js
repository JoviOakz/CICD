function Soma(a, b) {
    return a + b;
}

function Sub(a, b) {
    return a - b;
}

function Mult(a, b) {
    return a * b;
}

function Div(a, b) {
    if (b == 0) {
        return 'Erro';
    }
    else {
        return a / b;
    }
}

function Cousin(a) {
    let count = 0;

    for (let i = 1; i <= a; i++) {
        if ((a % i) == 0) {
            count++;
        }
    }

    if (count == 2) {
        return 'Primo';
    }
    else {
        return 'Não é primo';
    }
}

function CPF_verifier(CPF) {
    if (CPF.length != 11) {
        return 'Erro';
    }

    let j = 11;
    let sum = 0;

    for (let i = 0; i <= (CPF.length - 3); i++, j--) {
        sum += CPF[i] * (j - 1);
    }

    x = 11 - (sum % 11);
    j = 11;
    sum = 0;

    if (x >= 10) {
        x = 0;
    }

    for (let w = 0; w <= (CPF.length - 2); w++, j--) {
        sum += CPF[w] * j;
    }

    y = 11 - (sum % 11);

    if (y >= 10) {
        y = 0;
    }

    if (CPF[9] == x && CPF[10] == y) {
        return 'Verificado';
    }
    else {
        return 'Erro';
    }
}

module.exports = { Soma, Sub, Mult, Div, Cousin, CPF_verifier }