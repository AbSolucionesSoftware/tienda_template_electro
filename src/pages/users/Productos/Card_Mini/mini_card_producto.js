import React from 'react';
import aws from '../../../../config/aws';
// import DOMPurify from 'dompurify';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { formatoMexico, agregarPorcentaje } from '../../../../config/reuserFunction';
import './mini_cards.scss'

const gridStyle = { width: '100%', padding: 0, marginBottom: '1.5rem' };

export default function MiniCards(props) {
	const { productos } = props;

	if (productos.precioPromocion) {
		return (
			<div key={productos._id} className="size-col col-lg-4 col-6">
				<Link to={`/vista_producto/${productos.productoPromocion._id}`}>
					<Card.Grid
						hoverable 
						style={gridStyle} 
						className="contenedor-card-producto-principal" 
					>				
						<Card
							className="mini-contenedor-card-body"
						>
							<div className="row">
								<div className="col-lg-4">
									<div className="mini-contenedor-oferta">
										<p className="h4 d-inline">
											{agregarPorcentaje(
												productos.precioPromocion,
												productos.productoPromocion.precio
											)}%OFF
										</p>
									</div>
									<div className="mini-contenedor-imagen-oferta">
										<div className="mini-contenedor-imagen-producto-principal">
											<img
												className="mini-imagen-producto-principal"
												alt="producto"
												src={aws + productos.productoPromocion.imagen}
											/>
										</div>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="mini-contenedor-titulos-productos titulo-elipsis">
										<h1 className="titulo-producto">{productos.productoPromocion.nombre}</h1>
									</div>
									<div className="cont-precios">
										<div className="mini-contenedor-precios-productos d-flex justify-content-end">
											<h2 className="h5 precio-producto rebajado mr-2">
												${formatoMexico(productos.productoPromocion.precio)}
											</h2>
											<h3 className="h5 card-precio-rebaja d-inline mr-1">
												${formatoMexico(productos.precioPromocion)}
											</h3>
										</div>
										<div className="d-flex flex-row-reverse">
											<Button
												shape="circle"
												className="color-boton" 
												icon={< ShoppingCartOutlined
														style={{ fontSize: 20 }}
													/>
												} 
											/>
										</div>
									</div>
								</div>
							</div>
						</Card>
					</Card.Grid>
				</Link>
			</div>
		);
	} else {
		return (
			<div key={productos._id} className="size-col col-lg-3 col-6">
				<Link to={`/vista_producto/${productos._id}`}>
					<Card.Grid
						hoverable 
						style={gridStyle} 
						className="contenedor-card-producto-principal"
					>
						<Card
							className="mini-contenedor-card-body"
						>
							<div className="row">
								<div className="col-lg-4">
									{productos.promocion.length !== 0 ? (
										productos.promocion.map((promo) => {
											return (
												<div key={promo._id} className="mini-contenedor-oferta">
													<p className="h4 d-inline">
														{agregarPorcentaje(promo.precioPromocion, productos.precio)}%OFF
													</p>
												</div>
											);
										})
									) : (
										<div className="d-none" />
									)}
									<div className="mini-contenedor-imagen-oferta">
										<div className="mini-contenedor-imagen-producto-principal">
											<img
												className="mini-imagen-producto-principal"
												alt="producto"
												src={aws + productos.imagen}
											/>
										</div>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="mini-contenedor-titulos-productos ">
										<h1 className="titulo-producto">{productos.nombre}</h1>
									</div>
									<div className="cont-precios">
										{!productos.promocion.length ? (
											<div className="mini-contenedor-precios-productos d-flex justify-content-end">
												<h3 className="h5 precio-rebaja">${formatoMexico(productos.precio)}</h3>
											</div>
										) : (
											productos.promocion.map((promo) => {
												return (
													<div className="mini-contenedor-precios-productos d-flex justify-content-end" key={promo._id}>
														<h2 className="h5 precio-producto rebajado mr-2">
															${formatoMexico(productos.precio)}
														</h2>
														<h3 className="h5 mini-precio-rebaja d-inline mr-1">
															${formatoMexico(promo.precioPromocion)}
														</h3>
													</div>
												);
											})
										)}
										<div className="d-flex flex-row-reverse">
											<Button
												shape="circle"
												className="color-boton" 
												icon={< ShoppingCartOutlined
														style={{ fontSize: 20 }}
													/>
												} 
											/>
										</div>
									</div>
								</div>
							</div>
						</Card>
					</Card.Grid>
				</Link>
			</div>
		);
	}
}
