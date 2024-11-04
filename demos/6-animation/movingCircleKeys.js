"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let colorAngle = 0;
let x = width / 2;
let y = height / 2;

window.onkeydown = down;

context.fillRect(0, 0, width, height);
context.fillStyle = Utils.hsl(colorAngle, 100, 50);
Utils.fillCircle(x, y, 25);

/**
 * 
 * @param {KeyboardEvent} eventData 
 */
function down(eventData) {
    console.log(eventData.code);

    if (eventData.code == "ArrowUp") {
        y -= 5;
    } else if (eventData.code == "ArrowDown") {
        y += 5;
    }
    if (eventData.code == "ArrowLeft") {
        x -= 5;
    } else if (eventData.code == "ArrowRight") {
        x += 5;
    }

    context.fillStyle = Utils.hsl(colorAngle, 100, 50);
    Utils.fillCircle(x, y, 25);
    colorAngle++;
}