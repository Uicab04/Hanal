
// JavaScript Document

const consultandoMenu = nombreTag => {
    let elemento = document.getElementById(nombreTag);
    let cadena = String(elemento);
    let seccion = cadena.split('#');

    let demoClasses = document.querySelectorAll("#" + nombreTag);

    if (nombreTag == seccion[1]) {
        demoClasses.forEach(element => {
            element.href = "#" + nombreTag + "2";
        });
    } else if (nombreTag != seccion[1]) {
        demoClasses.forEach(element => {
            element.href = "#" + nombreTag + "";
        });
    }
    document.getElementById('prueba').scrollIntoView(true);
}

const mostrarMenu = seccion => {
    let numSecciones = 3;
    if (isNaN(seccion)) { seccion = 1; }
    if (seccion > numSecciones) { seccion = 1; }
    let url = "files/inicio/resumenSeccion.php";
    let send = {
        seccion
    };
    let guardado = valor("singuardar");
    if (guardado == 1) {
        let msgThen = {
            msg1: '¿Salir sin guardar cambios?',
            msg2: '',
            msg3: 'Salir'
        }
        let ejecutar = 'mostrarMenuThen(' + seccion + ',' + url + ', ' + numSecciones + ')';
        confirmThen(ejecutar, msgThen);

    } else {
        for (let i = 1; i <= numSecciones; i++) { ocultar(['part' + i]); }
        mostrar('part' + seccion);
        encero(['singuardar']);
        let ejecutar = '';
        ajaxPostControl(url, 'registrando', send, ejecutar, true);
    }
}

const mostrarMenuThen = (seccion, url, numSecciones) => {
    for (let i = 1; i <= numSecciones; i++) { ocultar(['part' + i]); }
    mostrar('part' + seccion);
    encero(['singuardar']);
    let ejecutar = '',
        send = {
            seccion
        };
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const verInicio = () => {
    let url = "files/inicio/resumenSeccion.php";
    let guardado = valor("singuardar");
    if (guardado == 1) {
        let msgThen = {
            msg1: '¿Salir sin guardar cambios?',
            msg2: '',
            msg3: 'Salir'
        }
        let ejecutar = 'verInicioThen(1)';
        confirmThen(ejecutar, msgThen);
    } else {
        encero(["singuardar"]);
        let ejecutar = '',
            send = {
                seccion: 1
            };
        ajaxPostControl(url, 'registrando', send, ejecutar, true);
    }
}

const verStatusPagos = () => {
    let url = 'files/pagos/verStatusPago.php',
        send = '',
        ejecutar = '';
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const detallesEntidadPago = idEstado => {
    let url = "files/pagos/verStatusPago2.php",
        ejecutar = '',
        send = {
            idEstado
        };
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const detallesMunicipioPago = (idEstado, idMunicipio, registrados) => {
    if (registrados > 0) {
        let url = "files/pagos/verStatusPago3.php",
            ejecutar = '',
            send = {
                idMunicipio,
                idEstado
            };
        ajaxPostControl(url, 'registrando', send, ejecutar, true);
    } else {
        error("Este municipio no tiene empresas registradas");
    }
}

const detallesLocalidadPago = (idLocalidad, registrados) => {

    if (registrados > 0) {
        let url = "files/pagos/verStatusPago4.php",
            ejecutar = '',
            send = {
                idLocalidad
            };
        ajaxPostControl(url, 'registrando', send, ejecutar, true);
    } else {
        error("Esta localidad no tiene empresas registradas");
    }
}

const detallesNegociosStatusPago = (status, idLocalidad) => {
    let url = "files/pagos/verStatusPago5.php",
        ejecutar = '',
        send = {
            status,
            idLocalidad
        };
    ajaxPostControl(url, 'detallesPagos', send, ejecutar, true);
}

const verHistorialPagos = (idNegocio, status) => {
    let url = "files/pagos/verStatusPago6.php",
        ejecutar = '',
        send = {
            idNegocio,
            status
        };
    ajaxPostControl(url, 'detallesPagos', send, ejecutar, true);
}

const ubicacionMapa = () => {
    let url = "files/mapas/ubicacionMapa.php",
        ejecutar = '',
        send = '';
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const verMapasAprobados = () => {
    let url = "files/mapas/verMapasAprobados.php",
        ejecutar = '',
        send = '';
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const verMapasAprobados2 = idEstado => {
    let url = "files/mapas/verMapasAprobados2.php",
        ejecutar = '',
        send = {
            idEstado
        }
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const verMapasAprobados3 = (idEstado, idMunicipio) => {
    let url = "files/mapas/verMapasAprobados3.php",
        ejecutar = '',
        send = {
            idEstado,
            idMunicipio
        }
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const verMapasAprobados4 = (idEstado, idMunicipio, idLocalidad) => {
    let url = "files/mapas/verMapasAprobados4.php",
        ejecutar = '',
        send = {
            idEstado,
            idMunicipio,
            idLocalidad
        }
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const registroCoordenadas = (idNegocio, idDireccion, sucursal) => {
    let url = "files/mapas/guardarCoordenadas.php",
        ejecutar = '',
        send = {
            idNegocio,
            idDireccion,
            sucursal
        };
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const guardarCoordenadas = (idNegocio, idDireccion, sucursal) => {
    let latitud = valor("latitud").trim();
    let longitud = valor("longitud").trim();

    if (latitud.length == 0) {
        error("Escriba la latitud");
        foco("latitud");
        return false;
    }
    if (longitud.length == 0) {
        error("Escriba la longitud");
        foco("longitud");
        return false;
    }

    let url = "files/mapas/guardarCoordenadas2.php",
        ejecutar = 'registroCoordenadas(' + idNegocio + ',' + idDireccion + ',' + sucursal + ')',
        send = {
            latitud,
            longitud,
            idDireccion
        };
    ajaxPostControl(url, "registrando", send, ejecutar, true);
}

const confCorreo = () => {
    let url = "files/correos/confCorreos.php",
        ejecutar = '',
        send = '';
    ajaxPostControl(url, "registrando", send, ejecutar, true);
}

const cambiarStatusCorreo = (nuevoStatus, num, id) => {
    let url = "files/correos/cambiarStatusCorreo.php",
        ejecutar = '',
        send = {
            nuevoStatus,
            id,
            num
        };
    ajaxPostControl(url, "registro" + num, send, ejecutar, false);
}

const confGeografia = () => {
    let url = "files/geografia/confGeografia.php",
        ejecutar = '',
        send = '';
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const cambiarStatusEntidad = (nuevoStatus, num, id) => {
    let url = "files/geografia/cambiarStatusEntidad.php",
        ejecutar = '',
        send = {
            nuevoStatus,
            id,
            num
        };
    ajaxPostControl(url, "registro" + num, send, ejecutar, false);
}

const confMunicipios = idEstado => {
    let url = "files/geografia/confGeografia2.php",
        ejecutar = '',
        send = {
            idEstado
        };
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const registrarNuevoMunicipio = idEstado => {
    let url = "files/geografia/registrarNuevoMunicipio.php",
        ejecutar = '',
        send = {
            idEstado
        }
    ajaxPostControl(url, 'nuevoMunicipio', send, ejecutar, true);
}

const guardarNuevoMunicipio = idEstado => {
    let nombreMunicipio = valor("nombreMunicipio").trim();
    if (nombreMunicipio.length == 0) {
        error("Escriba el nombre del nuevo municipio");
        foco("nombreMunicipio");
        return false;
    }
    let url = "files/geografia/guardarNuevoMunicipio.php",
        ejecutar = '',
        send = {
            idEstado,
            nombreMunicipio
        };
    ajaxPostControl(url, 'listaMunicipios', send, ejecutar, true);
}

function cambiarStatusMunicipio(nuevoStatus, num, id) {
    var url = "files/geografia/cambiarStatusMunicipio.php",
        ejecutar = '',
        send = {
            nuevoStatus,
            id,
            num
        }
    ajaxPostControl(url, 'registro' + num, send, ejecutar, false);
}

const confLocalidades = (idEstado, idMunicipio) => {
    let url = "files/geografia/confGeografia3.php",
        ejecutar = '',
        send = {
            idMunicipio,
            idEstado
        };
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const registrarNuevaLocalidad = (idEstado, idMunicipio) => {
    let url = "files/geografia/registrarNuevaLocalidad.php",
        ejecutar = '',
        send = {
            idEstado,
            idMunicipio
        }
    ajaxPostControl(url, 'nuevaLocalidad', send, ejecutar, true);
}

const guardarNuevaLocalidad = (idEstado, idMunicipio) => {
    let nombreLocalidad = valor("nombreLocalidad").trim();
    if (nombreLocalidad.length == 0) {
        error("Escriba el nombre de la nueva localidad");
        foco("nombreLocalidad");
        return false;
    }
    let codigoPostal = valor("codigoPostal").trim();
    let url = "files/geografia/guardarNuevaLocalidad.php",
        ejecutar = '',
        send = {
            idEstado,
            idMunicipio,
            nombreLocalidad,
            codigoPostal
        };
    ajaxPostControl(url, 'listaLocalidades', send, ejecutar, true);
}

const registroCodigosPostales = (idEstado, idMunicipio) => {
    let url = "files/geografia/registroCodigosPostales.php",
        ejecutar = '',
        send = {
            idEstado,
            idMunicipio
        };
    ajaxPostControl(url, 'listaLocalidades', send, ejecutar, true);
}

const guardarCPRegistro = (id, tipo, num) => {
    let codigoPostal = valor("cp" + num);
    if (codigoPostal.length == 0) {
        error("Escriba el codigo postal");
        foco("destino" + num);
        return false;
    }
    let url = "files/geografia/registroCodigosPostales2.php",
        ejecutar = '',
        send = {
            id,
            tipo,
            codigoPostal
        };
    ajaxPostControl(url, 'destino' + num, send, ejecutar, true);
}

const cambiarStatusLocalidad = (nuevoStatus, num, id) => {
    let url = "files/geografia/cambiarStatusLocalidad.php",
        ejecutar = '',
        send = {
            nuevoStatus,
            id,
            num
        };
    ajaxPostControl(url, 'registro' + num, send, ejecutar, false);
}

const cambiarStatusRegistroColonias = (nuevoStatus, num, id) => {
    let url = "files/geografia/cambiarStatusColoniasRegistro.php",
        ejecutar = '',
        send = {
            nuevoStatus,
            id,
            num
        };
    if (nuevoStatus == 1) { mostrar('registro3' + num); }
    if (nuevoStatus == 0) { ocultar(['registro3' + num]); }
    ajaxPostControl(url, 'registro2' + num, send, ejecutar, false);
}

const confColonias = idLocalidad => {
    let url = "files/geografia/confGeografia4.php",
        ejecutar = '',
        send = {
            idLocalidad
        };
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const registrarNuevoAsentamiento = (idEstado, idMunicipio, idLocalidad) => {
    let url = "files/geografia/registrarNuevoAsentamiento.php",
        ejecutar = '',
        send = {
            idEstado,
            idMunicipio,
            idLocalidad
        }
    ajaxPostControl(url, 'nuevoAsentamiento', send, ejecutar, true);
}

const guardarNuevoAsentamiento = (idEstado, idMunicipio, idLocalidad) => {
    let tipoAsentamiento = valor("tipoAsentamiento");
    if (tipoAsentamiento == 0) {
        error("Seleccione el tipo de asentamiento");
        foco("tipoAsentamiento");
        return false;
    }
    let nombreAsentamiento = valor("nombreColonia").trim();
    if (nombreAsentamiento.length == 0) {
        error("Escriba el nombre del asentamiento");
        foco("nombreColonia");
        return false;
    }
    let codigoPostal = valor("codigoPostal").trim();
    if (codigoPostal.length == 0) {
        error("Escriba el codigo postal");
        foco("codigoPostal");
        return false;
    }
    let url = "files/geografia/guardarNuevoAsentamiento.php",
        ejecutar = '',
        send = {
            nombreAsentamiento,
            codigoPostal,
            idEstado,
            idMunicipio,
            idLocalidad,
            tipoAsentamiento
        };
    ajaxPostControl(url, 'listaColonias', send, ejecutar, true);
}

const cambiarStatusColonia = (nuevoStatus, num, id) => {
    let url = "files/cambiarStatusColonia.php",
        ejecutar = '',
        send = {
            nuevoStatus,
            id,
            num
        };
    ajaxPostControl(url, 'registro' + num, send, ejecutar, false);
}

const confInfoContacto = () => {
    let url = "files/contacto/confInfoContacto.php",
        ejecutar = '',
        send = "";
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const verificarDatoContacto = tipoContacto => {
    let url = "files/contacto/verificarDatoContacto.php",
        ejecutar = '',
        send = {
            tipoContacto
        };
    ajaxPostControl(url, 'verificando', send, ejecutar, true);
}

const verificandoRegistro = (idRegistro, tipoRegistro, idNegocio) => {
    let url = "files/contacto/verificarDatoContacto2.php",
        ejecutar = '',
        send = {
            idRegistro,
            tipoRegistro,
            idNegocio
        };
    ajaxPostControl(url, 'verificandoRegistro', send, ejecutar, true);
}

const validarDatoContacto = (idRegistro, tipoRegistro) => {
    let send = {
        idRegistro,
        tipoRegistro
    };
    if (tipoRegistro == 4) {
        let urlPagina = valor("urlPagina").trim();

        if (urlPagina.length == 0) {
            error("Escriba la URL la página");
            foco("urlPagina");
            return false;
        }

        send.urlPagina = urlPagina;
    }
    if (tipoRegistro == 5 || tipoRegistro == 6 || tipoRegistro == 7) {
        let identificador = valor("identificador").trim();
        let urlPagina = valor("urlPagina").trim();

        if (identificador.length == 0) {
            error("Escriba el identificador de la página");
            foco("identificador");
            return false;
        }
        if (urlPagina.length == 0) {
            error("Escriba la URL la página");
            foco("urlPagina");
            return false;
        }

        send.identificador = identificador;
        send.urlPagina = urlPagina;
    }

    let msgThen = {
        msg1: '¿Esta seguro de validar el dato de contacto?',
        msg2: '',
        msg3: 'Validar'
    }
    let ejecutar = 'validarDatoContactoThen(' + JSON.stringify(send) + ')';
    confirmThen(ejecutar, msgThen);
}

const validarDatoContactoThen = (send) => {
    let url = "files/contacto/verificarDatoContacto3.php",
        ejecutar = 'verificarDatoContacto(' + send.tipoRegistro + ')';
    ajaxPostControl(url, 'verificandoRegistro', send, ejecutar, true);
}

const confContactoClientes = () => {
    let url = "files/clientes/confContactoClientes.php",
        ejecutar = '',
        send = '';
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const verificarEmailCliente = () => {
    let url = "files/clientes/verificarEmailCliente.php",
        ejecutar = '',
        send = '';
    ajaxPostControl(url, 'verificando', send, ejecutar, true);
}

const validarEmailCliente = (idRegistro, contacto) => {
    let msgThen = {
        msg1: '¿Esta seguro de validar el contacto: ' + contacto + '?',
        msg2: '',
        msg3: 'Validar'
    }
    let ejecutar = 'validarEmailClienteThen(' + idRegistro + ')';
    confirmThen(ejecutar, msgThen);
}

const validarEmailClienteThen = idRegistro => {
    let url = "files/clientes/verificarEmailCliente2.php",
        ejecutar = 'verificarEmailCliente()',
        send = {
            idRegistro
        };
    ajaxPostControl(url, 'verificandoRegistro', send, ejecutar, true);
}

const etiquetasAdministrar = () => {
    let url = "files/categorias/etiquetasAdministrar.php",
        ejecutar = '',
        send = '';
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const guardarNuevaCategoria = () => {
    let categoria = valor("categoria").trim();
    if (categoria.length == 0) {
        error("Escriba el nombre de la categoria");
        foco("categoria");
        return false;
    }
    let url = "files/categorias/guardarNuevaCategoria.php",
        ejecutar = 'etiquetasAdministrar()',
        send = {
            categoria
        };
    ajaxPostControl(url, "registrando", send, ejecutar, true);
}

const registrarNuevaCategoria = () => {
    let url = "files/categorias/registrarNuevaCategoria.php",
        ejecutar = '',
        send = {}
    ajaxPostControl(url, 'registrarNuevaCategoria', send, ejecutar, true);
}

const agregarNuevaEtiqueta = idCategoria => {
    let url = "files/categorias/agregarNuevaEtiqueta.php",
        ejecutar = '',
        send = {
            idCategoria
        };
    ajaxPostControl(url, 'registrando', send, ejecutar, true);
}

const guardarNuevaEtiqueta = idCategoria => {
    let etiqueta = valor("etiqueta").trim();
    let idEtiqueta = valor("idEtiqueta");
    if (etiqueta.length == 0) {
        error("Escriba el nombre de la etiqueta");
        foco("etiqueta");
        return false;
    }
    let url = "files/categorias/guardarNuevaEtiqueta.php",
        ejecutar = 'agregarNuevaEtiqueta(' + idCategoria + ')',
        send = {
            etiqueta,
            idCategoria,
            idEtiqueta
        };
    ajaxPostControl(url, "registrando", send, ejecutar, true);
}

const cambiarStatusSubetiqueta = (nuevoStatus, num, id) => {
    let url = "files/categorias/cambiarStatusSubetiqueta.php",
        ejecutar = '',
        send = {
            nuevoStatus,
            id,
            num
        };
    ajaxPostControl(url, "registro2" + num, send, ejecutar, false);
}

const etiquetasPropuestas = () => {
    let url = "files/propuestaEtiquetas/etiquetasPropuestas.php",
        ejecutar = '',
        send = '';
    ajaxPostControl(url, "registrando", send, ejecutar, true);
}

const verEtiquetasPropuestas = idNegocio => {
    let url = "files/propuestaEtiquetas/verEtiquetasPropuestas.php",
        ejecutar = '',
        send = {
            idNegocio
        };
    ajaxPostControl(url, "registrando", send, ejecutar, true);
}

const editarEtiqueta = (accion, idEtiqueta, idNegocio) => {
    let nombre = valor("e" + idEtiqueta);
    if (nombre.length == 0) {
        error("El nombre de la etiqueta no puede estar vacio");
        foco("e" + idEtiqueta);
    } else {
        let send = {
            idEtiqueta,
            nombre,
            idNegocio
        };

        if (accion == 1) {
            let msgThen = {
                msg1: '¿Estas seguro de que deseea rechazar la etiqueta?',
                msg2: '',
                msg3: 'Rechazar'
            }
            let ejecutar = 'editarEtiquetaThen1(' + JSON.stringify(send) + ')';
            confirmThen(ejecutar, msgThen);
        }
        if (accion == 2) {
            let msgThen = {
                msg1: '¿Estas seguro de que deseea aprobar la etiqueta?',
                msg2: '',
                msg3: 'Aprobar'
            }
            let ejecutar = 'editarEtiquetaThen2(' + JSON.stringify(send) + ')';
            confirmThen(ejecutar, msgThen);
        }
    }
}

const editarEtiquetaThen1 = send => {
    let url = "files/propuestaEtiquetas/rechazarEtiquetaPropuesta.php",
        ejecutar = 'verEtiquetasPropuestas(' + send.idNegocio + ')';
    ajaxPostControl(url, "registrando", send, ejecutar, true);
}

const editarEtiquetaThen2 = send => {
    let url = "files/propuestaEtiquetas/aprobarEtiquetaPropuesta.php",
        ejecutar = 'verEtiquetasPropuestas(' + send.idNegocio + ')';
    ajaxPostControl(url, "registrando", send, ejecutar, true);
}

const dividirCoordenadas = texto => {
    let coordenadas = texto.split(','),
        latitud = coordenadas[0].trim(),
        longitud = coordenadas[1].trim();
    document.getElementById('latitud').value = latitud;
    document.getElementById('longitud').value = longitud;
}

const listaEscrito2 = cadena => {
    cadena = cadena.trim();
    if (cadena.length > 2) {
        let url = "files/categorias/listaGiroCategorias.php",
            ejecutar = '',
            send = {
                cadena
            };
        ajaxPostControl(url, "listagiro", send, ejecutar, false);
    } else {
        ocultar("listagiro");
    }
}

const listaEscrito = (cadena, idCategoria) => {
    cadena = cadena.trim();
    if (cadena.length > 2) {
        let url = "files/categorias/listaGiroEtiquetas.php",
            ejecutar = '',
            send = {
                cadena,
                idCategoria
            };
        ajaxPostControl(url, "listagiro", send, ejecutar, false);
    } else {
        ocultar("listagiro");
    }
}

const seleccionarEtiquetaRegistro = (idEtiqueta, nombreEtiqueta, asociado) => {
    if (asociado == 0) {
        document.getElementById("idEtiqueta").value = idEtiqueta;
        document.getElementById("etiqueta").value = nombreEtiqueta;
        ok("Se ha seleccionado la etiqueta " + nombreEtiqueta);
    } else {
        error("La etiqueta ya existe en la categoria");
    }
}

const seleccionarCategoriaRegistro = (idEtiqueta, nombreEtiqueta, asociado) => {
    if (asociado == 0) {
        document.getElementById("idEtiqueta").value = idEtiqueta;
        document.getElementById("etiqueta").value = nombreEtiqueta;
        ok("Se ha seleccionado la etiqueta " + nombreEtiqueta);
    } else {
        error("La etiqueta ya existe en la categoria");
    }
}

const autorizarPagoFactura = (idNegocio, idFactura) => {
    let msgThen = {
        msg1: '¿Estas seguro de validar el pago?',
        msg2: '',
        msg3: 'Validar'
    }
    let ejecutar = 'autorizarPagoFacturaThen(' + idNegocio + ', ' + idFactura + ')';
    confirmThen(ejecutar, msgThen);
}

const autorizarPagoFacturaThen = (idNegocio, idFactura) => {
    let url = "files/pagos/autorizarPagoFactura.php",
        ejecutar = 'verHistorialPagos(' + idNegocio + ', 2)',
        send = {
            idNegocio,
            idFactura
        };
    ajaxPostControl(url, "detallesPagos", send, ejecutar, true);
}