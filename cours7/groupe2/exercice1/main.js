var button = document.getElementById("submit-button");

button.addEventListener("click",()=>{

    console.log(document.getElementById("exampleInputEmail1").value)
    console.log(document.getElementById("exampleInputPassword1").value)

});

var hidePasswordButton = document.getElementById("hide-password");

hidePasswordButton.addEventListener("click",(e)=>{e.preventDefault()});

hidePasswordButton.addEventListener("mousedown",()=>{hidePassword(false)});

hidePasswordButton.addEventListener("mouseup",()=>{hidePassword()});

function hidePassword(bool = true){
    if (bool) {
        document.getElementById("exampleInputPassword1").setAttribute("type","password");
    }else {
        document.getElementById("exampleInputPassword1").setAttribute("type","text");

    }
}