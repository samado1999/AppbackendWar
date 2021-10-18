package com.ubosque.mintic.tiendavirtual.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "detalle_ventas")
public class DetalleVenta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigo_detalle_venta;
	private Integer cantidad_producto;
	private Double valor_total;
	private Double valor_venta;
	private Double valoriva;
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "codigo_venta")
	private Venta codigo_venta;
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "codigo_producto")
	private Producto codigo_producto;

	public Integer getCodigo_detalle_venta() {
		return codigo_detalle_venta;
	}

	public void setCodigo_detalle_venta(Integer codigo_detalle_venta) {
		this.codigo_detalle_venta = codigo_detalle_venta;
	}

	public Integer getCantidad_producto() {
		return cantidad_producto;
	}

	public void setCantidad_producto(Integer cantidad_producto) {
		this.cantidad_producto = cantidad_producto;
	}

	public Double getValor_total() {
		return valor_total;
	}

	public void setValor_total(Double valor_total) {
		this.valor_total = valor_total;
	}

	public Double getValor_venta() {
		return valor_venta;
	}

	public void setValor_venta(Double valor_venta) {
		this.valor_venta = valor_venta;
	}

	public Double getValoriva() {
		return valoriva;
	}

	public void setValoriva(Double valoriva) {
		this.valoriva = valoriva;
	}

	public Venta getCodigo_venta() {
		return codigo_venta;
	}

	public void setCodigo_venta(Venta codigo_venta) {
		this.codigo_venta = codigo_venta;
	}

	public Producto getCodigo_producto() {
		return codigo_producto;
	}

	public void setCodigo_producto(Producto codigo_producto) {
		this.codigo_producto = codigo_producto;
	}

}
