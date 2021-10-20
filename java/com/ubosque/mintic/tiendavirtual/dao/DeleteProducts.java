package com.ubosque.mintic.tiendavirtual.dao;

import java.sql.PreparedStatement;
import java.util.List;

import com.ubosque.mintic.tiendavirtual.model.Conectar;
import com.ubosque.mintic.tiendavirtual.model.Producto;

public class DeleteProducts extends Conectar {
	private PreparedStatement ps;

	public void turnOff() {
		try {
			this.ps = this.Con().prepareStatement("SET FOREIGN_KEY_CHECKS=0;");
			this.ps.execute();
			this.Cerrar();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public void turnOn() {
		try {
			this.ps = this.Con().prepareStatement("SET FOREIGN_KEY_CHECKS=1;");
			this.ps.execute();
			this.Cerrar();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public void deleteAll(List<Producto> productos) {
		try {
			this.ps = this.Con().prepareStatement("DELETE FROM productos WHERE codigo_producto IN " + productos + ";");
			this.ps.executeUpdate();
			this.Cerrar();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
