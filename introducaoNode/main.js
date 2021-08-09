"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fatorial_1 = require("./fatorial");
var argv = require('yargs').demandOption('num').argv;
console.log("n-fatorial");
console.log("Executando o script do diretorio " + process.cwd());
process.on("exit", function () {
    console.log('script esta prestes a terminar');
});
var num = argv.num;
console.log("O fatorial de " + num + " \u00E9 " + fatorial_1.fatorial(num));
