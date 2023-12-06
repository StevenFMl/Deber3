<?php
include_once('operaciones.php');

$operaciones =new Operaciones_Arimeticas;

// echo "<h1>" . $operaciones->suma(2,3) . "</h1>";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label for="num1">Suma</label>
    <input type="text" name="num1" id="num1" value="<?php echo $operaciones -> suma(5,5); ?>">
    <br>
    <label for="num1">Resta</label>
    <input type="text" name="num1" id="num1" value="<?php echo $operaciones -> resta(89,80); ?>">
    <br>
    <label for="num1">Multiplicacion</label>
    <input type="text" name="num1" id="num1" value="<?php echo $operaciones -> multiplicacion(5,5); ?>">
    <br>
    <label for="num1">Division</label>
    <input type="text" name="num1" id="num1" value="<?php echo $operaciones -> division(25,5); ?>">
    <br>
</body>
</html>