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
							alert('Cliente encontrado');
						} else {
							alert('Cliente no encontrado');
						}
						break;
					case 400:
						alert('Cliente no encontrado');
						console.log('HTTP STATUS BAD REQUEST');
						break;
					case 500:
						alert('Cliente no encontrado');
						console.log('HTTP STATUS SERVER ERROR');
						break;
					default:
						alert('Cliente no encontrado');
						console.log('DEFAULT');
						break;
				}
			}
		}
		xhttp.open("GET", endPoint, true);
		xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xhttp.send();
	} else {
		alert('La cédula de cliente es vacía');
	}
}

// http://localhost:8080/Grupo02PonySalvaje/producto/listarById/4
function consultarProducto1() {
	codProd1 = document.getElementById("txtCodProd1").value;
	codProd2 = document.getElementById("txtCodProd2").value;
	codProd3 = document.getElementById("txtCodProd3").value;
	// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
	if (codProd1 !== '' && codProd2 == '' && codProd2 == '') {
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
							alert('Producto #1 encontrado');
						} else {
							alert('Producto #1 no encontrado');
							// clear();
						}
						break;
					case 400:
						alert('Producto #1 no encontrado');
						console.log('HTTP STATUS BAD REQUEST');
						// clear();
						break;
					case 500:
						alert('Producto #1 no encontrado');
						console.log('HTTP STATUS SERVER ERROR');
						// clear();
						break;
					default:
						alert('Producto #1 no encontrado');
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
		alert('El código de producto #1 es vacío o llene los productos en orden');
	}
}

function consultarProducto2() {
	codProd1 = document.getElementById("txtCodProd1").value;
	codProd2 = document.getElementById("txtCodProd2").value;
	codProd3 = document.getElementById("txtCodProd3").value;
	// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
	if (codProd1 !== '' && codProd2 !== '' && codProd3 == '') {
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
							alert('Producto #2 encontrado');
						} else {
							alert('Producto #2 no encontrado');
							// clear();
						}
						break;
					case 400:
						alert('Producto #2 no encontrado');
						console.log('HTTP STATUS BAD REQUEST');
						// clear();
						break;
					case 500:
						alert('Producto #2 no encontrado');
						console.log('HTTP STATUS SERVER ERROR');
						// clear();
						break;
					default:
						alert('Producto #2 no encontrado');
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
		alert('El código de producto #2 es vacío o llene los productos en orden');
	}
}

function consultarProducto3() {
	codProd1 = document.getElementById("txtCodProd1").value;
	codProd2 = document.getElementById("txtCodProd2").value;
	codProd3 = document.getElementById("txtCodProd3").value;
	// var endPoint = document.URL.substr(0, document.URL.indexOf("/", 8) + 1) + 'usuario/guardar';
	if (codProd1 !== '' && codProd2 !== '' && codProd3 !== '') {
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
							alert('Producto #3 encontrado');
						} else {
							alert('Producto #3 no encontrado');
							// clear();
						}
						break;
					case 400:
						alert('Producto #3 no encontrado');
						console.log('HTTP STATUS BAD REQUEST');
						// clear();
						break;
					case 500:
						alert('Producto #3 no encontrado');
						console.log('HTTP STATUS SERVER ERROR');
						// clear();
						break;
					default:
						alert('Producto #3 no encontrado');
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
		alert('El código de producto #3 es vacío o llene los productos en orden');
	}
}

function confirmar() {

	var txtCodProd1 = document.getElementById("txtCodProd1").value;
	var txtCodProd2 = document.getElementById("txtCodProd2").value;
	var txtCodProd3 = document.getElementById("txtCodProd3").value;

	var prod1 = document.getElementById("txtNameProd1");
	var prod2 = document.getElementById("txtNameProd2");
	var prod3 = document.getElementById("txtNameProd3");

	var totalIva = document.getElementById('txtTotalIva');
	var totalVenta = document.getElementById('txtTotalVenta');
	var totalFinal = document.getElementById('txtTotalFinal');
	var ced = document.getElementById('txtCedula');
	if (totalIva.value > 0 && totalVenta.value > 0 && totalFinal.value > 0 && ced.value != '' && (txtCodProd1 || txtCodProd2 || txtCodProd3)) {
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
						alert('Venta generada');
						var res = xhttp.response;
						console.log('RESPUESTA: ' + res);

						console.log(document.getElementById('txtCantidad' + 1));

						var endPointDetail = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'detalleVenta/guardar';

						console.log('endPoint: ' + endPointDetail);

						var ciclos = 0;
						if (txtCodProd1 != '' && prod1.value != '') {
							ciclos = ciclos + 1;
						}
						if (txtCodProd2 != '' && prod2.value != '') {
							ciclos = ciclos + 1;
						}
						if (txtCodProd3 != '' && prod3.value != '') {
							ciclos = ciclos + 1;
						}
						
						console.log('<-------CICLOS: ' + ciclos);

						var list = [];
						for (var i = 0; i < ciclos; i++) {
							const detVen = new Object();
							detVen.cantidad_producto = (document.getElementById('txtCantidad' + (i + 1))).value;
							detVen.valor_total = totalFinal.value;
							detVen.valor_venta = totalVenta.value;
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
						console.log('<----------LISTA: ' + list);

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
										alert('Detalles de venta generados');
										console.log('HTTP STATUS OK');
										cleanAll();
										break;
									case 400:
										alert('Detalles de venta no generados');
										console.log('HTTP STATUS BAD REQUEST');
										break;
									case 500:
										alert('Detalles de venta no generados');
										console.log('HTTP STATUS SERVER ERROR');
										break;
									default:
										alert('Detalles de venta no generados');
										console.log('DEFAULT');
										break;
								}
							}
						};

						xhttpDetail.open("POST", endPointDetail, true);
						xhttpDetail.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
						xhttpDetail.send(JSON.stringify(list));
						var con = document.getElementById("txtConsecutivo");
						con.value = res;
						break;
					case 400:
						alert('Venta no generada');
						console.log('HTTP STATUS BAD REQUEST');
						break;
					case 500:
						alert('Venta no generada');
						console.log('HTTP STATUS SERVER ERROR');
						break;
					default:
						alert('Venta no generada');
						console.log('DEFAULT');
						break;
				}
			}
		};

		xhttp.open("POST", endPoint, true);
		xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xhttp.send(JSON.stringify(vent));
		//
	} else {
		alert('Los datos no están completos');
	}
}

function cleanAll() {
	var txtCedula = document.getElementById("txtCedula");
	txtCedula.value = '';
	var txtName = document.getElementById("txtName");
	txtName.value = '';
	var txtCodProd1 = document.getElementById("txtCodProd1");
	txtCodProd1.value = '';
	var txtCodProd2 = document.getElementById("txtCodProd2");
	txtCodProd2.value = '';
	var txtCodProd3 = document.getElementById("txtCodProd3");
	txtCodProd3.value = '';
	var txtNameProd1 = document.getElementById("txtNameProd1");
	txtNameProd1.value = '';
	var txtNameProd2 = document.getElementById("txtNameProd2");
	txtNameProd2.value = '';
	var txtNameProd3 = document.getElementById("txtNameProd3");
	txtNameProd3.value = '';
	var txtCantidad1 = document.getElementById("txtCantidad1");
	txtCantidad1.value = '';
	var txtCantidad2 = document.getElementById("txtCantidad2");
	txtCantidad2.value = '';
	var txtCantidad3 = document.getElementById("txtCantidad3");
	txtCantidad3.value = '';
	var txtTotal1 = document.getElementById("txtTotal1");
	txtTotal1.value = '';
	var txtTotal2 = document.getElementById("txtTotal2");
	txtTotal2.value = '';
	var txtTotal3 = document.getElementById("txtTotal3");
	txtTotal3.value = '';
	var txtTotalVenta = document.getElementById("txtTotalVenta");
	txtTotalVenta.value = '';
	var txtTotalIva = document.getElementById("txtTotalIva");
	txtTotalIva.value = '';
	var txtTotalFinal = document.getElementById("txtTotalFinal");
	txtTotalFinal.value = '';
}
