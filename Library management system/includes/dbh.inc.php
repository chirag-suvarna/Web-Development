<?php

$dsn = "mysql:host=localhost;dbname=library management system";
$dbusername ="root";
$dbpassword = "";

try{
    $pdo = new PDO("$dsn,$dbusername,$dbpassword");
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connect failed:" . $e->getMessage();

}