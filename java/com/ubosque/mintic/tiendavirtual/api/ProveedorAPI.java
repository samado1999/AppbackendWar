package com.ubosque.mintic.tiendavirtual.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.mintic.tiendavirtual.dao.ProveedorDAO;
import com.ubosque.mintic.tiendavirtual.model.Proveedor;

@CrossOrigin(origins = "*")
@RestController // esta es una clase REST
@RequestMapping("proveedor")
public class ProveedorAPI {
	@Autowired // inyecta la dependencia de todos los métodos del JPA para usuarioDAO
	private ProveedorDAO proveedorDAO;

	@PostMapping("/guardar") // Request convierte en un objeto Java desde un JSon
	public void guardar(@RequestBody Proveedor proveedor) {
		proveedorDAO.save(proveedor);
	}

	@GetMapping("/listarById/{id}")
	public Optional<Proveedor> listar(@PathVariable("id") Integer id) {
		return proveedorDAO.findById(id);
	}

	@DeleteMapping("/eliminar/{id}")
	public Boolean eliminar(@PathVariable("id") Integer id) {
		if (this.listar(id).isPresent()) {
			proveedorDAO.deleteById(id);
			return true;
		} else {
			System.out.println("USUARIO NO EXISTE");
			return false;
		}
	}

	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Proveedor proveedor) {
		
		proveedorDAO.save(proveedor);
	}
	
	@GetMapping("/listar")
	public List<Proveedor> listar() {
		return proveedorDAO.findAll();
	}
}
