/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Carousel from './Carusel_ofertas/carousel';
/* import ConsultaProductos from './Productos/consulta_productos'; */
import Ofertas from './Ofertas/ofertasHome';
import Datos_tienda from './Datos_tienda/datos_tienda'
import Banner_Promocion from './BannerPromociones/BannerPromocion'
import './home.scss'
import Categorias from '../../components/Categorias/Categorias';

export default function Home(props) {

	return (
		<div>
			<div>
				<div className="container-prin">
					<div className="container-categorias">
						<Categorias />
					</div>
					<div className="col-lg-12 container-carrusel">
						<Carousel />
					</div>
				</div>
			</div>
			<div className="contenedor-home-background">
				<div className="row contenedor-home-banner">
					<div className="text-center textos-home col-lg-4 col-12">
						<h2 className="mb-0">REALIZA TU PAGO EN LÍNEA</h2>
						<p>ACEPTAMOS PAGOS CON TARJETA</p>
					</div>
					<div className="text-center textos-home divider-home-banner col-lg-4 col-12 ">
						<h2 className="mb-0">ENVÍO GRATUITO</h2>
						<p>EN PEDIDOS MAYORES A $1500.00</p>
					</div>
					<div className="text-center textos-home col-lg-4 col-12">
						<h2 className="mb-0">APARTA TU PRODUCTO FAVORITO</h2>
						<p>PUEDES APARTAR TU PEDIDO Y PASAR POR EL</p>
					</div>
				</div>
			</div>
			<Ofertas />
			<Banner_Promocion />
			{/* <ConsultaProductos propiedades={props} /> */}
            <Datos_tienda />
		</div>
	);
}
