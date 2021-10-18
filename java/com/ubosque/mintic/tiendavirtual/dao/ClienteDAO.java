package com.ubosque.mintic.tiendavirtual.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ubosque.mintic.tiendavirtual.model.Cliente;

public interface ClienteDAO extends JpaRepository<Cliente, Integer> {
	
}
