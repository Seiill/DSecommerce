<?php
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

$response = [
  'status' => 'success',
  'message' => 'Datos recibidos correctamente'
];

header('Content-Type: application/json');
echo json_encode($response);
