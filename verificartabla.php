<?php
$host = 'localhost'; 
$db   = 'dulcesorpresa'; 
$user = 'root'; 
$pass = ''; 
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);

$tableName = 'contacto';
$query = "SELECT 1 FROM $tableName LIMIT 1";
$stmt = $pdo->query($query);
if ($stmt !== false) {
    echo "La tabla '$tableName' existe en la base de datos.";
} else {
    echo "La tabla '$tableName' no existe en la base de datos.";
}
?>

