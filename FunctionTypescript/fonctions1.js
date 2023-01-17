////Declaration JS
var fonc = function (x, y) {
    return x + y;
};
//arrow function : (param)=>{code}
//définition  identique à f, mais plus simple (tres utile en angular)
var g = function (x, y) {
    return x + y;
};
//syntaxe avec typage 
console.log(g(50, 5));
var g1 = function (x1, y1) {
    return x1 + y1;
};
console.log(g1(50, 5));
//Exercice
var infosClients = function (id, nom, email) {
    console.log("ID:", id);
    console.log("Nom:", nom);
    if (email != undefined)
        console.log("Email : ", email);
};
infosClients(1, "Gilbert");
infosClients(12, "Helene", "helene@gmail.com");
//prix tva  ptt
var prix = function (nomProduit, prix, Tva) {
    var ptt = prix * Tva;
    console.log(nomProduit);
    return ptt;
};
var a = prix("savon", 200, 0.12);
console.log(a);
//correction
//Ecrire une fonction feleché : (nomProduit:string,prix:number, Tva:number)=>res
var prix1 = function (nomProduit, prixHT, Tva) {
    var pttc = prixHT + (prixHT * Tva / 100);
    return console.log(nomProduit + " " + pttc); //prixTTC
};
prix1("savon", 9000, 0.12);
prix1("robe", 100, 0.12);
