<?php
// le damos un mobre a la sesion
$nombre_sesion = "chunhufood_Admin";
session_name($nombre_sesion);
session_start();
session_destroy();
?>
<html>
<head>
<title>Logout</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
</script>
<SCRIPT language=JavaScript>
var imgsbefore = 0 // replace with the number of images in document before the script

function pcgbar(pcg) {
    var totalbe = imgsbefore + 18
    if (pcg < totalbe) {
        document.images[pcg].src = "used.gif"
        newpcg = pcg + 1
        timerID=setTimeout('pcgbar(newpcg);',18);
        }
    else if (pcg == totalbe) {
        self.location = '../index.php'
    }
}

if (document.images) {

//document.write ('<center><b><i>Cerrando...</b></i><br><table border=0 cellspacing=0 cellpadding=2><tr><td>');
document.write ('<center><b><i>Cerrando...</b></i><br>');

for (var i = 0; i < 18; i++) {
var scale = 14  // make this bigger for a larger graph
var width= 1 * scale
    var imgna = new Image()
    imgna.src = "unused.gif"
    document.write ('<img border=0 src="unused.gif" width="' + width + '" height="20">');
}

//document.write ('</td></tr></table></center>');

var startpnt = imgsbefore
pcgbar(imgsbefore);

}
//-->
</SCRIPT>

</body>
</html>
