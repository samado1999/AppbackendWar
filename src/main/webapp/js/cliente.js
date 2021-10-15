var cedula = '';
var direccion = '';
var email = '';
var nombre = '';
var telefono = '';

function clear() {
    var cedula = document.getElementById("txtCedula");
    cedula.value = '';
    var direccion = document.getElementById("txtDireccion");
    direccion.value = '';
    var email = document.getElementById("txtCorreo");
    email.value = '';
    var nombre = document.getElementById("txtName");
    nombre.value = '';
    var telefono = document.getElementById("txtTelefono");
    telefono.value = '';
}

function validar() {
    cedula = document.getElementById("txtCedula").value;
    direccion = document.getElementById("txtDireccion").value;
    email = document.getElementById("txtCorreo").value;
    nombre = document.getElementById("txtName").value;
    telefono = document.getElementById("txtTelefono").value;

    // && direccion && email && nombre && telefono
    if (cedula != '' && direccion != '' && email != '' && nombre != '' && telefono != '') {
        return true;
    }
    return false;
}

function postCliente() {
    if (this.validar()) {
        // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
        var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'cliente/guardar';

        console.log('endPoint: ' + endPoint);
        var jsonRequest = JSON.stringify(
            {
                "cedula_cliente": String(cedula),
                "email_cliente": String(email),
                "direccion_cliente": String(direccion),
                "telefono_cliente": String(telefono),
                "nombre_cliente": String(nombre)
            });

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 0) {
                console.log('Creando cliente');
            }
            if (this.readyState == 1) {
                console.log('Abriendo cliente');
            }
            if (this.readyState == 2) {
                console.log('Enviando cliente');
            }
            if (this.readyState == 3) {
                console.log('Cargando cliente');
            }
            if (this.readyState == 4) {
                console.log('Operación completa');
                switch (this.status) {
                    case 200:
                        console.log('HTTP STATUS OK');
                        break;
                    case 400:
                        console.log('HTTP STATUS BAD REQUEST');
                        break;
                    case 500:
                        console.log('HTTP STATUS SERVER ERROR');
                        break;
                    default:
                        console.log('DEFAULT');
                        break;
                }
            }
        };

        xhttp.open("POST", endPoint, true);
        xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhttp.send(jsonRequest);
        this.clear();
    } else {
        alert('LOS DATOS NO ESTÁN COMPLETOS');
    }
}

function delCliente() {
    this.validar();

    if (cedula != '') {
        // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
        var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'cliente/eliminar/' + cedula;

        console.log('endPoint: ' + endPoint);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 0) {
                console.log('Creando cliente');
            }
            if (this.readyState == 1) {
                console.log('Abriendo cliente');
            }
            if (this.readyState == 2) {
                console.log('Enviando cliente');
            }
            if (this.readyState == 3) {
                console.log('Cargando cliente');
            }
            if (this.readyState == 4) {
                console.log('Operación completa');
                switch (this.status) {
                    case 200:
                        console.log('HTTP STATUS OK');
                        var res = JSON.parse(xhttp.response);
                        if (res != false) {
                            alert('Usuario eliminado');
                            clear();
                        } else {
                            alert('Usuario no eliminado');
                            clear();
                        }
                        break;
                    case 400:
                        console.log('HTTP STATUS BAD REQUEST');
                        break;
                    case 500:
                        console.log('HTTP STATUS SERVER ERROR');
                        break;
                    default:
                        console.log('DEFAULT');
                        break;
                }
            }
        };

        xhttp.open("DELETE", endPoint, true);
        xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhttp.send();
    } else {
        alert('LA IDENTIFICACIÓN NO PUEDE ESTAR VACÍA');
    }
}

function updateCliente() {
    // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
    if (this.validar()) {
        var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'cliente/actualizar';

        console.log('endPoint: ' + endPoint);
        var jsonRequest = JSON.stringify(
            {
                "cedula_cliente": String(cedula),
                "email_cliente": String(email),
                "direccion_cliente": String(direccion),
                "telefono_cliente": String(telefono),
                "nombre_cliente": String(nombre)
            });

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 0) {
                console.log('Creando cliente');
            }
            if (this.readyState == 1) {
                console.log('Abriendo cliente');
            }
            if (this.readyState == 2) {
                console.log('Enviando cliente');
            }
            if (this.readyState == 3) {
                console.log('Cargando cliente');
            }
            if (this.readyState == 4) {
                console.log('Operación completa');
                switch (this.status) {
                    case 200:
                        alert('USUARIO ACTUALIZADO CORRECTAMENTE');
                        console.log('HTTP STATUS OK');
                        break;
                    case 400:
                        console.log('HTTP STATUS BAD REQUEST');
                        break;
                    case 500:
                        console.log('HTTP STATUS SERVER ERROR');
                        break;
                    default:
                        console.log('DEFAULT');
                        break;
                }
            }
        };

        xhttp.open("PUT", endPoint, true);
        xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhttp.send(jsonRequest);

        clear();
    } else {
        alert('LOS DATOS NO ESTÁN COMPLETOS');
    }
}

function consultarCliente() {
    this.validar();
    // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
    if (cedula !== '') {
        var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'cliente/listarById/' + cedula;

        console.log('endPoint: ' + endPoint);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 0) {
                console.log('Creando cliente');
            }
            if (this.readyState == 1) {
                console.log('Abriendo cliente');
            }
            if (this.readyState == 2) {
                console.log('Enviando cliente');
            }
            if (this.readyState == 3) {
                console.log('Cargando cliente');
            }
            if (this.readyState == 4) {
                console.log('Operación completa');
                switch (this.status) {
                    case 200:
                        var res = JSON.parse(xhttp.response);
                        if (res != null) {
                            var cedula = document.getElementById("txtCedula");
                            cedula.value = res.cedula_cliente;
                            var direccion = document.getElementById("txtDireccion");
                            direccion.value = res.direccion_cliente;
                            var email = document.getElementById("txtCorreo");
                            email.value = res.email_cliente;
                            var nombre = document.getElementById("txtName");
                            nombre.value = res.nombre_cliente;
                            var telefono = document.getElementById("txtTelefono");
                            telefono.value = res.telefono_cliente;
                        } else {
                            alert('USUARIO NO ENCONTRADO');
                            clear();
                        }
                        break;
                    case 400:
                        alert('USUARIO NO ENCONTRADO');
                        console.log('HTTP STATUS BAD REQUEST');
                        clear();
                        break;
                    case 500:
                        alert('USUARIO NO ENCONTRADO');
                        console.log('HTTP STATUS SERVER ERROR');
                        clear();
                        break;
                    default:
                        alert('USUARIO NO ENCONTRADO');
                        console.log('DEFAULT');
                        clear();
                        break;
                }
            }
        }
        xhttp.open("GET", endPoint, true);
        xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhttp.send();
    } else {
        alert('LA IDENTIFICACIÓN NO PUEDE SER NULA');
    }
}