var mouseEvent="empty";
var lastPositionOfX,lastPositionOfY;
canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
widthLine = 1;
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e){
    color=document.getElementById("color").value;
    widthLine=document.getElementById("widthLine").value;
    radius= document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseMove", myMouseMove);
function myMouseMove(e){
    currentPositionOfMouseX = e.clientX-canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY-canvas.offsetTop;
  if(mouseEvent == "mouseDown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth= widthLine;
     ctx.moveTo(lastPositionOfX, lastPositionOfY);
     ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
     ctx.stroke();
  }
  lastPositionOfX=currentPositionOfMouseX;
  lastPositionOfY=currentPositionOfMouseY;
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp (e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave (e){
    mouseEvent="mouseleave";
}
var lastPositionOfTouchX, lastPositionOfTouchY;
var width=screen.width;
newWidth = screen.width - 70;
newHeigth = screen.heigth-300;

if(width<992){
    document.getElementById("myCanvas").width = newWidht;
document.getElementById("myCanvas").height = newHeight;
document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchStart", myTouchStart);
//completar codigo aqui
 function myTouchStart (e)
{
console.log("myTouchStart");
color= document.getElementById("color").value; 
widthLine = document.getElementById("widthOfLine").value;
lastPositionOfTouchX= e.touches [0].clientX-canvas.offsetLeft; 
lastPositionOfTouchY = e.touches [0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove (e)
{
currentPositionOfTouchX= e.touches[0].clientX -canvas.offsetLeft;
currentPositionOfTouchY= e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = widthOfline;
ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY); 
ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
ctx.stroke();
lastPositionOfTouchX = currentPositionOfTouchX;
lastPositionOfTouchy = currentPositionOfTouchY;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}