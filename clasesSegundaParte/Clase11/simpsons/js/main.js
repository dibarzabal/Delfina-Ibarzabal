// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = this.document.querySelector("#titulo") ;

    titulo.addEventListener("mouseover", function() {
    let nombre = prompt("Cuales tu nombre?: ");
    
    titulo.style.display = "none"
 
    let saludo = document.querySelector("#saludo");
        if (saludo == undefined){
            saludo.innerText= "BIENVENID@";
        }
        else{
            saludo.innerText= "BIENVENID@ " + nombre ;
            saludo.style.textTransform = "uppercase"
        }

    let span = document.querySelector("span");
    span.style.display = "block"

    let bienvenida = document.querySelector(".bienvenida");

    let personajes = document.querySelector(".personajes") ;
    
    span.addEventListener("click", function(){
        bienvenida.style.display = "none"
        personajes.style.display = "flex"
     })
    
     });

    let bart = document.querySelector("#bart");
    bart.addEventListener("click", function(){})

    let lisa = document.querySelector("#lisa");
    lisa.addEventListener("dblclick", function(){})

    let marge = document.querySelector("#marge");
    marge.addEventListener("mouseover", function(){})

    let homero = document.querySelector("#homero");
    marge.addEventListener("click", function(){})

    let maggie = document.querySelector("#maggie");
    maggie.addEventListener("mouseout", function(){})

    let milhouse = document.querySelector("#milhouse");
    milhouse.addEventListener("click", function(){})

    let burns = document.querySelector("#burns");
    burns.addEventListener("mouseover", function(){})

    let bobPatinio = document.querySelector("#bobPatinio");
    bobPatinio.addEventListener("dblclick", function(){})

    let flanders = document.querySelector("#flanders");
    flanders.addEventListener("mouseover", function(){})

    let duffman = document.querySelector("#duffman");
    duffman.addEventListener("dblclick", function(){})

    let gorgory = document.querySelector("#gorgory");
    gorgory.addEventListener("mouseover", function(){})
    
    let nelson = document.querySelector("#nelson")
    nelson.addEventListener("click", function(){})
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    // let boton = ;

 
 }) 


