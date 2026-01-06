const form = document.getElementById('form')
const result = document.getElementById('result')
const op = document.getElementById('operation')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const matrixA = getMatrixValues('arrayA1', 'arrayA2')
    const matrixB = getMatrixValues('arrayB1', 'arrayB2')
    const operator = op.value.trim()

    if (!areSameSize(matrixA, matrixB)) {
        showResult('Matrices must have the same dimensions')
        return
    }

    const matrixResult = operateMatrices(matrixA, matrixB, operator)

    if (!matrixResult) {
        showResult('Invalid operation')
        return
    }

    showMatrix(matrixResult)
}

/* ========= Helpers ========= */

function getMatrixValues(id1, id2) {
    return [
        parseRow(document.getElementById(id1).value),
        parseRow(document.getElementById(id2).value)
    ]
}

function parseRow(value) {
    return value
        .split(',')
        .map(Number)
        .filter(n => !Number.isNaN(n))
}

function areSameSize(a, b) {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) return false
    }
    return true
}

function operateMatrices(a, b, operator) {
    const result = []

    for (let i = 0; i < a.length; i++) {
        const row = []
        for (let j = 0; j < a[i].length; j++) {
            if (operator === '+') {
                row.push(a[i][j] + b[i][j])
            } else if (operator === '-') {
                row.push(a[i][j] - b[i][j])
            } else {
                return null
            }
        }
        result.push(row)
    }

    return result
}

function showMatrix(matrix) {
    result.textContent = matrix.map(row => row.join(' ')).join('\n')
}

function showResult(message) {
    result.textContent = message
}
