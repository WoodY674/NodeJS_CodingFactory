const crypto = require('crypto')

const arraySymbol = ["♠", "♥", "♦", "♣"]

function GenerateSymbol(nbr, row) {
    let arrayResult = []

    for (let i = 0; i < nbr; ++i) {
        let tempo = []
        for (let j = 0; j < row ; j++) {
            tempo[j] = arraySymbol[crypto.randomInt(0, 4)]
        }
        arrayResult[i] = tempo
    }
    return arrayResult
}

function verif(arrayResult) {
    arrayResult.forEach(function (element, key) {
        let bool = true
        for (let i = 0; i < element.length; ++i) {
            let stringos = ''
            if(i !== i-1 || i !== 0){
                if(element[i-1] === element[i] && element[i+1] === element[i] && bool){
                    stringos = 'index ' + key + ': ' + element[i-1] + ' ' + element[i] + ' ' + element[i+1]
                    bool = false
                }

            }
            if(stringos !== ''){
                console.log(stringos)
            }

        }
    })
}

const array = GenerateSymbol(100, 8)

verif(array)