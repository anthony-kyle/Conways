const { Color } = require("chalk");

function randColor(){
    let red = randNumber();
    let green = randNumber();
    let blue = randNumber();

    let color = {red:red, green:green, blue:blue};
    return color;
}

function randNumber(){
    return Math.ceil(Math.random() * 255);
}

module.exports = randColor;