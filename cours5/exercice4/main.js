/*

Ex. 1 

Faire une fonction qui prend en paramètre un nombre decimal, 
et retourne le nombre en binaire. (optionnel : avec récurcivité)

var n= 1990;

fonction decToBin(n){
    retourne nombre en binaire
}

console.log(decToBin(n))
*/

var x = 1999;

function decToBin(n, binaire = "") {

    if(n != 0){
        if(n % 2){
            binaire = "1" + binaire;
        } else {
            binaire = "0" + binaire
        }

        return decToBin(Math.floor(n/2),binaire)
    }

    return binaire;
}

console.log(decToBin(x))