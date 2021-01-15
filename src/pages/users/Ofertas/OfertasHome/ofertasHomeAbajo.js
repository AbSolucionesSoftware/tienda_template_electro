import React from 'react'
import { Tabs, Row } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import OfertaEspecial from './ofertaEspecial';
import ConsultaOfertas from './consultaOfertas'
// import Productos from '../../Productos/productos'

const { TabPane } = Tabs;

function OfertasHomeAbajo() {
    return (
		<div className="d-flex justify-content-center align-items-center">
        <Row gutter={10} style={{ maxWidth: '95vw' }} className=" mt-4">
            <div className="col-lg-9">
                <Tabs defaultActiveKey="1" className="tabs-colors" centered style={{ fontSize: 18 }}>
                    <TabPane tab="Ofertas" key="1" >
                        <ConsultaOfertas />
                    </TabPane>
                </Tabs>
                <div className="d-flex justify-content-center">
                    <Link to={`/ofertas`} style={{ fontSize: 18 }}>
                        Ver todas las ofertas
                    </Link>
                </div>
            </div>
            <div className="col-lg-3">
                <OfertaEspecial />
            </div>
        </Row>
        </div>
    )
}

export default withRouter(OfertasHomeAbajo);