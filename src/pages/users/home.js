/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Carousel from './Carusel_ofertas/carousel';
import OfertasIzquierda from './Ofertas/OfertasHome/ofertasIzquierda'
import OfertasDerecha from './Ofertas/OfertasHome/ofertasDerecha';
import OfertasCentral from './Ofertas/OfertaCentral/ofertasCentral';
import OfertasGigantes from './Ofertas/OfertaGigante/ofertasGigantes'
import Banner_Promocion from './BannerPromociones/BannerPromocion';
import BannerInformativo from './Datos_tienda/banner_informativo';
import './home.scss'

/* import ConsultaProductos from './Productos/consulta_productos'; */
// import Datos_tienda from './Datos_tienda/datos_tienda'
// import Categorias from '../../components/Categorias/Categorias';

export default function Home(props) {

	return (
		<div>
			<Carousel />
			{/* <div className="contenedor-home-background">
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
			</div> */}
			<OfertasIzquierda />
			<Banner_Promocion />
			<OfertasGigantes />
			<OfertasDerecha/>
			<OfertasCentral />
			<BannerInformativo />
			{/* <ConsultaProductos propiedades={props} /> */}
            {/* <Datos_tienda /> */}
		</div>
	);
}
