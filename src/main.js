//aqui van eventos DOM
const user = document.getElementById("user");
const search = document.getElementById("search");
const printMovie =  document.getElementById("printMovie");
let dataMovie = "";
    

search.addEventListener("click",()=>{
    const valueUser = user.value;
    console.log(valueUser);
    const url = `http://www.omdbapi.com/?apikey=60fc1083&s=${valueUser}`;
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
<figure><img src = "${element.Poster}"></figure>
<div class ="infoMovie">
<p>titulo:${element.Title}</p>
<p>año: ${element.Year}</p>
<p>tipo: ${element.Type}</p></div>
</div>`

  printMovie.insertAdjacentHTML("beforeend",showMovie)
    })
   }
   
   


 

 


    

