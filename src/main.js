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
   
   


    

