function cargarArchivo() {
	// let formData = new FormData();
	// formData.append("file", fileupload.files[0]);
	var list = [];

	var csv = fileupload.files[0];
	var reader = new FileReader();

	reader.onload = function(event) {
		var text = event.target.result;

		const rows = text.slice(0).split("\n");

		for (var i = 0; i < rows.length; i++) {
			var fields = rows[i].split(",");
			const prod = new Object();
			prod.ivacompra = String(fields[0].trim());
			const prov = new Object();
			prov.nitproveedor = String(fields[1].trim())
			prod.nitproveedor = prov;
			prod.nombre_producto = String(fields[2].trim());
			prod.precio_compra = String(fields[3].trim());
			prod.precio_venta = String(fields[4].trim());
			list.push(prod);
		}

		console.log("LISTA: " + JSON.stringify(list));

		var endPoint = document.URL.substr(0, document.URL.indexOf("/" + 1, 8) + 1) + 'producto/guardar';

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
						alert('Productos creados');
						break;
					case 400:
						console.log('HTTP STATUS BAD REQUEST');
						alert('Productos no creados');
						break;
					case 500:
						console.log('HTTP STATUS SERVER ERROR');
						alert('Productos no creados');
						break;
					default:
						console.log('DEFAULT');
						alert('Productos no creados');
						break;
				}
			}
		};

		xhttp.open("POST", endPoint, true);
		xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xhttp.send(JSON.stringify(list));

	}
	reader.readAsText(csv);
}
