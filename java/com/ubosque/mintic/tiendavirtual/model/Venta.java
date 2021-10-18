package com.ubosque.mintic.tiendavirtual.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "ventas")
public class Venta {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer codigo_venta;
	private Double ivaventa;
	private Double total_venta;
	private Double valor_venta;
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "cedula_cliente")
	@Fetch(FetchMode.JOIN)
	private Cliente cedula_cliente;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "cedula_usuario")
	private Usuario cedula_usuario;

	private Double total_suma;

	public Integer getCodigo_venta() {
		return codigo_venta;
	}

	public void setCodigo_venta(Integer codigo_venta) {
		this.codigo_venta = codigo_venta;
	}

	public Double getIvaventa() {
		return ivaventa;
	}

	public void setIvaventa(Double ivaventa) {
		this.ivaventa = ivaventa;
	}

	public Double getTotal_venta() {
		return total_venta;
	}

	public void setTotal_venta(Double total_venta) {
		this.total_venta = total_venta;
	}

	public Double getValor_venta() {
		return valor_venta;
	}

	public void setValor_venta(Double valor_venta) {
		this.valor_venta = valor_venta;
	}

	public Cliente getCedula_cliente() {
		return cedula_cliente;
	}

	public void setCedula_cliente(Cliente cedula_cliente) {
		this.cedula_cliente = cedula_cliente;
	}

	public Usuario getCedula_usuario() {
		return cedula_usuario;
	}

	public void setCedula_usuario(Usuario cedula_usuario) {
		this.cedula_usuario = cedula_usuario;
	}

	public Double getTotal_suma() {
		return total_suma;
	}

	public void setTotal_suma(Double total_suma) {
		this.total_suma = total_suma;
	}

}
