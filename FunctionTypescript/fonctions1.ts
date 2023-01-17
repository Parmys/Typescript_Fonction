////Declaration JS

let fonc=function(x,y){

    return x+y;
}

//arrow function : (param)=>{code}
//définition  identique à f, mais plus simple (tres utile en angular)

let g=(x, y)=>{
return x+y;

}
//syntaxe avec typage 
console.log(g(50,5));
let g1=(x1:number, y1:number)=>{
    return x1+y1;
    
    }
 console.log(g1(50,5));  
 
 //Exercice
 let infosClients=(id:number, nom:string,email?:string)=>{
    console.log("ID:",id);
    console.log("Nom:",nom);
    if(email !=undefined)
    console.log("Email : ", email);
    }


infosClients(1,"Gilbert");
infosClients(12,"Helene","helene@gmail.com");

//prix tva  ptt

        let prix =(
            nomProduit:string,
            prix:number,
             Tva:number
             )=>{
            let ptt:number=prix*Tva;
            console.log(nomProduit);
            return ptt;
        }
        let a =prix("savon",200,0.12);
        console.log(a);

//correction
//Ecrire une fonction feleché : (nomProduit:string,prix:number, Tva:number)=>res

let prix1 =(
    nomProduit:string,
    prixHT:number,
     Tva:number
     )=>{
    let pttc:number=prixHT+(prixHT*Tva/100);
    return console.log(nomProduit+" "+pttc);                                          //prixTTC
}
prix1("savon",9000,0.12);
prix1("robe",100,0.12);
