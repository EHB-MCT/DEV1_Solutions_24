"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = 50;
let speed = 5;
let radius = 50;

drawMovingCircle();

function drawMovingCircle() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";
    x += speed;
    if (x >= width + radius) {
        x = 0 - radius;
    }
    Utils.fillCircle(x, 50, radius);

    requestAnimationFrame(drawMovingCircle);
}