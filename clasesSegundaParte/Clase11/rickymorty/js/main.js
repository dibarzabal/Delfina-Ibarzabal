fetch("https://rickandmortyapi.com/api/character")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let character = document.querySelector(".characterList");
    
    let characters = ""

    for (let i = 0; i < data.results.length; i++) {
        characters = characters + `<article>
         <a href="./detalle.html"> <img src= ${data.results[i].image} alt='' class="imagenes"> </a>
         <a href="detalle.html?id=${data.results[i].id}" class="info">Name: ${data.results[i].name} </a>
         <p class="info">Status: ${data.results[i].status} </p>
        </article>`
    }

    character.innerHTML = characters

})
.catch(function(error){
    console.log("El error es:" + error);
})

