"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "black";
context.fillRect(0, 0, width, height);

let names = [true, true, false, false];

console.log(names.length);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}