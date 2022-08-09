//inicia desafio 6

let bienvenida = "Bienvenido a Pastelerias Paty"

alert(bienvenida);

//solicitud de datos y lo muestra en consola
let nombre = prompt('Escribe tu nombre');

console.log(nombre);

let salidaNom = nombre + " " + "Tu nombre ha sido ingresado"

alert(salidaNom);

//solicitud de apellidos
let apellidoPat = prompt('Escribe tu apellido paterno');

console.log(apellidoPat);

let salidaApPat = apellidoPat + " " + "Es tu apellido paterno y ha sido ingresado";

alert(salidaApPat);


//concatenacion de nombre y apellido

let nombrecompleto = nombre + " " + apellidoPat;

console.log(nombrecompleto);

let saludo = nombrecompleto + " " + "Bienvenido a nuestra app";

alert(saludo);



// constructor de objeto: pasteles


class Pastel {
    constructor(id,tipo,existencia,precio){
        this.id = id;
        this.tipo = tipo;
        this.existencia = existencia;
        this.precio = precio;
    }
}

let pastel1 = new Pastel(1,"Rompope Especial",15,550)
let pastel2 = new Pastel(2,"Tres Leches",15,350)
let pastel3 = new Pastel(3,"Mil Hojas",15,400)
let pastel4 = new Pastel(4,"De Piña",15,450)
let pastel5 = new Pastel(5,"De Cajeta",15,450)

let pasteles = [pastel1,pastel2,pastel3,pastel4,pastel5]


let carrito = [];

const mostrarProductos = () => {
    let mensaje = "Elije el pastel de tu preferencia:"
    pasteles.forEach(paste => {
        mensaje += `
            Opción ${paste.id}: ${paste.tipo} - Stock: ${paste.existencia} - $${paste.precio}`
    })
    mensaje += `
            Opción 0: No comprar nada`

    //Opcion para pasar la opción como la marca (Deconmentar lo de abajo nada mas)
    // let opcion = prompt(mensaje).toLowerCase();


    //Opcion para pasar la opción como id
    let opcion = Number(prompt(mensaje))


    return opcion;
}

let comprar = true;

while (comprar) {
    let opcion = mostrarProductos()


    //Opcion para buscar por marca (Deconmentar lo de abajo nada mas)
    // let celularElegido = celulares.find(celu => celu.marca.toLowerCase() === opcion)


    //Opcion para buscar por id
    // let celularElegido = celulares.find(celu => celu.id === opcion)

    // if (celularElegido) {
    //     console.log(celularElegido);
    // } else {
    //     console.log('No lo encontramos');
    // }


    if (opcion >= 1 && opcion <= 5) {
        let pastelElegido = pasteles.find(paste => paste.id === opcion)
        if (carrito.length === 0) {
            pastelElegido.cantidad = 1;
            pastelElegido.existencia--;
            carrito.push(pastelElegido)
        } else {
            let pastelEnCarrito = carrito.find(paste => paste.id === opcion)
            if (pastelEnCarrito) {
                pastelEnCarrito.cantidad++;
                pastelEnCarrito.existencia--;
                if (pastelEnCarrito.existencia === 0) {
                    pasteles = pasteles.filter(paste => paste.id != opcion)
                }
            } else {
                pastelElegido.cantidad = 1;
                pastelElegido.existencia--;
                carrito.push(pastelElegido)

            }
        }
    } else {
        comprar = false;
    }
}

const mostrarTotalCarrito = () => {
    let mensajeCarrito = "";
    if (carrito.length > 0) {
        carrito.forEach(paste => {
            mensajeCarrito += `
                Tipo: ${paste.tipo} - Cantidad: ${paste.cantidad} - Total: $${paste.cantidad * paste.precio}
            `
        })
        mensajeCarrito += `Total Carrito: ${carrito.reduce((total,paste) => total + (paste.precio * paste.cantidad),0)}`
        alert(mensajeCarrito)
    } else {
        mensajeCarrito += 'No hay productos en el carrito'
        alert(mensajeCarrito)
    }
}

mostrarTotalCarrito()


//fin desafio 6
/*

//abajo viene codigo del proyecto que estoy manejando que es una libreta virtual de finanzas personales, por cuestiones de tiempo decidi hacer la pasteleria. 


function Cliente(nombre, apellido, edad, escolaridad, edoCivil, telefonoCelular, email, domicilio){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.escolaridad = escolaridad;
    this.edoCivil = edoCivil;
    this.telefonoCelular = telefonoCelular;
    this.email = email; 
    this.domicilio = domicilio;
}

    const cliente1 = new Cliente("Joaquin", "Valdez", 36, "secundaria", "soltero", 5512131415,"joaquinval@hotmail.com", "Av Del Trabajo 16");
    const cliente2 = new Cliente("Ramón", "Gutierrez", 40, "primaria", "casado", 7711242526, "ramoncitogtz@gmail.com", "Av.Tezontle num 24 Las aguilas");
    const cliente3 = new Cliente("Maria del Rosario", "Izquierdo", 24, "preparatoria", 7711313435, "chayito55@live.com", "Calle Dalia No. 56 Los Remedios");
    const Cliente4 = new Cliente("Carmen Angelica", "Velazquez", 32, "licenciatura", 7714142434, "angelitovm@gmail.com", "Calle Tepetate No. 22 Las Rocas");


    
//constructor de objeto: ingresoFijo

function ingresoFijo(fecha, concepto, cantidad){
    this.fecha = fecha;
    this.concepto = concepto;
    this.cantidad = cantidad;
}

    const ingresoFijo1 = new ingresoFijo("28/03/22", "sueldo semanal", 3100);
    const ingresoFijo2 = new ingresoFijo("25/03/22", "sueldo semanal", 3100);
    const ingresoFijo3 = new ingresoFijo("01/04/22", "sueldo semanal", 3100);


//constructor de objeto: ingresoVariable

function ingresoVariable(fecha, concepto, cantidad){
    this.fecha = fecha;
    this.concepto = concepto;
    this.cantidad = cantidad;
}

    const ingresoVariable1 = new ingresoVariable("28/03/22", "comision semanal", 1100);
    const ingresoVariable2 = new ingresoVariable("25/03/22", "comision semanal", 900);
    const ingresoVariable3 = new ingresoVariable("01/04/22", "comision semanal", 1300);


//constructor de objeto: ingresoExtraor


function ingresoExtraor(fecha, concepto, cantidad){
    this.fecha = fecha;
    this.concepto = concepto;
    this.cantidad = cantidad;
}

    const ingresoExtraor1 = new ingresoExtraor("10/03/22", "reintegro loteria", 50);
    const ingresoExtraor2 = new ingresoExtraor("21/03/22", "billete encontrado", 500);
    const ingresoExtraor3 = new ingresoExtraor("06/04/22", "apuesta", 250);


//constructor de objeto: gastoFijo

function gastoFijo(fecha, concepto, cantidad){
    this.fecha = fecha;
    this.concepto = concepto;
    this.cantidad = cantidad;
}

    const gastoFijo1 = new gastoFijo("02/02/22", "hipoteca", 4600);
    const gastoFijo2 = new gastoFijo("02/03/22", "hipoteca", 4600);
    const gastoFijo3 = new gastoFijo("02/04/22", "hipoteca", 4600);


//constructor de objeto: gastoVariable

function gastoVariable(fecha, concepto, cantidad){
    this.fecha = fecha;
    this.concepto = concepto;
    this.cantidad = cantidad;
}

    const gastoVariable1 = new gastoVariable("28/03/22", "cafe", 39);
    const gastoVariable2 = new gastoVariable("25/03/22", "transporte", 20);
    const gastoVariable3 = new gastoVariable("01/04/22", "periodico", 15);


//constructor de objeto: gastoExtraordinario


function gastoExtraordinario(fecha, concepto, cantidad){
    this.fecha = fecha;
    this.concepto = concepto;
    this.cantidad = cantidad;
}
    mostrar = function(){
        
        alert('Este tipo de gasto' +" "+(this.concepto)+" "+'lo puedes prevenir.');
    
    }



    const gastoExtraordinario1 = new gastoExtraordinario("07/03/22", "consulta dentista", 600);
    gastoExtraordinario1.mostrar();

    const gastoExtraordinario2 = new gastoExtraordinario("21/03/22", "arreglo llantas ponchadas", 450);
    gastoExtraordinario2.mostrar();

    const gastoExtraordinario3 = new gastoExtraordinario("05/04/22", "consulta medico", 400);
    gastoExtraordinario3.mostrar();

//uso de los metodos de objeto

console.log(gastoExtraordinario1.lenght);

console.log(gastoExtraordinario1.toUpperCase());

//metodo personalizado de objeto

gastoExtraordinario1.mostrar();
gastoExtraordinario2.mostrar();
gastoExtraordinario3.mostrar();

//creacion de Arrays

let viveres = ["manzana","platano","pepino", "melón", "guayaba", "pasta", "tortillas", "huevo","pan"]

let comidaFueraCasa = ["pizza", "tacos", "chalupas", "cerveza", "tamales", "refresco", "comida china", "pambazos"]

let transporte = ["urvan", "taxi", "autobus", "metro", "autobus foraneo", "avion", "uber", "didi"]

let propinas = ["donaciones","limosna iglesia", "restaurante", "empacador", "limosna callejera", "valet parking", "mensajeria"]

let servicios = ["electricidad", "agua", "telefono fijo", "internet", "celular", "cable", "tripleplay", "dobleplay", "renta", "hipoteca", "gas"]

let vestimenta = ["ropa exterior", "ropa interior", "calzado", "lentes", "accesorios"]

let educacion = ["colegiatura", "uniforme", "mochila", "utiles escolares", "cursos adicionales", "copias"]

let diversion = ["netflix", "amazon prime", "cine", "vacaciones", "teatro", "danza", "concierto", "viaje"]

let mantenimientoCasa = ["plomeria", "electricidad", "jardineria", "herreria", "tapiceria", "impermeabilizacion", "cerrajeria", "mecanico"]

let salud = ["consulta medico", "consulta dentista", "analisis clinicos", "protesis", "lentes graduados"]

let extras = ["festejos", "regalos", "fiestas", "emergencias automotrices", "emergencias dentales", "emergencias salud"]

//Propiedad Length

console.log(viveres.length);

console.log(transporte.length);

console.log(servicios.length);

console.log(educacion.length);

//Agregar Elementos (al final del array) "push"

console.log(viveres.length);

viveres.push('espinaca');

console.log(viveres.length);

console.log(viveres);


//otro ejemplo "push"

console.log(comidaFueraCasa.length);

comidaFueraCasa.push('carnitas');

console.log(comidaFueraCasa.length);

console.log(comidaFueraCasa);

//Agregar Elementos (al inicio del Array) "unshift"


console.log(transporte.length);

transporte.unshift('metrobus');

console.log(transporte.length);

console.log(transporte);


//Quitar elmentos del inicio de la lista "shift()"

console.log(propinas.length);

propinas.pop('donaciones');

console.log(propinas.length);

console.log(propinas);



//Quitar elementos del final de la lista "pop()"


console.log(servicios.length);

servicios.pop('gas');

console.log(servicios.length);

console.log(servicios);


//Quitar uno o varios elementos del array por parametros (ubicacion y numero de elementos): Slice()

console.log(mantenimientoCasa.length);

mantenimientoCasa.slice(4,2);

console.log(mantenimientoCasa.length);

console.log(mantenimientoCasa);


//Metodo Join une todos los elmentos de un array en un string separados por el valor que pasamos por parametro

console.log(vestimenta.length);

console.log(vestimenta.join(","));

console.log(vestimenta);

//Metodo concat combina dos arrays en uno solo

console.log(diversion);

console.log(extras);

let gastosInesperados = diversion.concat(extras);

console.log(gastosInesperados)

*/



