<?php
// require("ses/valida.sys.php");


echo 'Se inicia sesión correctamente';


?>
<?php
include("clases/Conexion.php");
include("files/iniciarSesion.php");
include("clases/Usuario.php");
include("clases/Funciones.php");

$funciones = new Funciones();

if(isset($_COOKIE["cDash"])){

    $hash = $_COOKIE["cDash"];

    $idUsuario = $funciones->obtenerIdUsuario($hash);

    if($idUsuario !=0 ){
        $usuario = new Usuario($idUsuario);
    }
    else{
        Header ("Location: login.html");
        exit;
    }
}
if(isset($_SESSION['usuario_id'])){
    $idUsuario = $_SESSION['usuario_id'];
    $usuario = new Usuario($idUsuario);
}

//2222
// $db = new Conexion();
// $menu = $db->query("SELECT * FROM products");
// $menuInfo = $menu->fetch();

?>






<!doctype html>
<html lang="es">
	<head>
		<title>Chunhufood | Administración</title>
		<meta charset="utf-8" />
		<link rel="shortcut icon" href="../favicon.png" type="image/x-icon" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="description" content="Aqui va una breve descripción de la pagina>
		<meta name="keywords" content="busca, encuentra, anunciate" />
		<meta name="author" content="alcode" />
    <!-- Bootstrap core CSS -->
    <link href="src/busc/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="src/busc/css/offcanvas.css" rel="stylesheet">

    <style>
    .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    }

    @media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
    }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="css/signin.css" rel="stylesheet">
    </head>

<body><!--AQUI VA TODO EL CONTENIDO HTML-->
<br>
<a href="clases/cerrarSesion.php" class="get-started-btn scrollto">Cerrar sección</a>
            <br>
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i class="bx bx-shield"></i>
              <br>
              <h4>Hhhhh</h4>
            </div>
<br>
  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
  <script src="scripts/ajax.js"></script>
  <script src="scripts/validacion.js"></script>
  <script src="alertifyjs/alertify.min.js"></script>

</body>

</html>