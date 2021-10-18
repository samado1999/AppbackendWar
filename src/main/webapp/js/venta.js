/**
 * 
 */

var change1 = document.getElementById('txtCantidad1');
var change2 = document.getElementById('txtCantidad2');
var change3 = document.getElementById('txtCantidad3');

total_value1 = 0.0;
total_value2 = 0.0;
total_value3 = 0.0;

iva1 = 0.0;
iva2 = 0.0;
iva3 = 0.0;

change1.addEventListener("input", function() {
	var total = document.getElementById('txtTotal1');
	var total2 = document.getElementById('txtTotal2');
	var total3 = document.getElementById('txtTotal3');

	var totalFinal = document.getElementById('txtTotalFinal');

	var tempTotal = this.value * total_value1;
	total.value = tempTotal;
	var totalVenta = document.getElementById('txtTotalVenta');
	var totalIva = document.getElementById('txtTotalIva');
	totalVenta.value = +total.value + +total2.value + +total3.value;
	totalIva.value = +total.value * iva1 + +total2.value * iva2 + +total3.value * iva3;

	totalFinal.value = +totalVenta.value + +totalIva.value;
});

change2.addEventListener("input", function() {
	var total = document.getElementById('txtTotal2');
	var total1 = document.getElementById('txtTotal1');
	var total3 = document.getElementById('txtTotal3');

	var totalFinal = document.getElementById('txtTotalFinal');

	var tempTotal = this.value * total_value2;
	total.value = tempTotal;
	var totalVenta = document.getElementById('txtTotalVenta');
	var totalIva = document.getElementById('txtTotalIva');
	totalVenta.value = +total.value + +total1.value + +total3.value;
	totalIva.value = +total.value * iva1 + +total1.value * iva2 + +total3.value * iva3;

	totalFinal.value = +totalVenta.value + +totalIva.value;
});

change3.addEventListener("input", function() {
	var total = document.getElementById('txtTotal3');
	var total1 = document.getElementById('txtTotal1');
	var total2 = document.getElementById('txtTotal2');

	var totalFinal = document.getElementById('txtTotalFinal');

	var tempTotal = this.value * total_value3;
	total.value = tempTotal;
	var totalVenta = document.getElementById('txtTotalVenta');
	var totalIva = document.getElementById('txtTotalIva');
	totalVenta.value = +total.value + +total1.value + +total2.value;
	totalIva.value = +total.value * iva1 + +total1.value * iva2 + +total2.value * iva3;

	totalFinal.value = +totalVenta.value + +totalIva.value;
});

function clear() {
	/*
	var cedula = document.getElementById("txtCedula");
	cedula.value = '';
	var direccion = document.getElementById("txtName");
	direccion.value = '';
	*/
}

function validar() {
	cedula = document.getElementById("txtCedula").value;
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
							var nombre = document.getElementById("txtName");
							nombre.value = res.nombre_cliente;
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

// http://localhost:8080/Grupo02PonySalvaje/producto/listarById/4
function consultarProducto1() {
	codProd1 = document.getElementById("txtCodProd1").value;
	// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
	if (codProd1 !== '') {
		var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'producto/listarById/' + codProd1;

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
							var cod = document.getElementById("txtCodProd1");
							cod.value = res.codigo_producto;
							var nom = document.getElementById("txtNameProd1");
							nom.value = res.nombre_producto;

							var quantity = document.getElementById('txtCantidad1');
							quantity.value = 1;

							var total = document.getElementById('txtTotal1');
							total_value1 = res.precio_venta;
							total.value = quantity.value * res.precio_venta;

							iva1 = res.ivacompra;

							var totalVenta = document.getElementById('txtTotalVenta');
							totalVenta.value = +total_value1 + +total_value2 + +total_value3;

							var totalIva = document.getElementById('txtTotalIva');
							totalIva.value = +total_value1 * iva1 + +total_value2 * iva2 + +total_value3 * iva3;

							var totalFinal = document.getElementById('txtTotalFinal');
							totalFinal.value = +totalVenta.value + +totalIva.value;
						} else {
							alert('USUARIO NO ENCONTRADO');
							// clear();
						}
						break;
					case 400:
						alert('USUARIO NO ENCONTRADO');
						console.log('HTTP STATUS BAD REQUEST');
						// clear();
						break;
					case 500:
						alert('USUARIO NO ENCONTRADO');
						console.log('HTTP STATUS SERVER ERROR');
						// clear();
						break;
					default:
						alert('USUARIO NO ENCONTRADO');
						console.log('DEFAULT');
						// clear();
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

function consultarProducto2() {
	codProd2 = document.getElementById("txtCodProd2").value;
	// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
	if (codProd2 !== '') {
		var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'producto/listarById/' + codProd2;

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
							var cod = document.getElementById("txtCodProd2");
							cod.value = res.codigo_producto;
							var nom = document.getElementById("txtNameProd2");
							nom.value = res.nombre_producto;

							var quantity = document.getElementById('txtCantidad2');
							quantity.value = 1;

							var total = document.getElementById('txtTotal2');
							total_value2 = res.precio_venta;
							total.value = quantity.value * res.precio_venta;

							iva2 = res.ivacompra;

							var totalVenta = document.getElementById('txtTotalVenta');
							totalVenta.value = +total_value1 + +total_value2 + +total_value3;

							var totalIva = document.getElementById('txtTotalIva');
							totalIva.value = +total_value1 * iva1 + +total_value2 * iva2 + +total_value3 * iva3;

							var totalFinal = document.getElementById('txtTotalFinal');
							totalFinal.value = +totalVenta.value + +totalIva.value;
						} else {
							alert('USUARIO NO ENCONTRADO');
							// clear();
						}
						break;
					case 400:
						alert('USUARIO NO ENCONTRADO');
						console.log('HTTP STATUS BAD REQUEST');
						// clear();
						break;
					case 500:
						alert('USUARIO NO ENCONTRADO');
						console.log('HTTP STATUS SERVER ERROR');
						// clear();
						break;
					default:
						alert('USUARIO NO ENCONTRADO');
						console.log('DEFAULT');
						// clear();
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

function consultarProducto3() {
	codProd3 = document.getElementById("txtCodProd3").value;
	// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
	if (codProd3 !== '') {
		var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'producto/listarById/' + codProd3;

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
							var cod = document.getElementById("txtCodProd3");
							cod.value = res.codigo_producto;
							var nom = document.getElementById("txtNameProd3");
							nom.value = res.nombre_producto;

							var quantity = document.getElementById('txtCantidad3');
							quantity.value = 1;

							var total = document.getElementById('txtTotal3');
							total_value3 = res.precio_venta;
							total.value = quantity.value * res.precio_venta;

							iva3 = res.ivacompra;

							var totalVenta = document.getElementById('txtTotalVenta');
							totalVenta.value = +total_value1 + +total_value2 + +total_value3;

							var totalIva = document.getElementById('txtTotalIva');
							totalIva.value = +total_value1 * iva1 + +total_value2 * iva2 + +total_value3 * iva3;

							var totalFinal = document.getElementById('txtTotalFinal');
							totalFinal.value = +totalVenta.value + +totalIva.value;
						} else {
							alert('USUARIO NO ENCONTRADO');
							// clear();
						}
						break;
					case 400:
						alert('USUARIO NO ENCONTRADO');
						console.log('HTTP STATUS BAD REQUEST');
						// clear();
						break;
					case 500:
						alert('USUARIO NO ENCONTRADO');
						console.log('HTTP STATUS SERVER ERROR');
						// clear();
						break;
					default:
						alert('USUARIO NO ENCONTRADO');
						console.log('DEFAULT');
						// clear();
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

function confirmar() {

	var cant1 = document.getElementById('txtCantidad1');
	var cant2 = document.getElementById('txtCantidad2');
	var cant3 = document.getElementById('txtCantidad3');

	var prod1 = document.getElementById("txtNameProd1");
	var prod2 = document.getElementById("txtNameProd2");
	var prod3 = document.getElementById("txtNameProd3");

	var totalIva = document.getElementById('txtTotalIva');
	var totalVenta = document.getElementById('txtTotalVenta');
	var totalFinal = document.getElementById('txtTotalFinal');
	var ced = document.getElementById('txtCedula');
	if (totalIva.value > 0 && totalVenta.value > 0 && totalFinal.value > 0 && ced != 0) {
		// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
		var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'venta/guardar';

		console.log('endPoint: ' + endPoint);

		const vent = new Object();
		vent.ivaventa = totalIva.value;
		vent.total_venta = totalVenta.value;
		vent.valor_venta = totalFinal.value;

		const client = new Object();
		client.cedula_cliente = ced.value;
		vent.cedula_cliente = client;

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
						var res = xhttp.response;
						console.log('RESPUESTA: ' + res);

						console.log(document.getElementById('txtCantidad' + 1));

						var endPointDetail = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'detalleVenta/guardar';

						console.log('endPoint: ' + endPointDetail);

						var ciclos = 0;
						if (prod1.value != 0) {
							ciclos = ciclos + 1;
						}
						if (prod2.value != 0) {
							ciclos = ciclos + 1;
						}
						if (prod3.value != 0) {
							ciclos = ciclos + 1;
						}
						
						var list = [];
						for (var i = 0; i < ciclos; i++) {
							const detVen = new Object();
							detVen.cantidad_producto = (document.getElementById('txtCantidad' + (i + 1))).value;
							detVen.valor_total = totalFinal.value;
							detVen.valor_venta =  totalVenta.value;
							detVen.valoriva = totalIva.value;

							const vent = new Object();
							vent.codigo_venta = res;
							detVen.codigo_venta = vent;

							const prod = new Object();
							prod.codigo_producto = document.getElementById("txtCodProd" + (i + 1)).value;
							detVen.codigo_producto = prod;
							
							console.log(JSON.stringify(detVen));
							list.push(detVen);
						}
						
						var xhttpDetail = new XMLHttpRequest();
						xhttpDetail.onreadystatechange = function() {
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
						
						xhttpDetail.open("POST", endPointDetail, true);
						xhttpDetail.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
						xhttpDetail.send(JSON.stringify(list));
						
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
		xhttp.send(JSON.stringify(vent));
		this.clear();
	} else {
		alert('LOS DATOS NO ESTÁN COMPLETOS');
	}
}
