//aqui van eventos DOM
const user = document.getElementById("user");
const search = document.getElementById("search");


    

search.addEventListener("click",()=>{
    const valueUser = user.value;
    console.log(valueUser)
    const url = `http://www.omdbapi.com/?apikey=60fc1083&s=${valueUser}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    localStorage.setItem("data",JSON.stringify(data))
    })
})