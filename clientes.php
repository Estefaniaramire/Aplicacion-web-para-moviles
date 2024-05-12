<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "base";
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$query = "SELECT * FROM Cliente";
$resultado = $conn->query($query);

$clientes = array();
while ($fila = $resultado->fetch_assoc()) {
    $clientes[] = $fila;
}

echo json_encode($clientes);

$conn->close();
?>
