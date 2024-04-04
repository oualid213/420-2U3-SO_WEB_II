/* 
<table>
    <thead>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr> 
    </tbody>
</table> 
*/

// var table = document.querySelector("#table");
var table = document.getElementById("table");

console.log(document.cookie)
// var table = document.getElementsByClassName("table")[0];
// var table = document.getElementsByTagName("table")[0];

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => {
    console.log(data.users)

    var tHead = table.createTHead();
    var hRow = tHead.insertRow();

    Object.keys(data.users[0]).forEach((key) => {
        hRow.insertCell().innerText = key;
    });
    
    var tBody = table.createTBody();

    data.users.forEach((user) => {
        var bRow = tBody.insertRow();

        Object.keys(data.users[0]).forEach((key) => {
            bRow.insertCell().innerText = user[key];
        });
    });

})