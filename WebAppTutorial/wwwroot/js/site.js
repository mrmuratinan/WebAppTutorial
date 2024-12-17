// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// JavaScript to animate a bouncing ball
const canvas = document.getElementById('bouncingBallCanvas');
const ctx = canvas.getContext('2d');

let x = 50; // Ball's initial x-position
let y = 50; // Ball's initial y-position
let dx = 2; // Ball's x-speed
let dy = 2; // Ball's y-speed
const ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#6200ea';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawBall();

    // Bounce off the walls
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx; // Reverse horizontal direction
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy; // Reverse vertical direction
    }

    // Update ball position
    x += dx;
    y += dy;

    requestAnimationFrame(draw); // Call draw again
}

// Start the animation
window.onload = function () {
    draw(); 
};
