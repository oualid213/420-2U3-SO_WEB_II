{/* <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
        </div> */}

function drawCard(element){
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id",element.id);
    card.setAttribute("data-name",element.name);

    card.innerHTML = `
        <img src="`+ element.image +`" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">`+ element.name +`</h5>
            <p class="card-text"><strong>Difficulty: </strong>` + element.difficulty +`</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <button class="btn btn-primary btn-detail" id="btn-`+ element.id+`">Click me !</button>
            <a href="detail.html?id=`+ element.id+`" class="card-link">A tag</a>
        </div>
    `
    return card;
}

fetch('https://dummyjson.com/recipes?limit=50')
.then(res => res.json())
.then(json => json.recipes)
.then(recipes => {
    console.log(recipes)
    let cardContainer = document.getElementById("card-container")
    recipes.forEach(element => {
        cardContainer.appendChild(drawCard(element))
    });
}).then(()=>{
    btnDetail = document.getElementsByClassName("btn-detail");

    for (let index = 0; index < btnDetail.length; index++) {
        const element = btnDetail[index];
        const id = btnDetail[index].closest(".card").getAttribute("data-id");

        element.addEventListener("click",()=>{
            window.location.href = "detail.html?id=" + id
        })
    }
})