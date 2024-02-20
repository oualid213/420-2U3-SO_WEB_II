// exercice 3

// une fonction qui recoit en param 
// grade minimal, grade maximal 
// et score de l'etudiant

// retourne la cote en strings
// A > grade maximal
// B > grade maximal - 10%
// C > grade maximal - 20 %
// D >= grade minimal - 30%
// E < grade minimal - 30%

// appeler la fonction et l'afficher à l'ecran

function getGrade(max, score) {
    var grade = "E"

    if(score > max) {
        grade = "A";
    }else if(score > max - max * 0.10){
        grade = "B";
    } else if(score > max - max * 0.20){
        grade = "C";
    } else if(score >= max - max * 0.30){
        grade = "D";
    }

    return grade;
}

console.log(getGrade(50, 125, 124))
