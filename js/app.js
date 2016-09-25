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
	var info = document.getElementById("info");
	var tresD = document.getElementById("tresD");
	var imagenTresD = document.getElementById("imagenTresD");
	var descarga = document.getElementById("descarga");

	sol.addEventListener("dblclick", function() {
		sun.setAttribute("src", "img/Sun.gif");
		swal("Hola, soy el Sol!","La estrella más cercana a la Tierra y el mayor elemento del Sistema Solar.");
	});

	luna.addEventListener("dblclick", function() {
		moon.setAttribute("src", "img/La-luna.gif");
		swal("Hola, soy La Luna!","El único satélite natural de la Tierra y el único cuerpo del Sistema Solar que podemos ver en detalle.");
	});

	mercurio.addEventListener("dblclick", function() {
		mercury.setAttribute("src", "img/mercury.gif");
		swal("Hola, soy Mercurio!", "El planeta más cercano al Sol y el más pequeño del Sistema Solar. Soy menor que la Tierra, pero más grande que la Luna.");
	});

	venus.addEventListener("dblclick", function() {
		venusG.setAttribute("src", "img/Venus.gif");
		swal("Hola, soy Venus!","El segundo planeta del Sistema Solar y el más semejante a La Tierra por su tamaño, masa, densidad y volumen.");
	});

	tierra.addEventListener("dblclick", function() {
		earth.setAttribute("src", "img/earth.gif");
		swal("Hola, soy La Tierra!", "El único planeta habitado. Estoy situado en la ecosfera, un espacio que rodea al Sol y que tiene las condiciones adecuadas para que exista vida.");
	});

	marte.addEventListener("dblclick", function() {
		mars.setAttribute("src", "img/mars.gif");
		swal("Hola, Marte!"," El cuarto planeta del Sistema Solar. Conocido como el planeta rojo por sus tonos rosados.");
	});

	jupiter.addEventListener("dblclick", function() {
		jupiterG.setAttribute("src", "img/jupiter.gif");
		swal("Hola, soy Jupiter!","Soy el planeta más grande del Sistema Solar, tengo casi dos veces y media materia que todos los otros planetas juntos y mi volumen es mil veces el de la Tierra.");
	});

	saturno.addEventListener("dblclick", function() {
		saturn.setAttribute("src", "img/saturn.gif");
		swal("Hola, soy Saturno!","El segundo planeta más grande del Sistema Solar y el único con anillos visibles desde la Tierra.");
	});

	urano.addEventListener("dblclick", function() {
		uranus.setAttribute("src", "img/Uranus.gif");
		swal("Hola, soy Urano!", "El séptimo planeta desde el Sol, el tercero más grande y el cuarto con más masa del Sistema Solar. Me descubrieron gracias al telescopio, en 1781.");
	});

	neptuno.addEventListener("dblclick", function() {
		neptune.setAttribute("src", "img/neptune.gif");
		swal("Hola, soy Neptuno!","Soy el planeta más exterior de los gigantes gaseosos. Fui descubierto en septiembre de 1846, gracias a predicciones matemáticas.");
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

	info.addEventListener("dblclick", function(){
		swal("Hola!","Sistema Solar Site fue desarrollado para fomentar el aprendizaje en las escuelas y puede ser implementado en la currícula de aprendizaje de niños de entre 6 a 12 años.");
	})

	descarga.addEventListener("dblclick", function(){
		swal("Descarga la app gratis!","Sistema Solar Site es una app gratuita. ¿Qué esperas para implementarla en tu escuela?.");

	})

	tresD.addEventListener("dblclick", function() {
		imagenTresD.classList.remove("display");
		imagenTresD.classList.add("fondo2");
	});

	tresD.addEventListener("click", function() {
		imagenTresD.classList.remove("fondo2");
		imagenTresD.classList.add("display");
	});
});