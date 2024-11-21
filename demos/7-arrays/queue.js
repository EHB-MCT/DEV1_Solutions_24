"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let persons = [];

drawQueue();

function drawQueue() {

    persons.push("Peter");
    persons.push("Rayan");
    persons.push("Sophie");
    persons.push("Ali");
    persons.push("Els");

    console.log(persons);

    persons.shift();
    // persons.shift();
    // persons.shift();
    // persons.shift();
    // persons.shift();

    for (let i = 0; i < persons.length; i++) {
        drawPerson(100 + i * 100, 100, persons[i]);
    }

}

function drawPerson(x, y, name) {
    Utils.fillCircle(x, y, 25);
    Utils.fillCircle(x, y + 50, 25);
    context.fillRect(x - 25, y + 50, 50, 50);
    context.fillRect(x - 15, y + 100, 30, 50);
    context.font = "bold 20pt Arial";
    context.textAlign = "center";
    context.fillText(name, x, y - 40);
}