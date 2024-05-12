<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "base";
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$query = "SELECT * FROM Producto";
$resultado = $conn->query($query);

$productos = array();
while ($fila = $resultado->fetch_assoc()) {
    $productos[] = $fila;
}

echo json_encode($productos);

$conn->close();
?>
