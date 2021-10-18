package com.ubosque.mintic.tiendavirtual.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.mintic.tiendavirtual.dao.DetalleVentaDAO;
import com.ubosque.mintic.tiendavirtual.model.DetalleVenta;

@CrossOrigin(origins = "*")
@RestController // esta es una clase REST
@RequestMapping("detalleVenta")
public class DetalleVentaAPI {
	
	@Autowired // inyecta la dependencia de todos los métodos del JPA para
	private DetalleVentaDAO detalleVentaDAO;
	
	@PostMapping("/guardar") // Request convierte en un objeto Java desde un JSon
	public void guardar(@RequestBody List<DetalleVenta> detalleVenta) {
		detalleVentaDAO.saveAll(detalleVenta);
	}
}
