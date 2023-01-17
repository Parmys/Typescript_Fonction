var emplId = 1;
var empName = 'Da Silva';
//Tuple type
var employee = [emplId, empName];
var person = [emplId, empName, true];
var user;
user = [emplId, empName, true, 25, 'Admin'];
var employee1; //important
employee1 = [[1, 'Steve Job'], [2, 'Jeff Bezos'], [3, 'Marc Zuk']];
console.log(employee1[1][1]); // tsc  tuple.ts     node  tuple.js
employee1.push([4, 'Elon Musk']);
employee1.push([5, 'Victor Hugo']);
console.log(employee1);
employee1[1][1] = employee1[1][1].concat(' Albert');
console.log(employee1);
