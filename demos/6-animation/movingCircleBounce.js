"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = 50;
let y = 50;
let speed = 5;
let goRight = true;
let radius = 50;

drawMovingCircle();

function drawMovingCircle() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";
    Utils.fillCircle(x, y, radius);

    if (x >= width - radius) {
        goRight = false;
    } else if (x <= radius) {
        goRight = true;
    }

    if (goRight == true) {
        x += speed;
    } else {
        x -= speed;
    }

    requestAnimationFrame(drawMovingCircle);
}