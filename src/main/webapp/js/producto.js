async function cargarArchivo() {
	let formData = new FormData();
	formData.append("file", fileupload.files[0]);

	var csv = fileupload.files[0];
	var reader = new FileReader();
	
	reader.onload = function (event) {
		var text = event.target.result;
		var data = csvToArray(text);
		console.log(data);
		
		for (var i = 0; i < data.length; i++) {
			var jsonRequest = JSON.stringify(
            {
                "cedula_cliente": String(cedula),
                "email_cliente": String(email),
                "direccion_cliente": String(direccion),
                "telefono_cliente": String(telefono),
                "nombre_cliente": String(nombre)
            });
		}
	}
	reader.readAsText(csv);
	/*
	let response = await
		fetch('http://localhost:8090/producto/cargarArchivo', {
			method: "POST",
			body: formData
		});
	if (response.status == 200) {
		alert(JSON.stringify(response));
	} else if(response.status == 500) {
		alert(JSON.stringify(response));
	}
	*/
}

function csvToArray(str, delimiter = ",") {
  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  // return the array
  return arr;
}
