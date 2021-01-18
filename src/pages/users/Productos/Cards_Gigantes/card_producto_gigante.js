import React from 'react';
import aws from '../../../../config/aws';
// import DOMPurify from 'dompurify';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './card_producto_gigante.scss';

// import { ShoppingCartOutlined } from '@ant-design/icons';
import { formatoMexico, agregarPorcentaje } from '../../../../config/reuserFunction';

const gridStyle = { width: '100%', padding: 0, marginBottom: '1.5rem' };

export default function CardProductoGigante(props) {
	const { productos } = props;

	if (productos.precioPromocion) {
		return (
			<div key={productos._id} className="mt-2">
				<Link to={`/vista_producto/${productos.productoPromocion._id}`}>
					<Card
						hoverable 
						style={gridStyle} 
						className="contenedor-card-oferta-gigante"
						bordered={false}
					>
						<div className="contenedor-oferta-gigante">
							<p className="d-inline">
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
										<div className="contenedor-imagen-oferta-gigante">
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
							<div className="contenedor-titulos-especial text-center">
								<h1 >{productos.productoPromocion.nombre}</h1>
							</div>
							<div className="contenedor-precios-gigantes d-flex justify-content-center mt-4">
								<h3 className="h5 card-precio-rebaja d-inline mr-2">
									${formatoMexico(productos.precioPromocion)}
								</h3>
								<h2 className="precio-producto rebajado mt-2">
									${formatoMexico(productos.productoPromocion.precio)}
								</h2>
							</div>
						</Card>
					</Card>
				</Link>
			</div>
		);
	} else {
		return (
			<div key={productos._id} className="size-col col-lg-2 col-6">
			</div>
		);
	}
}
