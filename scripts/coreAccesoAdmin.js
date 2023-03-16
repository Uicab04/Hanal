function checarAcceso(error) {
    let msg = 'Nombre de usuario o contraseña incorrectos';
    if (error == 7) {
        msg = 'Escriba el nombre de usuario y contraseña';
    }
    if (error > 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 4000,
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
}