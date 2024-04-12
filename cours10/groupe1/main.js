{/* <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>  
        <a href="detail.html?name=` + recipe.name.split(" ").join("_") + `" class="btn btn-primary">Go somewhere</a>

                            */}

                            
function drawCard(recipe){
    let card = document.createElement("div");
    card.classList.add("card")

    card.setAttribute("data-id",recipe.id);
    card.setAttribute("data-name",recipe.name.split(" ").join("_"));
    card.setAttribute("data-difficulty",recipe.difficulty);


    card.innerHTML = `  <img src="` + recipe.image +`" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">` + recipe.name + `</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button class="btn btn-primary btn-recipe">Go somewhere</button>
                        </div>
                    `
    return card;
}

fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(json => {
    cardContainer = document.getElementById("card-container");
    console.log(json)

    json.recipes.forEach(recipe => {
        cardContainer.appendChild(drawCard(recipe)) 
    });    

})
.finally(()=>{

    btnRecipe = document.getElementsByClassName("btn-recipe");

    for (let i = 0; i < btnRecipe.length; i++) {
            btnRecipe[i].addEventListener("click",()=>{
            let card = btnRecipe[i].closest(".card");

            const name = card.getAttribute("data-name");
            window.location.href = "detail.html?name="+name;
        })
        

    }
})
                    