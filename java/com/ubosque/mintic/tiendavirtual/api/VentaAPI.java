package com.ubosque.mintic.tiendavirtual.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.mintic.tiendavirtual.dao.ComprasCliente;
import com.ubosque.mintic.tiendavirtual.dao.VentaDAO;
import com.ubosque.mintic.tiendavirtual.model.Venta;

@CrossOrigin(origins = "*")
@RestController // esta es una clase REST
@RequestMapping("venta")
public class VentaAPI {

	@Autowired // inyecta la dependencia de todos los métodos del JPA para
	private VentaDAO ventaDAO;
	
	private ComprasCliente comprasCliente;

	@GetMapping("/listarClients")
	public List<Venta> listarClients() {
		comprasCliente = new ComprasCliente();
		return comprasCliente.list();
		// return ventaDAO.getLastTwentyRecords();
	}
	
	@GetMapping("/sumVentas")
	public String sumVentas() {
		return ventaDAO.getSumVentas();
	}

	@PostMapping("/guardar") // Request convierte en un objeto Java desde un JSon
	public ResponseEntity<String> guardar(@RequestBody Venta venta) {
		ventaDAO.save(venta);

		System.out.println("COD VENTA: " + venta.getCodigo_venta());
		return new ResponseEntity<>(String.valueOf(venta.getCodigo_venta()), HttpStatus.OK);
	}
	
	@GetMapping("/listarClients2")
	public List<Venta> listarClients2() {
		return ventaDAO.getLastTwentyRecords2();
	}
}
