var canvas = document.getElementById("Canvas_html");
var papel = canvas.getContext("2d");
var color = prompt("Ingrese el Color de sus líneas");
document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown",presionarMouse);
document.addEventListener("mousemove",dibujarMouse);
document.addEventListener("mouseup",soltarMouse);
dibujarLinea("grey",1,1,canvas.width-1,1,papel);
dibujarLinea("grey",1,1,1,canvas.height+1,papel);
dibujarLinea("grey",canvas.width-1,1,canvas.width-1,canvas.height-1,papel);
dibujarLinea("grey",1,canvas.height-1,canvas.width-1,canvas.height-1,papel);

var teclas = {UP:38, DOWN: 40, LEFT: 37, RIGTH:39};
var x = parseInt(canvas.width/2);
var y = parseInt(canvas.height/2);
var estadoMouse;

function presionarMouse(evento)
{
    estadoMouse = 1
    ximouse = evento.layerX
    yimouse = evento.layerY;
}

function dibujarMouse(evento)
{
  if(estadoMouse == 1)
  {
    var movimiento = 5;  
    dibujarLinea(color,ximouse,yimouse,evento.layerX,evento.layerY,papel);
  }
  ximouse = evento.layerX;
  yimouse = evento.layerY;
}

function soltarMouse(evento)
{
   estadoMouse = 2;
    if(estadoMouse == 2)
    {
        xi = evento.layerX;
        yi = evento.layerY;
    }
}

function dibujarTeclado(evento)
{
    console.log("Tecla Oprimida");
    console.log (evento);
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(color, x,y,x,y-movimiento,papel);
            y=y-movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(color,x,y,x,y+movimiento,papel);
            y=y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(color,x,y,x-movimiento,y,papel);
            x=x-movimiento;
        break;
        case teclas.RIGTH:
            dibujarLinea(color,x,y,x+movimiento,y,papel);
            x=x+movimiento;
        break;
    }
        
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}