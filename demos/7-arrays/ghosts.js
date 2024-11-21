"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;



let xPositions = [];
let yPositions = [];
let colors = [];


setup();
update();

function setup() {
    for (let i = 0; i < 100; i++) {
        xPositions[i] = Utils.randomNumber(0, width);
        yPositions[i] = Utils.randomNumber(0, height);
        colors[i] = Utils.randomNumber(0, 360);
    }
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < xPositions.length; i++) {
        drawGhost(xPositions[i], yPositions[i], colors[i]);
        xPositions[i] += Utils.randomNumber(-2, 2);
        yPositions[i] += Utils.randomNumber(-2, 2);
    }
    requestAnimationFrame(update);
}



function drawGhost(x, y, hue) {
    context.fillStyle = Utils.hsl(hue, 100, 50);
    context.beginPath();
    context.moveTo(x, y + 10);
    context.lineTo(x - 10, y);
    context.lineTo(x - 20, y + 10);
    context.ellipse(x, y, 20, 40, 0, Math.PI, Math.PI * 2);
    context.lineTo(x + 20, y + 10);
    context.lineTo(x + 10, y);
    context.lineTo(x, y + 10);
    context.fill();
    context.fillStyle = "white";
    Utils.fillCircle(x - 7, y - 20, 5, 5);
    Utils.fillCircle(x + 7, y - 20, 5, 5);
    context.fillStyle = "black";
    Utils.fillCircle(x - 7, y - 20, 2, 2);
    Utils.fillCircle(x + 7, y - 20, 2, 2);
}