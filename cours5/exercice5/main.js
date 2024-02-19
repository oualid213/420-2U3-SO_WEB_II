/*

Ex. 2

creer un tableau de x element de 
tableau associatif personne {avec nom, prenom, age et genre}

console.log (le nom des gens en ordre alphabetique)

ex.
var personne = {
    nom: 'tommy'
    prenom : 'totot'
    age: 22
    genre: "Homme"
}

var array = [personne1, personne2, personne3, personne4]

array[3] -> {
    nom: 'tommy'
    prenom : 'totot'
    age: 22
    genre: "Homme"
} 
fonction trieEnOrdreParNom(){}

console.log(trieEnOrdreParNom())
*/
var array = [
    {
        nom: 'lol',
        prenom: 'loly',
        age: 100,
        genre: 'M'
    },{
        nom: 'bob',
        prenom: 'koly',
        age: 98,
        genre: 'F'
    },{
        nom: 'abc',
        prénom: 'def',
        age: 28,
        genre: 'A'
    }
]
// array[0][nom] // -> 'lol'
// array[1][age] // -> 98

function sorting(a,b){
    var nomA = a[name];
    var nomB = b[name];
    if(nomA < nomB)
        return -1;

    if(nomA > nomB)
        return 1

    return 0
}

console.log(array.sort(sorting));
