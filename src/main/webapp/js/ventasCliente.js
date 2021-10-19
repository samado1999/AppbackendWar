function getAllSales() {
	var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'venta/listarClients';

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

					var resTable = new Object();
					list = new Array();
					for (var i = 0; i < res.length; i++) {
						var resTable = new Object();
						resTable.cedula_cliente = res[i].cedula_cliente.cedula_cliente;
						resTable.nombre_cliente = res[i].cedula_cliente.nombre_cliente;
						resTable.total_venta = res[i].total_suma;
						list.push(resTable);
					}

					var col = [];
					for (i = 0; i < list.length; i++) {
						console.log('<---------' + JSON.stringify(list[i]));
						var tr = document.createElement('tr'); // create a td node
						for (var key in list[i]) {
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
						th.innerHTML = 'NOMBRE';
						tr.appendChild(th);

						var th = document.createElement("th");      // TABLE HEADER.
						th.innerHTML = 'VALOR TOTAL VENTAS';
						tr.appendChild(th);

						/*
						for (var i = 0; i < col.length; i++) {
							var th = document.createElement("th");      // TABLE HEADER.
							th.innerHTML = col[i];
							tr.appendChild(th);
						}
						*/

						// ADD JSON DATA TO THE TABLE AS ROWS.
						for (var i = 0; i < list.length; i++) {

							tr = table.insertRow(-1);

							for (var j = 0; j < col.length; j++) {
								var tabCell = tr.insertCell(-1);
								tabCell.innerHTML = list[i][col[j]];
							}
						}

						// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
						var divContainer = document.getElementById("showData");
						divContainer.innerHTML = "";
						divContainer.appendChild(table);
					}
					
					var endPointDetail = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'venta/sumVentas';

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
									var texto = document.getElementById('txtSumVentas');
									texto.value = xhttpDetail.response;
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

					xhttpDetail.open("GET", endPointDetail, true);
					xhttpDetail.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
					xhttpDetail.send();

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