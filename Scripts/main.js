var canvas = document.getElementById("bubbleGumCanvas");
var ctx = canvas.getContext("2d");
var cWidth = canvas.width;
var cHeight = canvas.height;
var fps = 12;
var startX = 50;
var startY = 50;
var endX = 200;
var endY = 50;
var duration = 4;
var distanceX = Math.abs(endX - startX);
var distanceY = Math.abs(endY - startY);
var totalFrames = fps * duration;
var velocityX = distanceX / totalFrames / 2;
var velocityY = distanceY / totalFrames / 2;


var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

function drawCircle(x,y){
	ctx.clearRect(0,0,cWidth,cHeight);
	ctx.beginPath();
	ctx.arc(x,y,25,0,2*Math.PI);
	ctx.fillStyle = "#2894a7";
	ctx.fill();
}