package com.ubosque.mintic.tiendavirtual.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ubosque.mintic.tiendavirtual.model.Usuario;

public interface UsuarioDAO extends JpaRepository<Usuario, Integer> {
	
	@Query(value = "SELECT * FROM usuarios WHERE usuario=:user AND password=:pass LIMIT 1;", nativeQuery = true)
    Usuario getLogin(@Param("user") String user,@Param("pass") String pass);
}
