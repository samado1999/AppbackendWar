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
						alert('Cliente creado');
						clear();
						break;
					case 400:
						console.log('HTTP STATUS BAD REQUEST');
						alert('Cliente no creado');
						break;
					case 500:
						console.log('HTTP STATUS SERVER ERROR');
						alert('Cliente no creado');
						break;
					default:
						console.log('DEFAULT');
						alert('Cliente no creado');
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

function delCliente() {
	this.validar();

	if (cedula != '') {
		// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
		var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'cliente/eliminar/' + cedula;

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
							alert('Cliente eliminado');
							clear();
						} else {
							alert('Cliente no eliminado');
						}
						break;
					case 400:
						console.log('HTTP STATUS BAD REQUEST');
						alert('Cliente no eliminado');
						break;
					case 500:
						console.log('HTTP STATUS SERVER ERROR');
						alert('Cliente no eliminado');
						break;
					default:
						console.log('DEFAULT');
						alert('Cliente no eliminado');
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
						alert('Cliente actualizado');
						console.log('HTTP STATUS OK');
						break;
					case 400:
						console.log('HTTP STATUS BAD REQUEST');
						alert('Cliente no actualizado');
						break;
					case 500:
						console.log('HTTP STATUS SERVER ERROR');
						alert('Cliente no actualizado');
						break;
					default:
						console.log('DEFAULT');
						alert('Cliente no actualizado');
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

function consultarCliente() {
	this.validar();
	// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
	if (cedula !== '') {
		var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'cliente/listarById/' + cedula;

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
							alert('Cliente encontrado');
						} else {
							alert('Cliente no encontrado');
						}
						break;
					case 400:
						alert('Cliente no encontrado');
						console.log('HTTP STATUS BAD REQUEST');
						clear();
						break;
					case 500:
						alert('Cliente no encontrado');
						console.log('HTTP STATUS SERVER ERROR');
						clear();
						break;
					default:
						alert('Cliente no encontrado');
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

function getAllClients() {
	var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'cliente/listar';

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
						th.innerHTML = 'DIRECCIÓN';
						tr.appendChild(th);

						var th = document.createElement("th");      // TABLE HEADER.
						th.innerHTML = 'EMAIL';
						tr.appendChild(th);

						var th = document.createElement("th");      // TABLE HEADER.
						th.innerHTML = 'NOMBRE';
						tr.appendChild(th);

						var th = document.createElement("th");      // TABLE HEADER.
						th.innerHTML = 'TELEFONO';
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