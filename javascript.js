// JavaScript Document
function formReset()
{
	document.calc.reset();
}

function calcula(operacion)
{
	if ((document.calc.resultado.value == null) || (document.calc.resultado.value == '0') || (document.calc.resultado.value == 'NaN'))
	{
		if ((document.calc.resultado.value == 0)&& (operacion == '.'))
		{
			document.calc.resultado.value = '0.'
		}
		else
		{
			document.calc.resultado.value = operacion
		}
	}
	else
	{
		document.calc.resultado.value += operacion
	}
}

function total()
{
	document.calc.resultado.value = eval (document.calc.resultado.value)
}

function sct(variable)
{
    if(variable == "sen")
    {
        document.calc.resultado.value = Math.sin(document.calc.resultado.value)
    }
    if(variable == "cos")
    {
        document.calc.resultado.value = Math.cos(document.calc.resultado.value)
    }
    if(variable == "tan")
    {
        document.calc.resultado.value = Math.tan(document.calc.resultado.value)
    }
}

function dibujar(){
	
	
	
	document.getElementById('plano').innerHTML='<canvas id="myCanvas" width="300" height="300" style="border:1px solid #d3d3d3;" Your browser does not support the HTML5 canvas tag.</canvas>'; 
	if(document.calc.resultado.value=='sin(X)')
	{
		X=-50;
		y=Math.sin(X)*-1
		var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
		ctx.translate(150,150)
	    ctx.moveTo(X,y);
		for(X=-50; X<50;X++)
                {
		y= eval (Math.sin(X))*-1;
        ctx.lineTo(X,y);
        ctx.stroke();
		}
	}
	else if(document.calc.resultado.value=='tan(X)')
	{
		X=-50;
		y=Math.tan(X)*-1
		var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
		ctx.translate(150,150)
	    ctx.moveTo(X,y);
		for(X=-50; X<50;X++)
                {
		y= eval (Math.tan(X))*-1;
        ctx.lineTo(X,y);
        ctx.stroke();
		}
	}
	else if(document.calc.resultado.value=='cos(X)')
	{
		X=-50;
		y=Math.cos(X)*-1
		var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
		ctx.translate(150,150)
	    ctx.moveTo(X,y);
		for(X=-50; X<50;X++)
                {
		y= eval (Math.cos(X))*-1;
        ctx.lineTo(X,y);
        ctx.stroke();
		}
	}
	else
	{
		X=-50;
		y=eval (document.calc.resultado.value)*-1
		var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
		ctx.translate(150,150)
	    ctx.moveTo(X,y);
		for(X=-50; X<50;X++)
                {
		y=eval (document.calc.resultado.value)*-1
        ctx.lineTo(X,y);
        ctx.stroke();
		
				 }
	}
				 
		 
	}
