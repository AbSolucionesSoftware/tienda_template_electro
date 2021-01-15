import React from 'react';
import aws from '../../../config/aws';
// import DOMPurify from 'dompurify';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

import { ShoppingCartOutlined } from '@ant-design/icons';
import { formatoMexico, agregarPorcentaje } from '../../../config/reuserFunction';

const gridStyle = { width: '100%', padding: 0, marginBottom: '1.5rem' };

export default function ComponenteProductos(props) {
	const { productos } = props;

	if (productos.precioPromocion) {
		return (
			<div key={productos._id} className="size-col col-lg-2 col-6">
				<Link to={`/vista_producto/${productos.productoPromocion._id}`}>
					<Card
						hoverable 
						style={gridStyle} 
						className="contenedor-card-producto-principal" 
						bordered={false}
					>
						<div className="contenedor-oferta">
							<p className="h4 porcentaje-descuento d-inline">
								{agregarPorcentaje(
									productos.precioPromocion,
									productos.productoPromocion.precio
								)}%OFF
							</p>
						</div>
						<Card
							bordered={false}
							cover={
								<div>
									<div className="contenedor-imagen-oferta">
										{/* <div className="contenedor-oferta">
											<h5 className="shadow">OFERTA</h5>
										</div> */}
										<div className="contenedor-imagen-producto-principal">
											<img
												className="imagen-producto-principal"
												alt="producto"
												src={aws + productos.productoPromocion.imagen}
											/>
										</div>
									</div>
								</div>
							}
						>
							<div className="contenedor-titulos-productos titulo-elipsis">
								<h1 className="titulo-producto">{productos.productoPromocion.nombre}</h1>
								{/* <div
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(productos.productoPromocion.descripcion)
									}}
								/> */}
							</div>						
							<div className="contenedor-precios-productos">
								<h2 className="h5 precio-producto rebajado mr-2">
									${formatoMexico(productos.productoPromocion.precio)}
								</h2>
								<h3 className="h5 card-precio-rebaja d-inline mr-1">
									${formatoMexico(productos.precioPromocion)}
								</h3>
								
							</div>
						</Card>
						<div className="d-flex flex-row-reverse">
							<Button
								size="large"
								shape="circle"
								className="color-boton" 
								icon={<ShoppingCartOutlined style={{fontSize: 25}}/>} 
							/>
						</div>
					</Card>
				</Link>
			</div>
		);
	} else {
		return (
			<div key={productos._id} className="size-col col-lg-2 col-6">
				<Link to={`/vista_producto/${productos._id}`}>
					<Card
						hoverable 
						style={gridStyle} 
						className="contenedor-card-producto-principal" 
						bordered={false}
					>
						{productos.promocion.length !== 0 ? (
							productos.promocion.map((promo) => {
								return (
									<div key={promo._id} className="contenedor-oferta">
										<p className="h4 porcentaje-descuento d-inline">
											{agregarPorcentaje(promo.precioPromocion, productos.precio)}% OFF
										</p>
										{/* <h5 className="shadow">OFERTA</h5> */}
										{/* <p>-{agregarPorcentaje(promo.precioPromocion, productos.precio)}%</p> */}
									</div>
								);
							})
						) : (
							<div className="d-none" />
						)}

						<Card
							bordered={false}
							cover={
								<div className="contenedor-imagen-oferta">									
									<div className="contenedor-imagen-producto-principal">
										<img
											className="imagen-producto-principal"
											alt="producto"
											src={aws + productos.imagen}
										/>
									</div>
								</div>
							}
						>
							<div className="contenedor-titulos-productos titulo-elipsis">
								<h1 className="titulo-producto">{productos.nombre}</h1>
								{/* <div
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(productos.descripcion)
									}}
								/> */}
							</div>
							{!productos.promocion.length ? (
								<div className="contenedor-precios-productos">
									<h3 className="">${formatoMexico(productos.precio)}</h3>
								</div>
							) : (
								productos.promocion.map((promo) => {
									return (
										<div className="contenedor-precios-productos" key={promo._id}>
											<h2 className="h5 precio-producto rebajado mr-2">
												${formatoMexico(productos.precio)}
											</h2>
											<h3 className="h5 card-precio-rebaja d-inline mr-1">
												${formatoMexico(promo.precioPromocion)}
											</h3>
										</div>
									);
								})
							)}
						</Card>
						<div className="d-flex flex-row-reverse">
							<Button
								size="large"
								shape="circle"
								className="color-boton" 
								icon={< ShoppingCartOutlined
										style={{ fontSize: 25 }}
									/>
								} 
							/>
						</div>
					</Card>
				</Link>
			</div>
		);
	}
}
