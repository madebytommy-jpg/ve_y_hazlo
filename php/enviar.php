<?php  

// Llamando a los campos
$meta = $_POST['meta'];
$fecha = $_POST['fecha'];
$valor = $_POST['valor']
$nombre = $_POST['nombre'];
$nombre_amigo = $_POST['nombre_amigo'];
$correo = $_POST['correo'];
$correo_amigo = $_POST['correo_amigo'];
$celular = $_POST['celular'];
$celular_amigo = $_POST['celular_amigo'];



// Datos para el correo
$destinatario = "participantes@veyhazlo.com";
$asunto = "reto de año nuevo";
$cabeceras = 'From: participantes@veyhazlo.com' . "\r\n" .
'Reply-To: participantes@veyhazlo.com' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

$carta = "Mi meta es: $meta \n";
$carta .= "para la feha de: $fecha \n";
$carta .= "pongo el valor de: $valor \n";
$carta .= "mi nombre es: $nombre \n";
$carta .= "el nombre de mi amigo: $nombre_amigo \n";
$carta .= "mi correo es: $correo \n";
$carta .= "el correo de mi amigo es: $correo_amigo \n";
$carta .= "mi celular es: $celular \n";
$carta .= "el celular de mi amigo es: $celular_amigo\n";

// Enviando Mensaje
mail($destinatario, $asunto, $carta, $cabeceras);
header('Location:index.html');

?>