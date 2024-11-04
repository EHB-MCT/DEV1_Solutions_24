"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let colorAngle = 0;

window.onmousemove = draw;

context.fillRect(0, 0, width, height);

/**
 * 
 * @param {MouseEvent} eventData 
 */
function draw(eventData) {
    context.fillStyle = Utils.hsl(colorAngle, 100, 50);
    Utils.fillCircle(eventData.pageX, eventData.pageY, 25);
    colorAngle++;
}