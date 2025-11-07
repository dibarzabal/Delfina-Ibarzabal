let queryString = location.search
let objQueryString = new URLSearchParams(queryString)

let id = objQueryString.get("id")

console.log(id);

fetch(`https://rickandmortyapi.com/api/character/${id}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let nombre = document.querySelector(".nombrePersonaje");
    let status = document.querySelector(".statusPersonaje");
    let especie = document.querySelector(".especiePersonaje");
    let imagen = document.querySelector(".imagenPersonaje")

    nombre.innerText += " " + data.name
    status.innerText += ` ${data.status}`
    especie.innerText += " " + data.species
    imagen.src = data.image

})
.catch(function(error){
    console.log("El error es:" + error);
})

