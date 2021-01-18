import React, { useState, useEffect } from 'react';
import clienteAxios from '../../../../config/axios';
import { Result, Row } from 'antd';
import {withRouter } from 'react-router-dom';
import '../ofertas.scss';
import CardProductoGigante from '../../Productos/Cards_Gigantes/card_producto_gigante';
import Spin from '../../../../components/Spin';

function ConsultaOfertaGigante (props) {
	const [ productos, setProductos ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		obtenerProductos();
	}, []);

	async function obtenerProductos() {
		setLoading(true);
		await clienteAxios
			.get(`/productos/promociones?limit=${1}&page=${1}`)
			.then((res) => {
				setProductos(res.data.posts.docs);
				setLoading(false);
			})
			.catch((err) => {
				props.history.push('/error500');
			});
	}

	const render = productos.map((productos) => (
		<CardProductoGigante key={productos._id} productos={productos} />
	));

	if(productos.length === 0){
		return null;
	}

	return (
		<Spin spinning={loading}>
			<div className="d-flex justify-content-center align-items-center">
				<div className="">
					<Row gutter={10} style={{ maxWidth: '95vw' }} className=" mt-4">
						{productos.length ? (
							render
						) : (
							<div className="w-100 d-flex justify-content-center align-items-center">
								<Result status="404" title="Aun no hay ofertas" />
							</div>
						)}
					</Row>
				</div>
			</div>
		</Spin>
	);
}

export default withRouter( ConsultaOfertaGigante );
