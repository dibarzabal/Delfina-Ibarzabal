let search = document.querySelector(".search-results");
console.log(search);

let queryString = location.search
let objQueryString = new URLSearchParams(queryString)
let resultado = objQueryString.get("q")

fetch(`https://rickandmortyapi.com/api/character/?name=${resultado}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    
    let characters = ""

    for (let i = 0; i < data.results.length; i++) {
        characters = characters + `<article>
         <img src= ${data.results[i].image} alt='' class="imagenes">
         <a href="detalle.html?id=${data.results[i].id}" class="info">Name: ${data.results[i].name} </a>
         <p class="info">Status: ${data.results[i].status} </p>
        </article>`
    }

    search.innerHTML = characters
})
.catch(function(error){
    console.log("El error es:" + error);
})
