
var personnes = [
    {
        prenom : "tommy",
        nom : "Gag",
        da : "1188792",
        genre : "Homme"
    },
    {
        prenom : "tommy",
        nom : "Gag",
        da : "1188792",
        genre : "Homme"
    },
    {
        prenom : "tommy",
        nom : "Gag",
        da : "1188792",
        genre : "Homme"
    },
]

document.getElementById("table-body").innerText = "tommy est Cool"
document.getElementById("table-body").innerHTML = `
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
`

var table = ""
personnes.forEach((personne) => {
    table += "<tr>"; 
    table += "<th scope'row'>" + personne.prenom + "</th>"; 
    table += "<td>" + personne.nom + "</td>"; 
    table += "<td>" + personne.da + "</td>";  
    table += "<td>" + personne.genre + "</td>";  
    table += "</tr>"; 

})

document.getElementById("table-body").innerHTML = table;

