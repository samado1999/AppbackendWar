var identification = '';
var fullname = '';
var email = '';
var username = '';
var password = '';

function clear() {
    var identification = document.getElementById("txtIdentification");
    identification.value = '';
    var fullname = document.getElementById("txtFullname");
    fullname.value = '';
    var email = document.getElementById("txtEmail");
    email.value = '';
    var username = document.getElementById("txtUsername");
    username.value = '';
    var password = document.getElementById("txtPassword");
    password.value = '';
}

function validar() {
    identification = document.getElementById("txtIdentification").value;
    fullname = document.getElementById("txtFullname").value;
    email = document.getElementById("txtEmail").value;
    username = document.getElementById("txtUsername").value;
    password = document.getElementById("txtPassword").value;

    // && fullname && email && username && password
    if (identification != '' && fullname != '' && email != '' && username != '' && password != '') {
        return true;
    }
    return false;
}

function postUser() {
    if (this.validar()) {
        // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
        var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'usuario/guardar';

        console.log('endPoint: ' + endPoint);
        var jsonRequest = JSON.stringify(
            {
                "cedula_usuario": String(identification),
                "email_usuario": String(email),
                "nombre_usuario": String(fullname),
                "password": String(password),
                "usuario": String(username)
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

function testProfesor() {
    identification = document.getElementById("txtIdentification").value;
    var endPoint = 'http://201.244.154.157:8090/usuario/eliminar/' + identification;
    var item = document.getElementById("txtItem").value.trim();
    var quan = document.getElementById("txtTotal").value.trim();

    var http = new XMLHttpRequest();
    var url = '/WebStoreApp/ServletWebStore';
    var params = "item=" + item + "&" + "total=" + quan;
    http.open('DELETE', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type',
        'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
}

function delUser() {
    this.validar();

    if (identification != '') {
        // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
        var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'usuario/eliminar/' + identification;

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

function updateUser() {
    // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
    if (this.validar()) {
        var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'usuario/actualizar';

        console.log('endPoint: ' + endPoint);
        var jsonRequest = JSON.stringify(
            {
                "cedula_usuario": String(identification),
                "email_usuario": String(email),
                "nombre_usuario": String(fullname),
                "password": String(password),
                "usuario": String(username)
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

function consultarUser() {
    this.validar();
    // var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
    if (identification !== '') {
        var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'usuario/listarById/' + identification;

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
                            var identification = document.getElementById("txtIdentification");
                            identification.value = res.cedula_usuario;
                            var fullname = document.getElementById("txtFullname");
                            fullname.value = res.nombre_usuario;
                            var email = document.getElementById("txtEmail");
                            email.value = res.email_usuario;
                            var username = document.getElementById("txtUsername");
                            username.value = res.usuario;
                            var password = document.getElementById("txtPassword");
                            password.value = res.password;
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