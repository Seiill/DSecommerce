<?php

include 'conexion.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$tel = $data['tel'];
$email = $data['email'];
$message = $data['message'];

$query = "INSERT INTO contacto (nombre, email, telefono, mensaje) VALUES (:name, :tel, :email, :message)";

$stmt = $pdo->prepare($query);

$stmt->execute(['name' => $name, 'email' => $email, 'tel' => $tel, 'message' => $message]);

$response = [
  'status' => 'success',
  'message' => 'Datos recibidos correctamente'
];


echo json_encode($response);
?>
