"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatorial = void 0;
var fatorial = function (num) {
    if (num === 0) {
        return 1;
    }
    return num * exports.fatorial(num - 1);
};
exports.fatorial = fatorial;
