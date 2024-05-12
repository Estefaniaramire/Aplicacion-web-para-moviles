document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('categoriasLink').addEventListener('click', function(e){
        e.preventDefault(); 
        cargarCategorias();
    });

    document.getElementById('productosLink').addEventListener('click', function(e){
        e.preventDefault(); 
        cargarProductos();
    });

    document.getElementById('clientesLink').addEventListener('click', function(e){
        e.preventDefault(); 
        cargarClientes();
    });

    document.getElementById('pedidosLink').addEventListener('click', function(e){
        e.preventDefault(); 
        cargarPedidos();
    });
});

function cargarCategorias() {
    ocultarElementos();
    fetch('cargarcategorias.php')
    .then(response => response.json())
    .then(data => {
        const listaCategorias = document.getElementById('listaCategorias');
        listaCategorias.innerHTML = '';
        data.forEach(categoria => {
            const p = document.createElement('p');
            p.textContent = categoria.nombre;
            listaCategorias.appendChild(p);
        });
    })
    .catch(error => console.error("Error al cargar categorías:", error));
}

function cargarProductos() {
    ocultarElementos();
    fetch('cargarproductos.php')
    .then(response => response.json())
    .then(data => {
        const listaProductos = document.getElementById('listaProductos');
        listaProductos.innerHTML = '';
        data.forEach(producto => {
            const p = document.createElement('p');
            p.textContent = producto.nombre;
            listaProductos.appendChild(p);
        });
    })
    .catch(error => console.error("Error al cargar productos:", error));
}

function cargarClientes() {
    ocultarElementos();
    fetch('cargarclientes.php')
    .then(response => response.json())
    .then(data => {
        const listaClientes = document.getElementById('listaClientes');
        listaClientes.innerHTML = '';
        data.forEach(cliente => {
            const p = document.createElement('p');
            p.textContent = cliente.nombre;
            listaClientes.appendChild(p);
        });
    })
    .catch(error => console.error("Error al cargar clientes:", error));
}

function cargarPedidos() {
    ocultarElementos();
    fetch('cargarpedidos.php')
    .then(response => response.json())
    .then(data => {
        const listaPedidos = document.getElementById('listaPedidos');
        listaPedidos.innerHTML = '';
        data.forEach(pedido => {
            const p = document.createElement('p');
            p.textContent = `IdPedido: ${pedido.idPedido}, Cliente: ${pedido.idCliente}, Producto: ${pedido.producto}`;
            listaPedidos.appendChild(p);
        });
    })
    .catch(error => console.error("Error al cargar pedidos:", error));
}

function ocultarElementos() {
    const listaCategorias = document.getElementById('listaCategorias');
    listaCategorias.innerHTML = '';

    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';

    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = '';

    const listaPedidos = document.getElementById('listaPedidos');
    listaPedidos.innerHTML = '';
}
