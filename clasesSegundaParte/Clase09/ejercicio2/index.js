let misDatos ={
    nombre: "Delfina",
    apellido: "Ibarzabal",
    edad: 18,
    dni: 47963415,
    comidasFavoritas: ["Sushi", "Hamburguesa", "Pastas"],
    saludar: function() {
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " " + "y tengo " + this.edad + " años. Mi primer comida favorita es " + this.comidasFavoritas[0];
    }
};
console.log(misDatos.saludar())


let auto ={
    marca: "Nissan",
    modelo: "X-Trail",
    año: 2019,
    color: "gris",
    posicion: 0,
    avanzar: function(num){
        this.posicion = this.posicion + num
        return this.posicion
    },
    retroceder: function(num){
        this.posicion = this.posicion - num
        return this.posicion
    },
};
console.log(auto.posicion)
auto.avanzar(3)
auto.retroceder(2)
console.log(auto.posicion)


let nuevoAuto ={
    marca: "Nissan",
    modelo: "X-Trail",
    año: 2019,
    color: "gris",
    posicion: 0,
    moverse: function(num){
        this.posicion = this.posicion + num
    },
};
nuevoAuto.moverse(-2)
console.log(nuevoAuto.posicion)



let ironMan ={
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(num){
        this.energia = this.energia - 10
        return "Poder elegido de " + this.nombre + ": " + this.poderes[num] + ". Energía restante: " + this.energia
    },
};
console.log(ironMan.getPoder(1))
console.log(ironMan.getPoder(0))

let hulk ={
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num){
        this.energia = this.energia - 10
        return "Poder elegido de " + this.nombre + ": " + this.poderes[num] + ". Energía restante: " + this.energia
    } 
}
console.log(hulk.getPoder(0))
console.log(hulk.getPoder(2))