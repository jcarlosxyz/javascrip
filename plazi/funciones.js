function newfuncon( name , age , contry)
{
var name = name || "oscar";
var age = age  || 23;
var contry = contry || "Mexico";
console.log(name,age,contry);

};

function newfuncon2( name = "oscar",age = 23 , contry = "Mexico"){
 console.log(name,age,contry);

};
newfuncon();
newfuncon("hola",52,"tla");
console.log("funcion renovada");
newfuncon2();
newfuncon2("hola",52,"tla");
let texto = "Hola";
let texto2 = "mundo "
let salidaTexto = `${texto}  ${texto2}`

console.log(salidaTexto)

let saludo1 = "hola como estas \n" + "sjdksjdksdjks";
let saludo2 = `hola como estas de 
esta es una nueva linea `
console.log(saludo1)
console.log(saludo2)


let equipo1 = ["manzana", "dorazno ","platano"];
let equipo2 = ["fsds","sdsd","sdsdd"]
let equipo3 = ["tem1",...equipo1 , "tem2",...equipo2];
console.log (equipo3);


    

