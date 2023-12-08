<?php
require_once('../Models/cls_motos.model.php');
$motos = new Clase_Motos;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); 
        $datos = $motos->todos(); 
        while ($fila = mysqli_fetch_assoc($datos)) { 
            $todos[] = $fila;
        }
        echo json_encode($todos); 
        break;
    case "uno":
        $ID_Moto = $_POST["ID_Moto"]; 
        $datos = array(); 
        $datos = $motos->uno($ID_Moto); 
        $uno = mysqli_fetch_assoc($datos); 
        echo json_encode($uno); 
        break;
    case 'insertar':
        $Marca = $_POST["Marca"]; 
        $Modelo = $_POST["Modelo"]; 
        $Ano = $_POST["Ano"]; 
        $Color = $_POST["Color"];
        $Precio = $_POST["Precio"];
        $Estado = $_POST["Estado"];
    
        $datos = array(); 
        $datos = $motos->insertar($Marca, $Modelo, $Ano, $Color, $Precio, $Estado); 
        echo json_encode($datos); 
        break;
    case 'actualizar':
        $ID_Moto = $_POST["ID_Moto"];
        $Marca = $_POST["Marca"]; 
        $Modelo = $_POST["Modelo"]; 
        $Ano = $_POST["Ano"]; 
        $Color = $_POST["Color"];
        $Precio = $_POST["Precio"];
        $Estado = $_POST["Estado"];

        $datos = array(); 
        $datos = $motos->actualizar($ID_Moto, $Marca, $Modelo, $Ano, $Color, $Precio, $Estado); 
        echo json_encode($datos); 
        break;
        
        case 'eliminar':
            $ID_Moto = $_POST["ID_Moto"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
            $datos = array(); //defino un arreglo
            $datos = $motos->eliminar($ID_Moto); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
            echo json_encode($datos); //devuelvo el arreglo en formato json
            break;
}