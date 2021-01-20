import React, { useState, useEffect } from 'react';
import clienteAxios from '../../../../config/axios';
import { Result, Row } from 'antd';
import {withRouter } from 'react-router-dom';
import '../ofertas.scss';
import ComponenteProductoGrande from '../../Productos/Card_Grande/componente_producto_grande';
import CardSecundaria from '../../Productos/Card_Secundaria/card_secundaria';

import Spin from '../../../../components/Spin';

function ConsultaOfertasEspecial(props) {
	const {orientacion} = props;
	
	const [ productos, setProductos ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		obtenerProductos();
	}, []);

	async function obtenerProductos() {
		setLoading(true);
		await clienteAxios
			.get(`/productos/promociones?limit=${5}&page=${1}`)
			.then((res) => {
				setProductos(res.data.posts.docs);
				setLoading(false);
			})
			.catch((err) => {
				props.history.push('/error500');
			});
	}

	const render = productos.map((productos, index) => {
		if(orientacion == "derecha"){
			if(index === 4){
				return  <ComponenteProductoGrande key={productos._id} productos={productos} />
			}else{
				return <CardSecundaria  key={productos._id} productos={productos}/>
			}
		}else{

		if(index === 0){
			return  <ComponenteProductoGrande key={productos._id} productos={productos} />
		}else{
			return <CardSecundaria  key={productos._id} productos={productos}/>
		}
	}

	});
		

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

export default withRouter(ConsultaOfertasEspecial);
