"use strict";

let n1 = 10;
let n2 = 11;

/**
 * Será realizado a comparação entre os binários e retornado 1 a cada equivalência de 1 e zero a cada não equivalência de 1;
 */
let res = n1 & n2;
console.log(res);

let n3 = 11;
let n4 = 14;
let res2 = n3 & n4;
console.log(res2);
/**
 * Ainda havendo a equivalência entre 1, o 1 sempre será retornado, independente se houver ou não equivalência;
 */
let n5 = 10;
let n6 = 11;
let res3 = n5 | n6;
console.log(res3);

/**
 * Quando houver equivalência, será retornado zero, enquanto que onde não houver equivalência e o 1 estiver presente, será retornado 1;
 */
let n7 =13 ;
let n8 = 14;
let res4 = n7 ^ n8;
console.log(res4);

/**
 * Deslocará x bits à esquerda ou à direita, formando um novo binário e por consequência um novo número;
 */
let n9 = 25;
let n10 = 30;
let res5 = n9 << 1;
let res6 = 30 >> 1;
console.log(res5);
console.log(res6)