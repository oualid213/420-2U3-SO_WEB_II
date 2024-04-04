// Facon #3
var table3 = document.getElementById("basicTable3");


fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(json => {
    json.users.forEach((user)=>{
        var row = table3.insertRow();

        row.insertCell(0).innerHTML = user.firstName;
        row.insertCell(1).innerHTML = user.lastName;
        row.insertCell(2).innerHTML = user.email;
    })

})