import React from 'react'
import { Row } from 'antd';
import { withRouter } from 'react-router-dom';
import ConsultaOfertaGigante from './consultaOfertaGigante'
import ConsultaOfertas from './consultaOfertas'
// import Productos from '../../Productos/productos'

function OfertasGigantes() {
    return (
		<div className="d-flex justify-content-center align-items-center">
            <Row gutter={10} style={{ maxWidth: '95vw' }} className="mt-4">
                <div className="col-lg-3">
                    <ConsultaOfertas />
                </div>
                <div className="col-lg-6 mt-5">
                    <ConsultaOfertaGigante/>
                </div>
                <div className="col-lg-3">
                    <ConsultaOfertas />
                </div> 
            </Row>
        </div>
    )
}

export default withRouter(OfertasGigantes);
