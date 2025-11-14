let miNombre = ["Delfina Ibarzabal"];
let nombreToString = JSON.stringify(miNombre)
localStorage.setItem("userName", nombreToString);
console.log(localStorage)
let recuperoStorage = localStorage.getItem("userName");
let nombreRecuperado = JSON.parse(recuperoStorage);
console.log(nombreRecuperado)
localStorage.clear();

 /*Otro ejercicio*/

let peliculasFavoritas = ["Shrek", "Cars", "Moana"];
localStorage.setItem("peliculaFavorita", peliculasFavoritas[1]);
console.log(localStorage)
let recuperaStorage = localStorage.getItem("peliculaFavorita");
console.log(recuperaStorage)
localStorage.clear()

/*Otro ejercicio*/

let peliculasJson = JSON.stringify(peliculasFavoritas)
localStorage.setItem("favoritos", peliculasJson);
console.log(localStorage)
let recupereStorage = localStorage.getItem("favoritos");
let favsRecuperadas = JSON.parse(recupereStorage)
favsRecuperadas.push("Enredados")
let favsString = JSON.stringify(favsRecuperadas)
localStorage.setItem("favoritos", favsString)
console.log(localStorage)

/*Otro ejercicio*/

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];
let winterIsComing = [];
for (let i = 0; i < got.length; i++) {
    if (got[i].ciudad == "Winterfell"){
        winterIsComing.push(got[i])
    }
}
let winterString = JSON.stringify(winterIsComing)
localStorage.setItem("winterfell", winterString);
 console.log(localStorage)