/* 
<table>
<tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
</tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
    </tr> 
</table> 
*/

var table = document.querySelector("#basicTable > tbody");

var persons = [
    {
        firstname : "Tommy",
        lastname : "Gagnon",
        email : "tommyG@gmail.com"
    },
    {
        firstname : "Bob",
        lastname : "joyal",
        email : "bobJ@gmail.com"
    },
    {
        firstname : "Lol",
        lastname : "dummy",
        email : "lold@gmail.com"
    }
]

// Facon #1
var tableString = ""
persons.forEach((person)=>{
    tableString += `
    <tr>
        <td>` + person.firstname + `</td>
        <td>` + person.lastname + `</td>
        <td>` + person.email + `</td>
    </tr>  
    `
});

table.innerHTML = tableString;


// Facon #2
var table2 = document.getElementById("basicTable2");

persons.forEach((person)=>{
    var row = table2.insertRow();

    row.insertCell(0).innerText = person.firstname;
    row.insertCell(1).innerText = person.lastname;
    row.insertCell(2).innerText = person.email;
});

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