"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let colorAngle = 0;
let x = width / 2;
let y = height / 2;

context.fillRect(0, 0, width, height);

drawMovingCircle();

function drawMovingCircle() {

    x += Utils.randomNumber(-1, 1) * 10;
    y += Utils.randomNumber(-1, 1) * 10;

    context.fillStyle = Utils.hsl(colorAngle, 100, 50);
    Utils.fillCircle(x, y, 25);
    colorAngle++;
    requestAnimationFrame(drawMovingCircle);
}