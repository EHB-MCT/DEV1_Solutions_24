"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = Utils.randomNumber(0, width);
let y = Utils.randomNumber(0, height);
let mouseX = 0;
let mouseY = 0;

window.onmousedown = shoot;
window.onmousemove = move;

animate();

function animate() {
    x += Utils.randomNumber(-10, 10);
    y += Utils.randomNumber(-10, 10);

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    drawRandomCircle();
    context.fillStyle = "red";
    Utils.fillCircle(mouseX, mouseY, 20);

    requestAnimationFrame(animate);
}

drawRandomCircle();

function drawRandomCircle() {

    context.fillStyle = "black";
    Utils.fillCircle(x, y, 50);

}

/**
 * 
 * @param {MouseEvent} e 
 */
function shoot(e) {

    let distance = Utils.calculateDistance(x, y, e.pageX, e.pageY)
    if (distance < 50) {
        console.log("SCORE");
    }
}

/**
 * 
 * @param {MouseEvent} e 
 */
function move(e) {

    mouseX = e.pageX;
    mouseY = e.pageY;

}