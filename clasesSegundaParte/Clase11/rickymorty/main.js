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
         <img src= ${data.results[i].image} alt='' class="imagenes">
          <p class="info">Name: ${data.results[i].name} </p>
          <p class="info">Status: ${data.results[i].status} </p>
         </article>`
    }

    character.innerHTML = characters



})
.catch(function(error){
    console.log("El error es:" + error);
})

