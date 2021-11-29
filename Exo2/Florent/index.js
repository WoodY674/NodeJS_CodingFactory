const processARGV = process.argv
const fs = require('fs')

function isGoodFormat(nameFile) {
    const splitedNameFile = nameFile.split('.')
    if(splitedNameFile[1] !== "csv"){
        return false
    }
    return true
}


function readeFile(path, option) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, option, (err, data) => {
            if (err){
                return reject(err)
            }
            resolve(data)
        })
    })
}

// fonction async
async function takeFile(){
    try {
        const data = await readeFile(processARGV[2], {encoding : 'utf-8'})
        console.log(data)
    }catch (err){
        console.log(err)
    }finally {
        console.log('finale')
    }
}

console.log()
takeFile()
