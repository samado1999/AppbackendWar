package com.ubosque.mintic.tiendavirtual.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.mintic.tiendavirtual.dao.VentaDAO;
import com.ubosque.mintic.tiendavirtual.model.Venta;

@CrossOrigin(origins = "*")
@RestController // esta es una clase REST
@RequestMapping("venta")
public class VentaAPI {
	
	@Autowired // inyecta la dependencia de todos los métodos del JPA para
	private VentaDAO ventaDAO;

	@GetMapping("/listarClients")
	public List<Venta> listarClients() {
		return ventaDAO.getLastTwentyRecords();
	}
	
	@PostMapping("/guardar") // Request convierte en un objeto Java desde un JSon
	public void guardar(@RequestBody Venta venta) {
		ventaDAO.save(venta);
	}
}
