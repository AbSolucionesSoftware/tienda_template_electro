import React, { useState, useEffect, useContext } from 'react';
import {  Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import './categorias.scss';
import './preloading.scss';
import clienteAxios from '../../config/axios';
import { MenuContext } from '../../context/carritoContext';

const { SubMenu } = Menu;

const Categorias = (props) => {
	const token = localStorage.getItem('token');
	const [ categorias, setCategorias ] = useState([]);
	const [ generos, setGeneros ] = useState([{_id: 'Todos'}]);
/* 	const [ loading, setLoading ] = useState(false); */
	// const { loading, setLoading } = useContext(MenuContext);

	const [ categoriaSeleccionada, setCategoriaSeleccionada, ] = useState('');
	const [ subcategoriaSeleccionada, setSubcategoriaSeleccionada, ] = useState('');
	/* const [ generoSeleccionado, setGeneroSeleccionado ] = useState(''); */

	useEffect(() => {
		obtenerCategorias();
		obtenerGeneros();
	}, []);

	async function obtenerCategorias() {
		// setLoading(true);
		await clienteAxios
			.get('/productos/filtrosNavbar', {
				headers: {
					Authorization: `bearer ${token}`
				}
			})
			.then((res) => {
				// setLoading(false);
				setCategorias(res.data);
				window.scrollTo(0, 0);
			})
			.catch((res) => {
				// setLoading(false);
			});
	}

	async function obtenerGeneros() {
		await clienteAxios
			.get('/productos/agrupar/generos')
			.then((res) => {
				setGeneros([...generos, ...res.data]);
			})
			.catch((res) => {
			});
	}
	
	if(!generos || !categorias){
		return null;
	}

	const categorias_nav = categorias.map((categoria) => {
		return (
			<SubMenu
				mode="vertical"
				key={categoria.categoria}
				title={categoria.categoria}
				// className="submenu-categoria nav-font-color-categorias container-subcategorias-nav size-submenu-cat"
				onTitleClick={(e) => {
					if(e.key === categoria.categoria){
						props.history.push(`/categorias/${categoria.categoria}`);
						setCategoriaSeleccionada(categoria.categoria);
						setSubcategoriaSeleccionada();
					}
					
				}}
			>
				{categoria.subcCategoria.map((sub) => {
					return (
						<Menu.Item
							// /* className="nav-font-color-categorias" */
							key={sub._id}
							onClick={() => {
								props.history.push(`/categorias/${categoriaSeleccionada}/${sub._id}`);
								setSubcategoriaSeleccionada(sub._id);

							}}
						>
							{sub._id}
						</Menu.Item>
					);
				})}
			</SubMenu>
		);
	});

	const categorias_generos = generos.map((generos) => {
		return (
			<Menu.Item
				mode="vertical"
				/* className="nav-font-color-categorias " */
				key={generos._id}
				onClick={() => {
					if(!categoriaSeleccionada && !subcategoriaSeleccionada ){
						props.history.push(`/categoria/${generos._id}`)
					}else if(categoriaSeleccionada && !subcategoriaSeleccionada){
						props.history.push(`/categoria/${categoriaSeleccionada}/${generos._id}`)
					}else if(categoriaSeleccionada && subcategoriaSeleccionada){
						props.history.push(`/categoria/${categoriaSeleccionada}/${subcategoriaSeleccionada}/${generos._id}`)
					}
				}}
			>
				{generos._id}
			</Menu.Item>
		);
	});

	return (
		<Layout className="container-subcategorias-nav size-layout-cat navbar-menu-general" >
			{/* className="container-subcategorias-nav d-lg-inline size-layout-cat" */}
			{/* <Spin className="ml-5 d-inline spin-nav-categorias" spinning={loading} /> */}
				{/* <div className="border-departamento">
					<h6 className="text-center" style={{marginTop: 10}}>Departamentos</h6>
				</div> */}
				<Menu
					inlineCollapsed={false}
					className="nav-font-color navbar-menu-general"
				>
				<SubMenu
					title="Categorias"
					className="d-inline size-menu-cat nav-font-color nav-border-color"
					defaultSelectedKeys={[ window.location.pathname ]}
					triggerSubMenuAction="click"
				>				
						{categorias_nav}
						{generos.length !== 0 ? (
							<SubMenu 
								title="Género"
								mode="vertical"
								className="submenu-categoria nav-font-color-categorias container-subcategorias-nav size-submenu-cat"
							>
								{categorias_generos}
							</SubMenu>
						) : (
							<Menu.Item className="d-none" />
						)}
				</SubMenu>
				</Menu>
		</Layout>
	);
};

export default withRouter(Categorias);
