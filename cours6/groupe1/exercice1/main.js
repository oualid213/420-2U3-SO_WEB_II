// Convertir le nombre decimal recu par la balise Input, 
// et afficher dans la console le nombre trasnformé en binaire

var button = document.getElementById("button");

button.addEventListener("click", OnCLick);

function OnCLick(){
    var decimal = document.getElementById("decimal").value;

    var operator = document.querySelector("input[name=operator]:Checked").value;

    switch (operator) {
        case "binary" : 
            console.log(decToBin(Number(decimal)))
            break;
        case "decimal" : 
            console.log(decToBin(Number(decimal)))
            break;
        default :
            console(undefined)
        
    }
    
}

function decToBin(n, s="") {

    if(n){
        if(n%2){
            s = "1" + s;
        }else{
            s = "0" + s;
        }
        return decToBin(Math.floor(n/2),s);
    }

    return s;
}

// Façon alternative #1
// button.addEventListener("click", function(){
//     var decimal = document.getElementById("decimal").value;
// });

// Façon alternative #2
// button.addEventListener("click",() => {
//     var decimal = document.getElementById("decimal").value;
// });