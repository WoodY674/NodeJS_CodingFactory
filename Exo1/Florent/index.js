const crypto = require('crypto')

const arraySymbol = ["♠", "♥", "♦", "♣"]
let arrayResult = []

for (let i = 0; i < 100; ++i) {
    let tempo = []
    for (let j = 0; j < 8 ; j++) {
        tempo[j] = arraySymbol[crypto.randomInt(0, 4)]
    }
    arrayResult[i] = tempo
}
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