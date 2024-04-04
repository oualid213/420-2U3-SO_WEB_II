var cardContainer = document.getElementById("card-container");

function getRecipesFromAPI (url) {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        json.recipes.forEach((recipe)=>{
            
            // Crée une "card" pour chaque recette et
            // ajoute des data-attributes pour stocker les informations de la recette (id, cuisine, difficulty, etc.)
            var card = document.createElement("div");
            card.classList.add("col");
            card.innerHTML = `
            <div class="card h-100"
                data-id="` + recipe.id + `"
                data-cuisine="` + recipe.cuisine + `"
                data-difficulty="` + recipe.difficulty + `"
            >
                <img src="` + recipe.image + `" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">` + recipe.name + `</h5>
                    <p class="card-text">` + recipe.cuisine + `</p>
                    <button class="btn btn-primary button-recipes">View Recipe</button>
                </div>
            </div>
            `;
    
            cardContainer.appendChild(card);
        })
    })
    .finally(() => {
        var buttonRecipes = document.getElementsByClassName("button-recipes");

        // Pour chaque bouton "View Recipe", ajoute un écouteur d'événements pour rediriger l'utilisateur vers la page de détail de la recette

        // ici, le forEach n'est pas utilisé car buttonRecipes est une collection HTML, et ne contient pas de méthode forEach, 
        // nous allons donc utiliser une boucle for traditionnel
        for (let i = 0; i < buttonRecipes.length; i++) {
            buttonRecipes[i].addEventListener("click", function(){
                var card = buttonRecipes[i].closest(".card");
                var id = card.getAttribute("data-id");
                var cuisine = card.getAttribute("data-cuisine");
                var difficulty = card.getAttribute("data-difficulty");
    
                window.location.href = "detail.html?id=" + id + "&cuisine=" + cuisine + "&difficulty=" + difficulty;
            })
        }
    })
}


getRecipesFromAPI('https://dummyjson.com/recipes?limit=5');
