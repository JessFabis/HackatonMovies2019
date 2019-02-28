//aqui van eventos DOM
const user = document.getElementById("user");
const search = document.getElementById("search");
const printMovie =  document.getElementById("printMovie");
let dataMovie = "";
    

search.addEventListener("click",()=>{
    const valueUser = user.value;
    console.log(valueUser);
    const url = `https://www.omdbapi.com/?apikey=60fc1083&s=${valueUser}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        dataMovie = data.Search;
   // localStorage.setItem("data",JSON.stringify(dataMovie))
    forMovie (dataMovie);
   
    })
   
});
const forMovie = (dataMovie) =>{
    //dataMovie= JSON.parse(localStorage.getItem("data"));
    printMovie.innerHTML="";
    dataMovie.forEach(element => {
 let showMovie =
`<div class = "cardMovie">
<figure class ="imgMovie"><img class = "imagen"src = "${element.Poster}"></figure>
<div class ="infoMovie">
<h2>Title:${element.Title}</h2>
<p>Year: ${element.Year}</p>
<p>Type: ${element.Type}</p></div>
</div>`

  printMovie.insertAdjacentHTML("beforeend",showMovie)
    })
   }

/*function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 5) {
            tmpNode.classList.add("box--hide");
            boxes[5].className = "box move-to-position5-from-left";
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";
        boxes[3].className = "box move-to-position3-from-left";
        boxes[4].className = "box move-to-position4-from-left";
        boxes[0].remove();

        document.querySelector(".cards__container").appendChild(tmpNode);

    }, 500);

}

function shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[4].className = "box move-out-from-right";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 4) {
            boxes[4].className = "box box--hide";
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position1-from-right";
        boxes[0].className = "box move-to-position2-from-right";
        boxes[1].className = "box move-to-position3-from-right";
        boxes[2].className = "box move-to-position4-from-right";
        boxes[3].className = "box move-to-position5-from-right";
    }, 500);

}*/