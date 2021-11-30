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
async function putFile(routeName){
    if (isGoodFormat(routeName)){
        try {
            return await writeFile('text.txt', {encoding : 'utf-8'})
        }catch (err){
            console.log(err)
        }
    }
}

function writeFile(path, option) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, option, (err, data) => {
            if (err){
                return reject(err)
            }
            resolve(data)
        })
    })
}

// fonction async
async function takeFile(routeName){
    if (isGoodFormat(routeName)){
        try {
            return await readeFile(routeName, {encoding : 'utf-8'})
        }catch (err){
            console.log(err)
        }
    }
}

function convertFile(csv){

    let arr = csv.split('\n');
    var jsonObj = [];
    var headers = arr[0].split(';');
    for(var i = 1; i < arr.length; i++) {
        var data = arr[i].split(';');
        var obj = [];
        for(var j = 0; j < data.length; j++) {
            obj[headers[j].trim()] = data[j].trim();
        }
        jsonObj.push(obj);
    }

    return jsonObj
}

async function main(){
    const data = await takeFile(processARGV[2])
    const c = convertFile(data)

}
main()