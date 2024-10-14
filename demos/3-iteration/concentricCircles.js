"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

// MOVED To context.js
/** @type {CanvasRenderingContext2D} */
//let context;
//setup();
/*
function setup() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}*/

drawConcentricCircles();

function drawConcentricCircles() {

    let i = 20;
    while (i > 0) {
        context.fillStyle = Utils.hsl(i * 18, 100, 50);
        Utils.fillCircle(250, 250, i * 10);
        i--;
    }

    context.lineCap = "round";
    context.strokeStyle = "white";
    context.lineWidth = 5;
    Utils.drawLine(50, 250, 450, 250);
    Utils.drawLine(250, 50, 250, 450);

}