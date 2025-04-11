let carrito = [];

document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const producto = {
            nombre: e.target.getAttribute('data-name'),
            precio: e.target.getAttribute('data-price')
        };
        carrito.push(producto);
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    const carritoCount = document.getElementById('carrito-count');
    carritoCount.innerText = carrito.length;
    actualizarCarritoHTML();
}

function actualizarCarritoHTML() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '';
    carrito.forEach((producto) => {
        carritoItems.innerHTML += `
            <p>${producto.nombre} - $${producto.precio}</p>
        `;
    });
}
