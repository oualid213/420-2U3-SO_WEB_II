title = document.getElementById("title");

var params = new URLSearchParams(document.location.search);

title.innerText = params.get("name").replaceAll("_"," ")