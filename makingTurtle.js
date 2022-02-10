/**
* Title: making Turtle
* Author: Taison Shea
* Date: 08/02/2022
* Version: 1
* Purpose: its a turtle
*
**/

console.log("This is making turtle")

window.onload=startCanvas // starts the canvas


function startCanvas(){
	var ctx
	ctx=document.getElementById("myCanvas").getContext("2d")
	
	ctx.fillStyle = "darkgreen"; //set the color to dark green
	ctx.fillRect(300, 0, 200, 100); // first layer head
	ctx.fillRect(200, 100, 400, 100); // second layer head
	ctx.fillRect(100, 200, 100, 100); // third layer head
	ctx.fillRect(300, 200, 100, 100); // third layer head
	ctx.fillRect(500, 200, 200, 100); // third layer head
	ctx.fillStyle = "black"; //set the color to dark green
	ctx.fillRect(200, 200, 100, 100); // left eye
	ctx.fillRect(400, 200, 100, 100); // right eye
	ctx.fillStyle = "darkgreen"; //set the color to dark green
	ctx.fillRect(0, 300, 800, 100); // fourth layer head
	ctx.fillRect(100, 400, 100, 100);
}