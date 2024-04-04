// fonction pour modifier l'url et le texte altérnatif de la l'image
function setImageTag(container, url, alt) {
  container.src = url;
  container.alt = alt;
}

// fonction pour récupérer les paramètres de l'url et afficher les informations de la recette
function getParams() {
  let params = new URLSearchParams(document.location.search);
  let id = parseInt(params.get("id"));

  // Comme on peut le voir, il serai possible de passer tous les données d'une recette dans l'url, 
  // mais ce n'est pas une bonne pratique, car les urls sont limitées en taille, et cela peut poser des problèmes de sécurité.
  let cuisine = params.get("cuisine");
  let difficulty = params.get("difficulty");

  // Pour récupérer les données de la recette, on peut faire une requête à l'API avec l'id de la recette
  fetch('https://dummyjson.com/recipes/' + id)
  .then(res => res.json())
  .then(recipe => {

      // On affiche les informations de la recette.
      // Ici, on aurai très bien pu utiliser generer le HTML pour la recette,mais l'on peut également utiliser un template HTML.
      recipeTitle.innerHTML = recipe.name;
      recipeDifficulty.innerHTML += " " + recipe.difficulty;
      setImageTag(recipeImage, recipe.image, recipe.name);
  })
}

var recipeTitle = document.getElementById("recipe-title");
var recipeDifficulty = document.getElementById("recipe-difficulty");
var recipeImage = document.getElementById("recipe-image");

getParams();