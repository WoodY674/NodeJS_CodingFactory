var crypto = require('crypto');

const symboles = ["☺", "", "♥", "♦", "♣", "♠", "♂", "♀", "♪"];
let count = 0;

for (let i = 0; i < 101; i++) {
    var random1 = crypto.randomInt(0,9);
    var random2 = crypto.randomInt(0,9);
    var random3 = crypto.randomInt(0,9);
    if (random1 == random2 && random2 == random3){
        count ++;
    }
    console.log(symboles[random1], '|', symboles[random2], '|', symboles[random3]);
    console.log(" ");
    console.log("Nombre de symboles identiques au total: ", count);
    console.log(" ");
  }
