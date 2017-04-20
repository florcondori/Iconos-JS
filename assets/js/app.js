window.addEventListener("load", function(){
	var array = [{icon:"icon-star",h2:"Sigue tu Estrella",h5:"presente",descripcion:"Solo debes mirar atras para ver lo lejos que haz llegado"},
				{icon:"icon-diamond",h2:"¿Conoces Ruby?",h5:"Lenguaje de Programacion",descripcion:"Sus fans lo ven como un lenguaje hermoso y artistico, dicen que es practico y ameno"},
				{icon:"icon-eye",h2:"Mirad la Vida",h5:"Meditar",descripcion:"No todos los ojos cerrados duermen, Ni todos los ojos abiertos ven"},
				{icon:"icon-music",h2:"Lo bueno esta",h5:"Musica",descripcion:"A veces hay que inyectarse un poco de fantasia para no morir de realidad"},
				{icon:"icon-gift",h2:"Lo que recibes",h5:"Dar",descripcion:"Amigos son aquellos que te ven llorando y dicen ¿A QUIEN MATAMOS?"}];
	
	var divContenedor = document.getElementsByClassName("contenedor")[0]; 
	divContenedor.appendChild(insertandoBox(array));
});

function insertandoBox(array){
	var docFragment = document.createDocumentFragment();
	array.forEach(function(obj){
		var divBox = document.createElement("div");
		divBox.classList.add("box");

		var span = document.createElement("span");
		span.classList.add(obj.icon);
		var h2 = document.createElement("h2");
		h2.innerHTML = obj.h2;
		var h5 = document.createElement("h5");
		h5.innerHTML = obj.h5;
		var p = document.createElement("p");
		p.innerHTML = obj.descripcion;

		divBox.appendChild(span);
		divBox.appendChild(h2);
		divBox.appendChild(h5);
		divBox.appendChild(p);

		docFragment.appendChild(divBox);
	});
	return docFragment;
}