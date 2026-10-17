"use strict";
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(number) {
    if (!(typeof number === 'number' || typeof number === 'string' || typeof number === 'boolean'))
        throw 'O valor inserido deve ser um numero ou uma string. Tipo invalido';
    if (typeof number === 'number')
        return number;
    if (typeof number === 'boolean')
        return Number(number);
    return Number(number);
}
//Solução da aula:
// function toNumber(value: string | number) {
//   if (typeof value === 'string') {
//     return Number(value);
//   } else if (typeof value === 'number') {
//     return value;
//   } else {
//     throw 'value deve ser um número ou uma string';
//   }
// }
const tester = 10;
const number = toNumber(tester);
console.log(`Valor retornando ${number}`);
const string = toNumber('10');
const truely = toNumber(true);
const falsy = toNumber(false);
console.log(`Valor retornando p/ boolean ${truely}`);
console.log(`Valor retornando p/ boolean ${falsy}`);
console.log(`Valor retornando p/ string ${string}`);
