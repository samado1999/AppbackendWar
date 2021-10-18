package com.ubosque.mintic.tiendavirtual.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ubosque.mintic.tiendavirtual.model.Venta;

public interface VentaDAO extends JpaRepository<Venta, Integer>{

	@Query(value = "SELECT * FROM ventas JOIN clientes ON ventas.cedula_cliente=clientes.cedula_cliente;", nativeQuery = true)
    List<Venta> getLastTwentyRecords();
	
	@Query(value = "SELECT SUM(total_venta) FROM ventas;", nativeQuery = true)
    String getSumVentas();

}
