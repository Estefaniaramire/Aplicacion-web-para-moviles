<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "base";
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$query = "SELECT * FROM Categoria";
$resultado = $conn->query($query);

$categorias = array();
while ($fila = $resultado->fetch_assoc()) {
    $categorias[] = $fila;
}

echo json_encode($categorias);

$conn->close();
?>
