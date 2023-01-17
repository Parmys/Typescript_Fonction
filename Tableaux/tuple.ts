let emplId: number=1;
let empName:string='Da Silva';

//Tuple type

let employee:[number, string]=[emplId,empName];

let person:[number,string,boolean]=[emplId,empName,true];

let user:[number,string,boolean,number,string];
user=[emplId,empName,true,25,'Admin'];

let employee1 :[number, string][];  //important


employee1=[[1,'Steve Job'],[2,'Jeff Bezos'],[3,'Marc Zuk']];
console.log(employee1[1][1]);  // tsc  tuple.ts     node  tuple.js
employee1.push([4,'Elon Musk']);
employee1.push([5,'Victor Hugo']);
console.log(employee1);
employee1[1][1]=employee1[1][1].concat(' Albert');
console.log(employee1);

