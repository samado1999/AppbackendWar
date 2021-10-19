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

import com.ubosque.mintic.tiendavirtual.dao.ClienteDAO;
import com.ubosque.mintic.tiendavirtual.model.Cliente;

@CrossOrigin(origins = "*")
@RestController // esta es una clase REST
@RequestMapping("cliente")
public class ClienteAPI {
	@Autowired // inyecta la dependencia de todos los métodos del JPA para usuarioDAO
	private ClienteDAO clienteDAO;

	@PostMapping("/guardar") // Request convierte en un objeto Java desde un JSon
	public void guardar(@RequestBody Cliente cliente) {
		clienteDAO.save(cliente);
	}

	@GetMapping("/listarById/{id}")
	public Optional<Cliente> listar(@PathVariable("id") Integer id) {
		return clienteDAO.findById(id);
	}

	@DeleteMapping("/eliminar/{id}")
	public Boolean eliminar(@PathVariable("id") Integer id) {
		if (this.listar(id).isPresent()) {
			clienteDAO.deleteById(id);
			return true;
		} else {
			System.out.println("USUARIO NO EXISTE");
			return false;
		}
	}

	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Cliente cliente) {
		
		clienteDAO.save(cliente);
	}
	
	@GetMapping("/listar")
	public List<Cliente> listar() {
		return clienteDAO.findAll();
	}
}
