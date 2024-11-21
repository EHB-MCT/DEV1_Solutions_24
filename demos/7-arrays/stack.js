"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let books = [];

drawStack();

function drawStack() {

    books.push("Lord of the rings");
    books.push("Game of Thrones");
    books.push("The wheel of time");
    books.push("Mistborn");
    books.push("The dark tower");

    console.log(books.pop());
    // console.log(books.pop());
    // console.log(books.pop());
    // console.log(books.pop());
    // console.log(books.pop());

    for (let i = 0; i < books.length; i++) {
        drawBook(100, 500 - i * 110, books[i]);
    }

    console.log(books);

}

function drawBook(x, y, title) {
    context.lineWidth = "10";
    context.strokeStyle = Utils.hsl(y / 5, 100, 20);
    context.beginPath();
    context.moveTo(x + 400, y);
    context.lineTo(x, y);
    context.moveTo(x, y + 100);
    context.lineTo(x + 400, y + 100);
    context.stroke();
    context.fillStyle = context.strokeStyle;
    context.beginPath();
    context.ellipse(x, y + 50, 30, 55, 0, Math.PI / 2, Math.PI * 2 * 3 / 4);
    context.fill();

    for (let i = 0; i < 9; i++) {
        if (i % 2 == 0) {
            context.strokeStyle = "darkgray";
        } else {
            context.strokeStyle = "lightgray";
        }
        context.beginPath();
        context.moveTo(x, y + 10 + i * 10);
        context.lineTo(x + 400, y + 10 + i * 10);
        context.stroke();
    }

    context.font = "bold 32pt Arial";
    context.textAlign = "left";
    context.fillStyle = "black";
    context.fillText(title, x + 10, y + 65);
}