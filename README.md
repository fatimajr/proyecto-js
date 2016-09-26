# SISTEMA SOLAR SITE
### DESCRIPCIÓN
Sistema Solar Site es un proyecto creado con el fin de hacer el proceso educativo más didáctico y llevar el conocimiento a los niños de 
manera más divertida y práctica.

En este proyecto utilizamos eventos de Javascript como:
- Onload
- Onmouseover
```javascript
    sun.addEventListener("mouseover", function() {
		this.setAttribute("src", "img/Sun-0.jpg");
	});
```
- Ondblclick
```javascript
    sol.addEventListener("dblclick", function() {
		sun.setAttribute("src", "img/Sun.gif");
		infoSol.classList.remove("display");
		infoSol.classList.add("position");
		infoSol.classList.add("positionSol");
	});
```
- Onclick
```javascript
	  sol.addEventListener("click", function() {
		infoSol.classList.add("display");
		infoSol.classList.remove("position");
		infoSol.classList.remove("positionSol");
	});
```

![pagina principal](http://4.1m.yt/Ol9FMiR.png)
