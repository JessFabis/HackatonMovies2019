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
        dataMovie = data;
    localStorage.setItem("data",JSON.stringify(dataMovie))
    return dataMovie
    })
   
});
dataMovie= JSON.parse(localStorage.getItem("data"));
const forMovie = (dataMovie) =>{
    dataMovie.forEach(element => {
   let title = element.Title;
   let year = element.Year;
   let type = element.Type;
   let poster = element.Poster;
   return (title,year,type,poster)
    })
   }
   forMovie.innerhtml += `<div class = "cardMovie">
<figure><img src = "${dataMovie.Poster}"></figure>
<div class ="infoMovie">
<p>titulo:${dataMovie.Title}</p>
<p>año: ${dataMovie.Year}</p>
<p>tipo: ${dataMovie.Type}</p></div>
</div>`



 

 


    

//const newData = localStorage.getItem("data");

//const dataJson = JSON.parse(newData);
//console.log(dataJson);
