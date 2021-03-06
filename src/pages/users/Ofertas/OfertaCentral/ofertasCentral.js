import React from 'react'
import { Tabs, Row } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import ConsultaOfertaEspecial from '../OfertasHome/consultaOfertaEspecial';
import ConsultaOfertas from './consultaOfertas'
// import Productos from '../../Productos/productos'

const { TabPane } = Tabs;

function OfertasCentral() {
    return (
		<div className="d-flex justify-content-center align-items-center">
            <Row gutter={10} style={{ maxWidth: '95vw' }} className="mt-4">
                <div className="col-lg-4">
                    <ConsultaOfertas />
                </div>
                <div className="col-lg-4 mt-5">
                    <ConsultaOfertaEspecial />
                </div>
                <div className="col-lg-4">
                    <ConsultaOfertas />
                </div> 
            </Row>
        </div>
    )
}

export default withRouter(OfertasCentral);
