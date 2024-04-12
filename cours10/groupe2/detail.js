function createImageTag(url, alt){
    imageContainer = document.createElement("img");
    imageContainer.src = url;
    imageContainer.alt = alt;

    return imageContainer;
}

let params = new URLSearchParams(document.location.search);
let id = params.get("id"); 

fetch('https://dummyjson.com/recipe/' + id)
.then(res => res.json())
.then(recipe => {
    console.log(recipe)

    let mainContent = document.getElementById("main-content");
    let title = document.getElementById("title");
    title.innerText = recipe.name;

    mainContent.appendChild(createImageTag(recipe.image,recipe.name));
})