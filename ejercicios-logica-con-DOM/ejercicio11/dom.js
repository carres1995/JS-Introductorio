const form = document.getElementById('form')
const arrayA1 = document.getElementById('arrayA1')
const arrayA2 = document.getElementById('arrayA2')
const arrayB1 = document.getElementById('arrayB1')
const arrayB2 = document.getElementById('arrayB2')
const result = document.getElementById('result')
const op = document.getElementById('operation')



form.addEventListener('submit', combineMatrices)

function combineMatrices(e){
    e.preventDefault()

    const arrayA1c = arrayA1.value.trim().split(',').map(Number).filter(n => !isNaN(n))
    const arrayA2c = arrayA2.value.trim().split(',').map(Number).filter(n => !isNaN(n))
    const arrayB1c = arrayB1.value.trim().split(',').map(Number).filter(n => !isNaN(n))
    const arrayB2c = arrayB2.value.trim().split(',').map(Number).filter(n => !isNaN(n))
    let arrayA = []
    let arrayB = []
    arrayA.push(arrayA1c,arrayA2c)
    arrayB.push(arrayB1c,arrayB2c)
    let arrayP = []
    let operation;
    let text;
    if (arrayA.length !== arrayB.length || arrayA[0].length !== arrayB[0].length){
            result.textContent = 'The length must be equal'
            return
        }
    for (let i = 0; i < arrayA.length;i ++){
        let arrayO = []
        
        for (let j = 0; j < arrayA[i].length;j ++){
            if (op.value.trim() === '+'){
                operation = arrayA[i][j] + arrayB[i][j]
                text = `the result of plus is `
            }else if (op.value.trim() === '-'){
                operation = arrayA[i][j] - arrayB[i][j]
                text = `the result of rest is `
            }else{
                result.textContent = 'Operation invalid'
                return
            }
            arrayO.push(operation)
        }
        arrayP.push(arrayO)
    }
    
    result.textContent = `${text} ${arrayP}`
}