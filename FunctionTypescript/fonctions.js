function f(x, y) {
    return x + y;
}
//-----------------------------------------
console.log(f(7, 40), '  ', f('toto', 'momo')); //OK
//---------------------------------------------
function f1(x, y) {
    return x + y;
}
function f2(x, y) {
    return x + y;
}
console.log(f1(7, 40), '  ', f2(10, 20)); //OK
