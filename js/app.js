window.setTimeout(function(){ document.getElementById("principal").classList.remove("display") }, 3000);
window.setTimeout(function(){ document.getElementById("carga").classList.add("display") }, 3000);

window.addEventListener("load", function(){

	var sol = document.getElementById("solA");
	var sun = document.getElementById("sun");
	var luna = document.getElementById("lunaA");
	var moon = document.getElementById("moon");
	var mercurio = document.getElementById("mercurioA");
	var mercury = document.getElementById("mercury");
	var venus = document.getElementById("venusA");
	var venusG = document.getElementById("venus");
	var tierra = document.getElementById("tierraA");
	var earth = document.getElementById("tierra");
	var marte = document.getElementById("marteA");
	var mars = document.getElementById("mars");
	var jupiter = document.getElementById("jupiterA");
	var jupiterG = document.getElementById("jupiter");
	var saturno = document.getElementById("saturnoA");
	var saturn = document.getElementById("saturn");
	var urano = document.getElementById("uranoA");
	var uranus = document.getElementById("uranus");
	var neptuno = document.getElementById("neptunoA");
	var neptune = document.getElementById("neptune");
	var principal = document.getElementById("principal");
	var boton = document.getElementById("boton");
	// var drag = document.getElementById("drag");
	var resultado = document.getElementById("resultado");
	var drop = document.getElementById("drop");
	var array = ["*Distancia a la Tierra: 149.6 millones km", "*Distancia a la Tierra: 384,400 km", "*Distancia al Sol: 57.91 millones km",
	"*Distancia al Sol: 108.2 millones km", "*Distancia al Sol: 149.6 millones km", "*Distancia al Sol: 227.9 millones km",
	"*Distancia al Sol: 778 millones de km", "*Distancia al Sol: 1.429 millones de km", "*Distancia al Sol: 2.870 millones de km",
	"*Distancia al Sol: 4.501 millones de km"];
	// var contador = 1;

	sol.addEventListener("dblclick", function() {
		sun.setAttribute("src", "img/Sun.gif");
	});

	luna.addEventListener("dblclick", function() {
		moon.setAttribute("src", "img/La-luna.gif");
	});

	mercurio.addEventListener("dblclick", function() {
		mercury.setAttribute("src", "img/mercury.gif");
	});

	venus.addEventListener("dblclick", function() {
		venusG.setAttribute("src", "img/Venus.gif");
	});

	tierra.addEventListener("dblclick", function() {
		earth.setAttribute("src", "img/earth.gif");
	});

	marte.addEventListener("dblclick", function() {
		mars.setAttribute("src", "img/mars.gif");
	});

	jupiter.addEventListener("dblclick", function() {
		jupiterG.setAttribute("src", "img/jupiter.gif");
	});

	saturno.addEventListener("dblclick", function() {
		saturn.setAttribute("src", "img/saturn.gif");
	});

	urano.addEventListener("dblclick", function() {
		uranus.setAttribute("src", "img/Uranus.gif");
	});

	neptuno.addEventListener("dblclick", function() {
		neptune.setAttribute("src", "img/neptune.gif");
	});	
});