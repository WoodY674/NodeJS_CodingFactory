const fs = require('fs');

let nomFichier = "cereales.csv"

function verifCsv(nomFichier){
    var verif = fs.readFileSync(nomFichier); 
    var verifArr = verif.toString('utf8').split('.');  

    if(verifArr[1] == "csv"){
        return false;
    }else{
        return true;
    }
}

function fichier(nomFichier){
    var data = fs.readFileSync(nomFichier); 
    var dataArr = data.toString('utf8').split('\n'); 
    var headerArr = dataArr[0].toString('utf8').split(';');
    var dataHeaderArr = [];
    var newDataArr = [];
    dataArr.splice(0,2);

    for(let i = 0; i<dataArr.length; i++){
        newDataArr += dataArr[i].toString('utf8').split(';');
    }
    for(let j = 0; j < newDataArr.length; j++){
        dataHeaderArr += [[headerArr[j]],[newDataArr[j]]];     
    }
    console.log(dataHeaderArr);
}

if (verifCsv(nomFichier)){
    fichier(nomFichier);
}else{
    console.log("erreur");
}