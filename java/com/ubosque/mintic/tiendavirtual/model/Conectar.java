package com.ubosque.mintic.tiendavirtual.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conectar {
	private final String USR = "admin";
	private final String DB = "Grupo02PonySalvaje";
	private final String PW = "MisionTIC2022GRUPO02";
	private final String URL = "jdbc:mysql://misiontic2022grupo02.czo3ixoe3xoe.us-east-1.rds.amazonaws.com:3306/" + DB
			+ "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";

	private Connection con = null;

	public Connection Con() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			this.con = DriverManager.getConnection(URL, USR, PW);
			if (this.con != null) {
				System.out.println("Conectado");
				return con;
			}
		} catch (SQLException | ClassNotFoundException e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	public void Cerrar() {
		try {
			this.con.close();
		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
		}
	}
}
