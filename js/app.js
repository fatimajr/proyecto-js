window.setTimeout(function(){ document.getElementById("principal").classList.remove("display") }, 2000);
window.setTimeout(function(){ document.getElementById("carga").classList.add("display") }, 2000);

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
	var infoSol = document.getElementById("infoSol");
	var infoMercurio = document.getElementById("infoMercurio");
	var infoVenus = document.getElementById("infoVenus");
	var infoLuna = document.getElementById("infoLuna");
	var infoTierra = document.getElementById("infoTierra");
	var infoMarte = document.getElementById("infoMarte");
	var infoJupiter = document.getElementById("infoJupiter");
	var infoSaturno = document.getElementById("infoSaturno");
	var infoUrano = document.getElementById("infoUrano");
	var infoNeptuno = document.getElementById("infoNeptuno");

	sol.addEventListener("dblclick", function() {
		sun.setAttribute("src", "img/Sun.gif");
		infoSol.classList.remove("display");
		infoSol.classList.add("position");
		infoSol.classList.add("positionSol");
	});

	sol.addEventListener("click", function() {
		infoSol.classList.add("display");
		infoSol.classList.remove("position");
		infoSol.classList.remove("positionSol");
	});

	luna.addEventListener("dblclick", function() {
		moon.setAttribute("src", "img/La-luna.gif");
		infoLuna.classList.remove("display");
		infoLuna.classList.add("position");
		infoLuna.classList.add("positionLuna");
	
	});

	luna.addEventListener("click", function() {
		infoLuna.classList.add("display");
		infoLuna.classList.remove("position");
		infoLuna.classList.remove("positionLuna");
	
	});

	mercurio.addEventListener("dblclick", function() {
		mercury.setAttribute("src", "img/mercury.gif");
		infoMercurio.classList.remove("display");
		infoMercurio.classList.add("position");
		infoMercurio.classList.add("positionMercurio");
	});

	mercurio.addEventListener("click", function() {
		infoMercurio.classList.add("display");
		infoMercurio.classList.remove("position");
		infoMercurio.classList.remove("positionMercurio");
	});

	venus.addEventListener("dblclick", function() {
		venusG.setAttribute("src", "img/Venus.gif");
		infoVenus.classList.remove("display");
		infoVenus.classList.add("position");
		infoVenus.classList.add("positionVenus");
	});

	venus.addEventListener("click", function() {
		infoVenus.classList.add("display");
		infoVenus.classList.remove("position");
		infoVenus.classList.remove("positionVenus");
	});

	tierra.addEventListener("dblclick", function() {
		earth.setAttribute("src", "img/earth.gif");
		infoTierra.classList.remove("display");
		infoTierra.classList.add("position");
		infoTierra.classList.add("positionTierra");
	});

	tierra.addEventListener("click", function() {
		infoTierra.classList.add("display");
		infoTierra.classList.remove("position");
		infoTierra.classList.remove("positionTierra");
	});

	marte.addEventListener("dblclick", function() {
		mars.setAttribute("src", "img/mars.gif");
		infoMarte.classList.remove("display");
		infoMarte.classList.add("position");
		infoMarte.classList.add("positionMarte");
		
	});

	marte.addEventListener("click", function() {
		infoMarte.classList.add("display");
		infoMarte.classList.remove("position");
		infoMarte.classList.remove("positionMarte");
	});

	jupiter.addEventListener("dblclick", function() {
		jupiterG.setAttribute("src", "img/jupiter.gif");
		infoJupiter.classList.remove("display");
		infoJupiter.classList.add("position");
		infoJupiter.classList.add("positionJupiter");
	});

	jupiter.addEventListener("click", function() {
		infoJupiter.classList.add("display");
		infoJupiter.classList.remove("position");
		infoJupiter.classList.remove("positionJupiter");
	});

	saturno.addEventListener("dblclick", function() {
		saturn.setAttribute("src", "img/saturn.gif");
		infoSaturno.classList.remove("display");
		infoSaturno.classList.add("position");
		infoSaturno.classList.add("positionSaturno");
	});

	saturno.addEventListener("click", function() {
		infoSaturno.classList.add("display");
		infoSaturno.classList.remove("position");
		infoSaturno.classList.remove("positionSaturno");
	});

	urano.addEventListener("dblclick", function() {
		uranus.setAttribute("src", "img/Uranus.gif");
		infoUrano.classList.remove("display");
		infoUrano.classList.add("position");
		infoUrano.classList.add("positionUrano");
	});

	urano.addEventListener("click", function() {
		infoUrano.classList.add("display");
		infoUrano.classList.remove("position");
		infoUrano.classList.remove("positionUrano");
	});

	neptuno.addEventListener("dblclick", function() {
		neptune.setAttribute("src", "img/neptune.gif");
		infoNeptuno.classList.remove("display");
		infoNeptuno.classList.add("position");
		infoNeptuno.classList.add("positionNeptuno");		
	});	

	neptuno.addEventListener("click", function() {
		infoNeptuno.classList.add("display");
		infoNeptuno.classList.remove("position");
		infoNeptuno.classList.remove("positionNeptuno");
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