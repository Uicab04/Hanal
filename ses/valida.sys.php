<?php
require ("clases/ConexionPDO.php");

$db = new ConexionPDO();

$nombre_sesion = "chunhufood_Admin";

// Revisar si la info vienne del formulario
if (isset($_POST['user']) && isset($_POST['pass'])){

	if($_POST['user']==''){
		setcookie("err", "1", time() + (60),"/");
        Header ("Location: ../admin/index.php");
        exit;
	}
	if($_POST['pass']==''){
		setcookie("err", "2", time() + (60),"/");
        Header ("Location: ../admin/index.php");
        exit;
	}

	// revisar si los datos del usuario existen en la base de datos.
	$usuario_consulta = $db->prepare("SELECT id, usuario, password 
                                        FROM administrador_password 
                                        WHERE usuario=:usuario 
                                        AND password=:pass LIMIT 1");

    $usuario_consulta->bindParam(':usuario', $_POST['user'], PDO::PARAM_STR);
    $usuario_consulta->bindParam(':pass', hash("sha256", $_POST['pass']), PDO::PARAM_STR);

    $usuario_consulta->execute();

	if(!$usuario_consulta){
		setcookie("err", "3", time() + (60),"/");
        Header ("Location: ../admin/index.php");
		exit;
	}

    if($usuario_consulta->rowCount() != 0){

        $login = stripslashes($_POST['user']);
        $password = hash("sha256", $_POST['pass']);

        $usuario_datos = $usuario_consulta->fetch();

        if ($login != $usuario_datos['usuario']) {
            setcookie("err", "4", time() + (60),"/");
            Header ("Location: ../admin/index.php");
            exit;
        }

        if ($password != $usuario_datos['password']) {
            setcookie("err", "5", time() + (60),"/");
            Header ("Location: ../admin/index.php");
            exit;
        }
	
        unset($login);
        unset ($password);

        // le damos un mobre a la sesion.
        session_name($nombre_sesion);
        // incia sessiones
        session_start();

        session_cache_limiter('nocache,private');
    
        $_SESSION['usuario_login'] = $usuario_datos['usuario'];
        $_SESSION['usuario_password'] = $usuario_datos['password'];
        $_SESSION['checar'] = "bienvenido...";
        $_SESSION['expire'] = time()+(12*60);
        $_SESSION['ruta'] = "";

        $pag = $_SERVER['PHP_SELF'];
        Header ("Location: $pag?");
        exit;
    
    } else {
        setcookie("err", "6", time() + (60),"/");
        Header ("Location: ../admin/index.php");
        exit;
    }
} else {
    session_name($nombre_sesion);
    session_start();

	if (!isset($_SESSION['usuario_login']) && !isset($_SESSION['usuario_password'])){
		// Borrar la sesion anterior
		session_destroy();
		setcookie("err", "7", time() + (60),"/");
        Header ("Location: ../admin/index.php");
        exit;
	}
}

?>
