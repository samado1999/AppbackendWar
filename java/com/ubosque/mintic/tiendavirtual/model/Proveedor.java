package com.ubosque.mintic.tiendavirtual.model;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "proveedores")
public class Proveedor {

	@Id
	private Integer nitproveedor;
	private String ciudad_proveedor;
	private String direccion_proveedor;
	private String nombre_proveedor;
	private String telefono_proveedor;
	@OneToMany(mappedBy = "nitproveedor", cascade = CascadeType.ALL)
    private List<Producto> productos;

	public Integer getNitproveedor() {
		return nitproveedor;
	}

	public void setNitproveedor(Integer nitproveedor) {
		this.nitproveedor = nitproveedor;
	}

	public String getCiudad_proveedor() {
		return ciudad_proveedor;
	}

	public void setCiudad_proveedor(String ciudad_proveedor) {
		this.ciudad_proveedor = ciudad_proveedor;
	}

	public String getDireccion_proveedor() {
		return direccion_proveedor;
	}

	public void setDireccion_proveedor(String direccion_proveedor) {
		this.direccion_proveedor = direccion_proveedor;
	}

	public String getNombre_proveedor() {
		return nombre_proveedor;
	}

	public void setNombre_proveedor(String nombre_proveedor) {
		this.nombre_proveedor = nombre_proveedor;
	}

	public String getTelefono_proveedor() {
		return telefono_proveedor;
	}

	public void setTelefono_proveedor(String telefono_proveedor) {
		this.telefono_proveedor = telefono_proveedor;
	}

}
