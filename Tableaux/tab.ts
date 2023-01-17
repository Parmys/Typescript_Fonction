let x=[1,2];//x est un tableau de type number[] : ne peut contenir que number
x[0]=3;
x[1]='toto'
let y:number[]=[]; // tableau vide d'entier : on ne pourra rajouter que des entiers
//let z:number[]=[];
y[0]=3;
let z:(number|string)[]=[];
z=['1','2'];
z[0] = 'toto';
z[2]=false;//boolean not ok
//les tuples: on indique precisément le type de chaque element
let t:[number,string] =[1,'toto'];
t=[3,'tata']//ok et l ordre est tres important
t=[3,'toto','titi'];//tuple pas plus de deux pas un triplet