// exercice 2

// x = 199
// y = "199"
// faire un if, valider 
// si x > 100 
// et x <=200 
// ou x de meme type de y
// et x = y

// si Vrai, imprimer "Allo"
// Si faux, imprimer "Bye"

var x = 199;
var y = "199";

if (x > 100 && x <= 200 || x === y) {
    console.log("Allo");
} else {
    console.log("Bye");
}