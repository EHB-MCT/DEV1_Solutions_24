"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = keyPressed;

let player1 = {
    x: width / 2 - 100,
    y: height - 50,
    w: 200,
    score: 0
};

let player2 = {
    x: width / 2,
    y: 50,
    w: 200,
    score: 0
};

let framecount = 0;

let balls = [];

let n = width / 50;

setup();
draw();

function setup() {
    for (let i = 0; i < 10; i++) {
        let ball = {
            x: Utils.randomNumber(20, width - 20),
            y: height / 2,
            size: 10,
            xSpeed: Utils.randomNumber(1, 5) * Math.round(Math.random()) * 2 - 1,
            ySpeed: Utils.randomNumber(1, 5) * Math.round(Math.random()) * 2 - 1
        };
        balls.push(ball);
    }
}

function draw() {
    framecount++;
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "white";
    context.fillRect(player1.x, player1.y, player1.w, 25);
    context.fillRect(player2.x, player2.y, player2.w, 25);

    for (let i = 0; i < n; i++) {
        context.fillRect(i * 100, height / 2 + 12, 50, 25);
    }

    if (player2.w / 2 < width && player2.w / 2 > 0) {
        player2.x = Noise.perlinNoise(framecount / 100) * width;
    }

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;

        if (ball.x >= player1.x && ball.x <= player1.x + player1.w) {
            if (ball.y + ball.size >= player1.y) {
                ball.ySpeed *= -1;
            }
        }

        if (ball.x >= player2.x && ball.x <= player2.x + player2.w) {
            if (ball.y - ball.size <= player2.y + 25) {
                ball.ySpeed *= -1;
            }
        }

        if (ball.x + ball.size >= width || ball.x - ball.size <= 0) {
            ball.xSpeed *= -1;
        }

        if (ball.y > height) {
            player2.score++;
            resetBall(i);
        }
        if (ball.y < 0) {
            player1.score++;
            resetBall(i);
        }

        Utils.fillCircle(ball.x, ball.y, ball.size);
    }

    context.font = "bold 100px Arial";
    context.fillText(player2.score, 50, height / 2 - 100);
    context.fillText(player1.score, 50, height / 2 + 200);

    requestAnimationFrame(draw);
}

function resetBall(i) {
    balls[i].x = Utils.randomNumber(20, width - 20);
    balls[i].y = height / 2;
    balls[i].xSpeed = Utils.randomNumber(1, 5) * Math.round(Math.random()) * 2 - 1;
    balls[i].ySpeed = Utils.randomNumber(1, 5) * Math.round(Math.random()) * 2 - 1;
}
/**
 * 
 * @param {KeyboardEvent} e 
 */
function keyPressed(e) {
    if (e.pageX + player1.w / 2 < width && e.pageX - player1.w / 2 > 0) {
        player1.x = e.pageX - player1.w / 2;
    }
}