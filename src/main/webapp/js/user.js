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
		xhttp.onreadystatechange = function() {
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
						alert('Usuario creado');
						clear();
						break;
					case 400:
						console.log('HTTP STATUS BAD REQUEST');
						alert('Usuario no creado');
						break;
					case 500:
						console.log('HTTP STATUS SERVER ERROR');
						alert('Usuario no creado');
						break;
					default:
						console.log('DEFAULT');
						alert('Usuario no creado');
						break;
				}
			}
		};

		xhttp.open("POST", endPoint, true);
		xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xhttp.send(jsonRequest);
		this.clear();
	} else {
		alert('Los datos no están completos');
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

	http.onreadystatechange = function() {//Call a function when the state changes.
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
		xhttp.onreadystatechange = function() {
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
						}
						break;
					case 400:
						console.log('HTTP STATUS BAD REQUEST');
						alert('Usuario no eliminado');
						break;
					case 500:
						console.log('HTTP STATUS SERVER ERROR');
						alert('Usuario no eliminado');
						break;
					default:
						console.log('DEFAULT');
						alert('Usuario no eliminado');
						break;
				}
			}
		};

		xhttp.open("DELETE", endPoint, true);
		xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xhttp.send();
	} else {
		alert('La identificación no puede estar vacía');
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
		xhttp.onreadystatechange = function() {
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
						alert('Usuario actualizado');
						clear();
						console.log('HTTP STATUS OK');
						break;
					case 400:
						console.log('HTTP STATUS BAD REQUEST');
						alert('Usuario no actualizado');
						break;
					case 500:
						console.log('HTTP STATUS SERVER ERROR');
						alert('Usuario no actualizado');
						break;
					default:
						console.log('DEFAULT');
						alert('Usuario no actualizado');
						break;
				}
			}
		};

		xhttp.open("PUT", endPoint, true);
		xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xhttp.send(jsonRequest);
		clear();
	} else {
		alert('Los datos no están completos');
	}
}

function consultarUser() {
	this.validar();
	// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
	if (identification !== '') {
		var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'usuario/listarById/' + identification;

		console.log('endPoint: ' + endPoint);

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
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
							alert('Usuario encontrado');
						} else {
							alert('Usuario no encontrado');
						}
						break;
					case 400:
						alert('Usuario no encontrado');
						console.log('HTTP STATUS BAD REQUEST');
						clear();
						break;
					case 500:
						alert('Usuario no encontrado');
						console.log('HTTP STATUS SERVER ERROR');
						clear();
						break;
					default:
						alert('Usuario no encontrado');
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
		alert('La identificación no puede ser nula');
	}
}

function getAllUsers() {
	var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'usuario/listar';

	console.log('endPoint: ' + endPoint);

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
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
					console.log(res);

					var col = [];
					for (i = 0; i < res.length; i++) {
						console.log('<---------' + JSON.stringify(res[i]));
						var tr = document.createElement('tr'); // create a td node
						for (var key in res[i]) {
							if (col.indexOf(key) === -1) {
								col.push(key);
							}
						}

						var table = document.createElement("table");

						var tr = table.insertRow(-1);                   // TABLE ROW.

						var th = document.createElement("th");      // TABLE HEADER.
						th.innerHTML = 'CÉDULA';
						tr.appendChild(th);

						var th = document.createElement("th");      // TABLE HEADER.
						th.innerHTML = 'EMAIL';
						tr.appendChild(th);

						var th = document.createElement("th");      // TABLE HEADER.
						th.innerHTML = 'NOMBRE USUARIO';
						tr.appendChild(th);

						var th = document.createElement("th");      // TABLE HEADER.
						th.innerHTML = 'CONTRASEÑA';
						tr.appendChild(th);

						var th = document.createElement("th");      // TABLE HEADER.
						th.innerHTML = 'USUARIO';
						tr.appendChild(th);

						/*
						for (var i = 0; i < col.length; i++) {
							var th = document.createElement("th");      // TABLE HEADER.
							th.innerHTML = col[i];
							tr.appendChild(th);
						}
						*/

						// ADD JSON DATA TO THE TABLE AS ROWS.
						for (var i = 0; i < res.length; i++) {

							tr = table.insertRow(-1);

							for (var j = 0; j < col.length; j++) {
								var tabCell = tr.insertCell(-1);
								tabCell.innerHTML = res[i][col[j]];
							}
						}

						// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
						var divContainer = document.getElementById("showData");
						divContainer.innerHTML = "";
						divContainer.appendChild(table);
					}
					break;
				case 400:
					console.log('HTTP STATUS BAD REQUEST');
					clear();
					break;
				case 500:
					console.log('HTTP STATUS SERVER ERROR');
					clear();
					break;
				default:
					console.log('DEFAULT');
					clear();
					break;
			}
		}
	}
	xhttp.open("GET", endPoint, true);
	xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	xhttp.send();
}