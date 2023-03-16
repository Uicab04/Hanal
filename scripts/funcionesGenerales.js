const ajaxPost = (urlDestino, divDestino, send) => {
    mostrar(divDestino);
    ocultar(['infoErrorConexion']);
    //$("div#" + divDestino).html("<div class='preloader'></div>");
    $.ajax({
        url: urlDestino,
        data: send,
        type: 'POST',
        cache: true,
        datatype: "json",
        success: function(respuesta) {
            $("#" + divDestino).fadeOut(200, function() {
                $(this)
                    .html(respuesta)
                    .fadeIn(100);
            });
        },
        error: function(jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText + '\n' + jqXHR.status;
            }

            mostrar('infoErrorConexion');
            $("#" + divDestino).fadeOut(300, function() {
                $(this)
                    .html('<h4><span class="iconp iconp-fa-frown-o"></span>' + msg + '</h4>')
                    .fadeIn(200);
            });
        }
    });
}

const jQueryAjax = (urlDestino, divDestino, send, spinner = true) => {
    mostrar(divDestino);
    if (spinner) {
        $("div#" + divDestino).html("<div class='preloader'></div>");
    }
    $.ajax({
        url: urlDestino,
        data: send,
        type: 'POST',
        cache: true,
        success: function(respuesta) {
            $("#" + divDestino).fadeOut(300, function() {
                $(this)
                    .html(respuesta)
                    .fadeIn(200);
            });
        },
        error: function() {
            error("Ocurrio un error al procesar la petición, vuelva a intentarlo");
        }
    });
    /*
	.done( function( data ) {
        ok("La peticion ha terminado");
    } );*/
}

const jQueryAjaxCrop = (urlDestino, divDestino, send) => {
    mostrar(divDestino);
    document.getElementById('prueba').scrollIntoView(true);
    $("div#" + divDestino).html("<div class='preloader'></div>");
    $.ajax({
        url: urlDestino,
        data: send,
        type: 'POST',
        cache: true,
        success: function(respuesta) {
            $("#" + divDestino).fadeOut(1000, function() {
                $(this)
                    .html(respuesta)
                    .slideDown(1000);
            });
            /*
            $('#cropbox').Jcrop({
                aspectRatio: 1,
                onSelect: updateCoords
            });*/

        },
        error: function() {
            error("Ocurrio un error al procesaro la petición, vuelva a intentarlo");
        }
    });
}

const ajaxPostControl = (urlDestino, divDestino, send, ejecutar = '', spinner = false, moveView = true) => {
    mostrar(divDestino);
    ocultar(['infoErrorConexion']);
    if (moveView) {
        document.getElementById('prueba').scrollIntoView(true);
    }
    if (spinner) {
        $("div#" + divDestino).html("<div class='preloader'></div>");
    }
    $.ajax({
            url: urlDestino,
            data: send,
            type: 'POST',
            cache: true,
            datatype: "json",
            success: function(respuesta) {
                $("#" + divDestino).fadeOut(200, function() {
                    $(this)
                        .html(respuesta)
                        .fadeIn(200);
                });
            },
            error: function(jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText + '\n' + jqXHR.status;
                }

                mostrar('infoErrorConexion');
                $("#" + divDestino).fadeOut(300, function() {
                    $(this)
                        .html('<h4><span class="iconp iconp-fa-frown-o"></span>' + msg + '</h4>')
                        .fadeIn(200);
                });
            }
        })
        .done(function(data) {

            var content = JSON.parse(JSON.stringify(data));

            if (content.success == true) {
                if (content.mensaje.length > 0) {
                    ok(content.mensaje);
                }
                if (ejecutar.length > 0) {
                    setTimeout(ejecutar, 1);
                }
            }
            if (content.success == false) {

                if (content.mensaje.length > 0) {
                    error(content.mensaje);
                }
                if (content.ejecutar == true && ejecutar.length > 0) {
                    setTimeout(ejecutar, 1);
                }
                console.log(content.regresar);
                if (content.regresar == true) {
                    registrarParte(content.registrando);
                } else {
                    document.getElementById('boton1').className = 'iconp iconp-fa-floppy-o';
                }
            }
        });
}

const ajaxPostMaps = (urlDestino, divDestino, send, ejecutar) => {
    mostrar(divDestino);
    ocultar(['infoErrorConexion']);
    document.getElementById('espacio').scrollIntoView(true);
    $("div#" + divDestino).html("<div class='preloader'></div>");
    $.ajax({
            url: urlDestino,
            data: send,
            type: 'POST',
            cache: true,
            datatype: "json",
            success: function(respuesta) {
                $("#" + divDestino).fadeOut(300, function() {
                    $(this)
                        .html(respuesta)
                        .fadeIn(200);
                });
            },
            error: function(jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }

                mostrar('infoErrorConexion');
                $("#" + divDestino).fadeOut(300, function() {
                    $(this)
                        .html('<h4><span class="iconp iconp-fa-frown-o"></span>' + msg + '</h4>')
                        .fadeIn(200);
                });
            }
        })
        // .done(function(data) {
        //     var content = JSON.parse(JSON.stringify(data));
        //     setTimeout(initMap(content), 1);
        // });
        .done(function(data) {
            var content = JSON.parse(JSON.stringify(data));
            // setTimeout(initMap(content), 1);
            if (content.success == true) {
                setTimeout(initMap(content), 1);
            }
            if (content.success == false) {
                if (content.mensaje.length > 0) {
                    error(content.mensaje);
                }
            }
        });
}

const confirmThen = (ejecutar, then) => {
    Swal.fire({
        title: then.msg1,
        text: then.msg2,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#235e71',
        cancelButtonColor: '#235e71',
        confirmButtonText: '<span class="iconp-fa-thumbs-o-up"></span> ' + then.msg3,
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<span class="iconp iconp-fa-times"></span> Cancelar',
        cancelButtonAriaLabel: 'Thumbs down'

    }).then((result) => {
        if (result.isConfirmed) {
            setTimeout(ejecutar, 1);
        }
    })
}

const ocultar2 = id => {
    let x = $("#" + id);
    x.fadeOut(700);
}

const mostrar2 = id => {
    let x = $("#" + id);
    x.fadeIn(1000);
}

const ocultar3 = id => {
    let x = $("#" + id);
    x.fadeOut(300);
}

const mostrar3 = id => {
    let x = $("#" + id);
    x.fadeIn(500);
}

const error = msg => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }

    })

    Toast.fire({
        icon: 'warning',
        title: msg
    })
}

function mensajeOk(mensaje) {
    ok(mensaje);
}

function mensajeError(mensaje) {
    error(mensaje);
}

const ok = msg => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }

    })

    Toast.fire({
        icon: 'success',
        title: msg
    })
}

const validarEmail = valor => {
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor)) {
        return true;
    } else {
        return false;
    }
}

const limpiarCampo = (tipo, campo) => {
    let estatus = valor('status' + tipo);

    if (estatus === '0') {
        document.getElementById('c' + tipo).className = 'iconp-fa-share-square-o sizeAdd';
        document.getElementById('status' + tipo).value = 1;
        inicializar(campo);
        foco(campo);
    }
    if (estatus === '1') {
        document.getElementById('c' + tipo).className = 'iconp-fa-pencil-square-o sizeAdd';
        document.getElementById('status' + tipo).value = 0;
        document.getElementById(campo).value = valor('cambio' + tipo);
    }
}

const validarSoloTexto = cadena => {
    let patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
    //En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/
    if (!cadena.search(patron))
        return true;
    else
        return false;
}

const validarSoloNumeros = cadena => {
    if (isNaN(cadena)) {
        return false;
    } else {
        return true;
    }
}

const detectarDispositivo = () => {
    let dispositivo = 0;
    if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        dispositivo = 1;
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        dispositivo = 2;
    }
    return dispositivo;
}

function checkCoords() {
    if (parseInt($('#w').val())) return true;
    alert('Please select a crop region then press submit.');
    return false;
};

function updateCoords(c) {
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
};

const path = file => { return "ulpsystem/files/" + file; }

const pathPhp = file => { return "ulpsystem/filesP/" + file; }

const valor = id => { return document.getElementById(id).value; }

// const ocultar = id => document.getElementById(id).style.display = "none";

const ocultar = elementos => {
    elementos.forEach(elemento => {
        document.getElementById(elemento).style.display = "none";
    });
}

const mostrar = id => document.getElementById(id).style.display = "block";

const foco = id => document.getElementById(id).focus();

const blur = id => document.getElementById(id).blur();

const inicializar = id => { return document.getElementById(id).value = ''; }

// const trim = str => { return str.replace(/^\s+|\s+$/g, ""); }

// const encero = id => document.getElementById(id).value = 0;

const encero = elementos => {
    elementos.forEach(elemento => {
        document.getElementById(elemento).value = 0;
    });
}

const enuno = id => document.getElementById(id).value = 1;

const noguardado = (tipo, num = 0) => {
    document.getElementById("singuardar").value = tipo;
    document.getElementById("singuardarnum").value = num;
}

// const reemplazarCaracteres = cadena => { return cadena.replace(/&/g, "%26"); }

const cargarInicio = () => location.reload();

const actividad = num => document.getElementById("actividad").value = num;

const limiteTexto = (limite, actual) => {
    let porcentaje = (actual * 100) / limite;
    document.querySelector('.ck-content').style.backgroundColor = '#ffffff';

    if (porcentaje < 80.5) {
        document.getElementById('contador').className = 'limiteTextoSuccess';
    }
    if (porcentaje > 80.5 && porcentaje <= 100) {
        document.getElementById('contador').className = 'limiteTextoWarning';
    }
    if (porcentaje > 100) {
        document.getElementById('contador').className = 'limiteTextoDanger';
        document.querySelector('.ck-content').style.backgroundColor = '#fff0f0';
    }
    if (porcentaje > 105) {
        error('Se alcanzó el limite del texto');
    }
}

const editorchange = (actuales, tipo, num) => {
    let valorActual = valor('editorchange');
    if (valorActual == 0) {
        document.getElementById('editorvalue1').value = actuales;
        document.getElementById('editorchange').value = 1;
    }
    if (valorActual == 1) {
        noguardado(tipo, num);
    }
    document.getElementById('editorvalue2').value = actuales;
}


// function ajaxPostControl2(urlDestino, divDestino, send, mensaje, ejecutar) {
//     mostrar(divDestino);
//     ocultar('infoErrorConexion');
//     $("div#" + divDestino).html("<div class='preloader'></div>");
//     $.ajax({
//             url: urlDestino,
//             data: send,
//             type: 'POST',
//             cache: true,
//             success: function(respuesta) {
//                 $("#" + divDestino).fadeOut(300, function() {
//                     $(this)
//                         .html(respuesta)
//                         .fadeIn(200);
//                 });
//             },
//             error: function() {
//                 error("Ocurrio un error al procesar la petición, vuelva a intentarlo");
//                 mostrar('infoErrorConexion');
//                 $("#" + divDestino).fadeOut(300, function() {
//                     $(this)
//                         .html('<h4><span class="iconp iconp-fa-frown-o"></span>Revisa tu conexión a internet</h4>')
//                         .fadeIn(200);
//                 });
//             }
//         })
//         .done(function(data) {
//             if (mensaje.length > 0) {
//                 ok(mensaje);
//             }
//             if (ejecutar.length > 0) {
//                 setTimeout(ejecutar, 1);
//             }
//         });
// }

// function ajaxPost2(url, destino, send) {
//     savp = new creaXMLHttpRequest();
//     dest = document.getElementById(destino);
//     dest.innerHTML = "<div class='preloader'></div>";
//     mostrar(destino);
//     savp.open("POST", url);
//     savp.onreadystatechange = function() {
//         if (savp.readyState == 4) {
//             dest.innerHTML = savp.responseText;
//         }
//     }
//     savp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     savp.send(send);
// }

// function ajaxPostNoGif(url, destino, send) {
//     savp = new creaXMLHttpRequest();
//     dest = document.getElementById(destino);
//     dest.innerHTML = "<div align='center' width='100%'><img src='ulpsystem/images/ajax-loader.gif'/></div>";
//     mostrar(destino);
//     savp.open("POST", url);
//     savp.onreadystatechange = function() {
//         if (savp.readyState == 4) {
//             dest.innerHTML = savp.responseText;
//         }
//     }
//     savp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     savp.send(send);
// }


// function ajaxPostPDF(url, destino, send, nombre) {
//     savp = new creaXMLHttpRequest();
//     dest = document.getElementById(destino);
//     dest.innerHTML = "<div align='center' width='100%'><img src='systemfiles/images/ajax-loader.gif' class='icon' /></div>";
//     mostrar(destino);
//     savp.open("POST", url);
//     savp.onreadystatechange = function() {
//         if (savp.readyState == 4) {
//             dest.innerHTML = savp.responseText;
//             if (savp.status == 200) {
//                 verPDF_HTML(nombre);
//             }
//         }
//     }
//     savp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     savp.send(send);
// }

// function ajaxPostPDF(url, destino, send, nombre) {
//     savp = new creaXMLHttpRequest();
//     dest = document.getElementById(destino);
//     dest.innerHTML = "<div align='center' width='100%'><img src='ulpsystem/images/ajax-loader.gif' class='icon' /></div>";
//     mostrar(destino);
//     savp.open("POST", url);
//     savp.onreadystatechange = function() {
//         if (savp.readyState == 4) {
//             dest.innerHTML = savp.responseText;
//             if (savp.status == 200) {
//                 verPDF_HTML(nombre);
//             }
//         }
//     }
//     savp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     savp.send(send);
// }

// function vista(vista) {
//     document.getElementById(vista).scrollIntoView(true);
// }

// function showmediv(mostrar, ocultar) {
//     document.getElementById(mostrar).style.display = "block";
//     document.getElementById(ocultar).style.display = "none";
// }

// function activar(id) { return document.getElementById(id).disabled = false; }

// function desactivar(id) { return document.getElementById(id).disabled = true; }

// function quitarContenido(id) { document.getElementById(id).innerHTML = ''; }

// function MarcarTodos() {
//     var etiquetas = document.getElementsByTagName("input");
//     var estado = document.getElementById("all").checked;
//     for (i = 0; i < etiquetas.length; i++) {
//         if (etiquetas[i].type == "checkbox" && etiquetas[i].name != "all" && etiquetas[i].disabled == false) {
//             etiquetas[i].checked = estado;
//         }
//     }
// }

// function validarNumero(valor, id, tag) {
//     if (isNaN(valor)) {
//         error("Escriba solamente números");
//         document.getElementById(tag + id).value = "";
//     }
// }

// function consultando(tipo) {
//     document.getElementById("consultando").value = tipo;
// }

// function nombreDia(numDia) {
//     if (numDia == 1) { return "lunes"; }
//     if (numDia == 2) { return "martes"; }
//     if (numDia == 3) { return "miercoles"; }
//     if (numDia == 4) { return "jueves"; }
//     if (numDia == 5) { return "viernes"; }
//     if (numDia == 6) { return "sabado"; }
//     if (numDia == 7) { return "domingo"; }
// }