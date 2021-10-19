package com.ubosque.mintic.tiendavirtual.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.ubosque.mintic.tiendavirtual.model.Cliente;
import com.ubosque.mintic.tiendavirtual.model.Conectar;
import com.ubosque.mintic.tiendavirtual.model.Venta;

public class ComprasCliente extends Conectar {

	private PreparedStatement ps;

	public ArrayList<Venta> list() {
		try {
			ArrayList<Venta> list = new ArrayList<>();
			this.ps = this.Con().prepareStatement(
					"SELECT clientes.cedula_cliente, clientes.nombre_cliente, SUM(ventas.total_venta) AS sum_ventas FROM ventas JOIN clientes ON ventas.cedula_cliente=clientes.cedula_cliente GROUP BY ventas.cedula_cliente;");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Venta ventaDTO = new Venta();
				Cliente clientDTO = new Cliente();
				clientDTO.setCedula_cliente(Integer.valueOf(rs.getString(1)));
				clientDTO.setNombre_cliente(rs.getString(2));
				ventaDTO.setCedula_cliente(clientDTO);
				ventaDTO.setTotal_suma(Double.valueOf(rs.getString(3)));
				list.add(ventaDTO);
			}
			return list;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}
}
