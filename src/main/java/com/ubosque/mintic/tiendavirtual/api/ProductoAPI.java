package com.ubosque.mintic.tiendavirtual.api;

import com.ubosque.mintic.tiendavirtual.dao.ProductoDAO;
import com.ubosque.mintic.tiendavirtual.model.Producto;

// import com.ubosque.mintic.tiendavirtual.dao.ProductoDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController // esta es una clase REST
@RequestMapping("producto")
public class ProductoAPI {

	@Autowired // inyecta la dependencia de todos los métodos del JPA para
	private ProductoDAO productoDAO;
	
	
	@PostMapping("/guardar") // Request convierte en un objeto Java desde un JSon
	public void guardar(@RequestBody Producto producto) {
		productoDAO.save(producto);
	}
}
