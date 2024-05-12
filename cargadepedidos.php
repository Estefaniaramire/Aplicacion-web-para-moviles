<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "base";
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$query = "SELECT * FROM Pedido";
$resultado = $conn->query($query);

$pedidos = array();
while ($fila = $resultado->fetch_assoc()) {
    $pedidos[] = $fila;
}

echo json_encode($pedidos);

$conn->close();
?>
