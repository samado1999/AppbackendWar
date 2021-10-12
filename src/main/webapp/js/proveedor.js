var nit = '';
var nombre = '';
var direccion = '';
var telefono = '';
var ciudad = '';

function clear() {
    var nit = document.getElementById("txtNIT");
    nit.value = '';
    var nombre = document.getElementById("txtProveedor");
    nombre.value = '';
    var direccion = document.getElementById("txtDireccion");
    direccion.value = '';
    var telefono = document.getElementById("txtTelefono");
    telefono.value = '';
    var ciudad = document.getElementById("txtCiudad");
    ciudad.value = '';
}

function validar() {
    nit = document.getElementById("txtNIT").value;
    nombre = document.getElementById("txtProveedor").value;
    direccion = document.getElementById("txtDireccion").value;
    telefono = document.getElementById("txtTelefono").value;
    ciudad = document.getElementById("txtCiudad").value;

    // && nombre && direccion && telefono && ciudad
    if (nit != '' && nombre != '' && direccion != '' && telefono != '' && ciudad != '') {
        return true;
    }
    return false;
}

function postProveedor() {
    if (this.validar()) {
        // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
        var endPoint = 'http://201.244.154.157:8090/proveedor/guardar';

        console.log('endPoint: ' + endPoint);
        var jsonRequest = JSON.stringify(
            {
                "nitproveedor": String(nit),
                "direccion_proveedor": String(direccion),
                "nombre_proveedor": String(nombre),
                "ciudad_proveedor": String(ciudad),
                "telefono_proveedor": String(telefono)
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

function delProveedor() {
    this.validar();

    if (nit != '') {
        // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
        var endPoint = 'http://201.244.154.157:8090/proveedor/eliminar/' + nit;

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

function updateProveedor() {
    // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
    if (this.validar()) {
        var endPoint = 'http://201.244.154.157:8090/proveedor/actualizar';

        console.log('endPoint: ' + endPoint);
        var jsonRequest = JSON.stringify(
            {
                "nitproveedor": String(nit),
                "direccion_proveedor": String(direccion),
                "nombre_proveedor": String(nombre),
                "ciudad_proveedor": String(ciudad),
                "telefono_proveedor": String(telefono)
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

function consultarProveedor() {
    this.validar();
    // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
    if (nit !== '') {
        var endPoint = 'http://201.244.154.157:8090/proveedor/listarById/' + nit;

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
                            var nit = document.getElementById("txtNIT");
                            nit.value = res.nitproveedor;
                            var nombre = document.getElementById("txtProveedor");
                            nombre.value = res.direccion_proveedor;
                            var direccion = document.getElementById("txtDireccion");
                            direccion.value = res.nombre_proveedor;
                            var telefono = document.getElementById("txtTelefono");
                            telefono.value = res.ciudad_proveedor;
                            var ciudad = document.getElementById("txtCiudad");
                            ciudad.value = res.telefono_proveedor;
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