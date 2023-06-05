var cardsContainer = document.getElementById("cardsContainer");
var CardPrincipal = document.getElementById("cardPrincipal");
var btn = []


var button = document.getElementsByClassName("button");
for (var i = 0; i < button.length; i++) {
    const element = button[i];
    btn.push(button[i].innerText)
    element.addEventListener("click", function (e) {
        imprimir(e.target.id);
    })
}



function display(array) {
    
    var html = "" ;
    for (var i = 0; i < array.length; i++) {
        html += 
        `
        <div class="col-md-6 col-lg-4 mb-4">
            <img src="./images/pexels-martin-lopez-1117132.jpg" class="card-img" alt="movie">
            <i class="fa-solid fa-bookmark text-end" style="color: #f0cc19;"></i>
            <div class="row">
              <h1 class="col tittleMovie text-start">Spider-Man</h1>
              <p class="col text-end"><i class="fa-solid fa-star" style="color: #f0cc19;"></i> 8.4</p>
            </div>
          </div>
            
        `
    }
    console.log(html)
document.getElementById("cardsContainer").innerHTML = html;
}


function cardPrincipal () {
    document.getElementById("cardPrincipal").innerHTML = `
    
    <h1 class="card-title">Spiderman-Man: No Way Home</h1>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptatem<br>
            officiis a ipsum quis! Perferendis ab impedit, quo reiciendis eum laboriosam porro consequatur
            distinctio
            quam<br>
            itaque quas sed cum! Non.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptatem<br>
            officiis a ipsum quis! Perferendis ab impedit, quo reiciendis eum laboriosam porro consequatur
            distinctio<br>
            quam itaque quas sed cum! Non.
          <h4 class="card-title">2021 Acción 2h 28min</h4>
          </p>
          <div class="play">
            <i class="fa-solid fa-circle-play text-white-60"></i>
          </div>

    `
}

function imprimir(id) {
    switch (id) {
        case "Todos":
            cardsContainer.style.display = "flex"
            cardPrincipal.style.display = "flex"
            break;

         case "Accion":
            cardsContainer.style.display = "flex"
            cardPrincipal.style.display = "none"
            break;
         
         case "Terror":
            cardsContainer.style.display = "flex"
            cardPrincipal.style.display = "none"
          break;

          case "Comedia":
            cardsContainer.style.display = "flex"
            cardPrincipal.style.display = "none"
            break;
         
         case "Suspenso":
            cardsContainer.style.display = "flex"
            cardPrincipal.style.display = "none"
            break;
            
            default: 
            cardsContainer.style.display = "Flex"
            cardPrincipal.style.display = "flex"
    }
}



