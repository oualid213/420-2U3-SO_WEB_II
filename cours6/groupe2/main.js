var button = document.getElementById("button");

button.addEventListener("click",myFunction)

function myFunction(){
    var number = document.getElementById("number").value;

    var radio = document.querySelector("input[name=operator]:Checked").id;

    switch (radio){
        case "binary" : 
            document.getElementById("number").value = decToBin(Number(number))
            break;
        case "decimal" : 
            // do some calculation
            break;
    }
}

function decToBin(number, string=""){
    if(number != 0){
        
        if(number%2){
            string = "1" + string;
        }else {
            string = "0" + string;
        }

        return decToBin(Math.floor(number/2),string)
    }

    return string;
}

// Version alt #1
button.addEventListener("click",function(){
    // Do stuff
})

// Version alt #2
button.addEventListener("click",() =>{
    // Do stuff
})