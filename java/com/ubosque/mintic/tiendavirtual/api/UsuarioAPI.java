package com.ubosque.mintic.tiendavirtual.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
/*
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
*/
import org.springframework.web.bind.annotation.*;

import com.ubosque.mintic.tiendavirtual.dao.UsuarioDAO;
import com.ubosque.mintic.tiendavirtual.model.Usuario;

@CrossOrigin(origins = "*")
@RestController // esta es una clase REST
@RequestMapping("usuario")
public class UsuarioAPI {
	@Autowired // inyecta la dependencia de todos los métodos del JPA para usuarioDAO
	private UsuarioDAO usuarioDAO;

	@PostMapping("/guardar") // Request convierte en un objeto Java desde un JSon
	public void guardar(@RequestBody Usuario usuario) {
		usuarioDAO.save(usuario);
	}

	@GetMapping("/listarById/{id}")
	public Optional<Usuario> listar(@PathVariable("id") Integer id) {
		return usuarioDAO.findById(id);
	}

	@DeleteMapping("/eliminar/{id}")
	public Boolean eliminar(@PathVariable("id") Integer id) {
		if (!this.listar(id).isEmpty()) {
			usuarioDAO.deleteById(id);
			return true;
		} else {
			System.out.println("USUARIO NO EXISTE");
			return false;
		}
	}

	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Usuario usuario) {
		
		usuarioDAO.save(usuario);
	}
	
	@GetMapping("/listar")
	public List<Usuario> listar() {
		return usuarioDAO.findAll();
	}
	
	
	@PostMapping("/login")
	public Boolean login(@RequestBody Usuario usuario) {
		if (usuarioDAO.getLogin(usuario.getUsuario(), usuario.getPassword()) != null) {
			return true;
		} else {
			return false;
		}
	}
}
