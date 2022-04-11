"use strict";

function hw5(string, lengthString, symbol, start = false) {
    let symbolString = "",
        result = "";

    for (let i = 0; i < lengthString; i++) {
        symbolString += symbol;
    }

    if (start === true) {
        result = symbolString + string;
    } else {
        result = string + symbolString;
    }
    return result;
}

let result = hw5("smth", 8, "0", true);
document.body.innerHTML = result;