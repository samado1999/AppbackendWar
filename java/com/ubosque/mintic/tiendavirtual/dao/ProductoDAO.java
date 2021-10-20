package com.ubosque.mintic.tiendavirtual.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ubosque.mintic.tiendavirtual.model.Producto;

public interface ProductoDAO extends JpaRepository<Producto, Integer> {
}
