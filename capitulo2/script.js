console.log("raiz: " + Math.sqrt(64));

var exponencial = Math.pow(1,2);
console.log(exponencial);
var logaritmo = Math.log10(64);
console.log(logaritmo);
console.log("raiz com exp e log e realint: " + parseInt(exponencial*logaritmo));


var pi = Math.PI;
var seno = Math.sin((45 * pi/180) + 0.0001,3).toFixed(3);
console.log(seno);

// var exemplo5 = 3 * Math.log10(8);
// var expo = Math.pow(exemplo5 + 0.001,3);
// console.log(exemplo5);
// console.log(expo);
// // var exemplo5_1 = (expo + );
// console.log(exemplo5_1);
var exemplo5 = Math.exp(3 * Math.log10(8)) + 0.001;
console.log(exemplo5.toFixed(3));

var exemplo6 = Math.exp(3 * Math.log10(8));
console.log(exemplo6);