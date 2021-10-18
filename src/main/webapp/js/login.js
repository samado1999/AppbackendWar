var username = '';
var password = '';

function clear() {
    var username = document.getElementById("txtUsername");
    username.value = '';
    var password = document.getElementById("txtPassword");
    password.value = '';
}

function validar() {
    username = document.getElementById("txtUsername").value;
    password = document.getElementById("txtPassword").value;

    // && fullname && email && username && password
    if (username != '' && password != '') {
        return true;
    }
    return false;
}

function loginUser() {
    if (this.validar()) {
        var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'usuario/login';
        // console.log('ROOT PATH: ' + document.URL.substr(0, document.URL.indexOf("/", 8) + 1));
        // var endPoint = '/TiendaVirtualApp/usuario/login';

        console.log('endPoint: ' + endPoint);
        var jsonRequest = JSON.stringify(
            {
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
                        var res = JSON.parse(xhttp.response);
                        if (res != false) {
                            alert('USUARIO Y CONTRASEÑA CORRECTOS');
                            clear();
                            window.location.replace("index2.html");
                        } else {
                            alert('USUARIO O CONTRASEÑA INCORRECTOS');
                            clear();
                        }
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