// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);

// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
var arrayUsuarioGlobal = [];
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
var u1 = {
  name: "usuario1",
  country: "spain",
  money: 199,
  premiumAccount: true
};
//  * name: usuario2, country: france, money: 0, premiumAccount: false
var u2 = {
  name: "usuario2",
  country: "france",
  money: 0,
  premiumAccount: false
};
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
var u3 = {
  name: "usuario3",
  country: "spain",
  money: 537,
  premiumAccount: false
};
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
var u4 = {
  name: "usuario4",
  country: "italy",
  money: 1004,
  premiumAccount: true
};
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
var u5 = {
  name: "usuario5",
  country: "spain",
  money: 250,
  premiumAccount: false
};
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
var u6 = {
  name: "usuario6",
  country: "ireland",
  money: 799,
  premiumAccount: true
};
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false
var u7 = {
  name: "usuario7",
  country: "spain",
  money: 3345,
  premiumAccount: false
};

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.
const createUsers = () => {
  let arrayUser = [];

  arrayUser.push(u1, u2, u3, u4, u5, u6, u7);

  return arrayUser;
};

arrayUsuarioGlobal = createUsers();
// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". NO HACE FALTA USAR FILTER. SE PUEDE RECORER CON CUALQUIER BUCLE.
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
const filterUsers = arrayUser => {
  return arrayUser.filter(u => u.country == "spain" && u.money > 200);
};
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
function onLoad() {
  console.log(createUsers());
  console.log(filterUsers(arrayUsuarioGlobal));
}
