"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillRect(0, 0, width, height);
drawRandomSquares();
drawGaussianSquares();
drawNoiseWave();
drawColoredGrid();

function drawRandomSquares() {
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        context.fillStyle = Utils.hsl(360 / height * y, 100, 50);
        context.fillRect(x, y, 2, 2);
    }
}

function drawGaussianSquares() {
    let halfWidth = width / 2;
    let numberPerLine = 20;
    for (let i = 0; i < height * numberPerLine; i++) {
        let x = halfWidth + Utils.randomGaussian() * halfWidth;
        let y = i / numberPerLine;
        context.fillStyle = Utils.hsl(360 / height * y, 100, 50);
        context.fillRect(x, y, 5, 5);
    }
}

function drawNoiseWave() {
    for (let i = 0; i < width; i++) {
        let x = i;
        let y = Noise.perlinNoise(i / 100) * height;
        context.fillStyle = Utils.hsl(360 / height * y, 100, 50);
        context.fillRect(x, y, 20, 20);
    }
}

function drawColoredGrid() {
    let color = 0;
    let nColumns = 10;
    let nRows = 10;
    let colorStep = 360 / (nColumns * nRows);
    for (let column = 0; column < nColumns; column++) {
        for (let row = 0; row < nRows; row++) {
            context.fillStyle = Utils.hsl(colorStep * color, 200, 50);
            context.fillRect(50 + column * 55, 50 + row * 55, 50, 50);
            color++;
        }
    }
}