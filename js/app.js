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
	var tresD = document.getElementById("tresD");
	var imagenTresD = document.getElementById("imagenTresD");

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

	sun.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/Sun-0.jpg");
	});

	moon.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/La-luna-0.jpg");
	});

	mercury.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/mercury-10.jpg");
	});

	venusG.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/Venus-17.jpg");
	});

	earth.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/earth-9.jpg");
	});

	mars.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/mars-42.jpg");
	});

	jupiterG.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/jupiter-0.jpg");
	});

	saturn.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/saturn-0.jpg");
	});

	uranus.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/Uranus-0.jpg");
	});

	neptune.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/neptune-10.jpg");
	});

	tresD.addEventListener("dblclick", function() {
		imagenTresD.classList.remove("display");
		imagenTresD.classList.add("fondo2");
	});

	tresD.addEventListener("click", function() {
		imagenTresD.classList.remove("fondo2");
		imagenTresD.classList.add("display");
	});
});