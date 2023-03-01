var botonesCompra = document.querySelectorAll('.boton-compra');

botonesCompra.forEach(function(boton) {
	boton.addEventListener('click', function() {
		this.classList.add('agregado');
		this.innerHTML = 'Agregado al carrito';
	});
});