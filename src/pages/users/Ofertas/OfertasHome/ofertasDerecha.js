import React from 'react'
import { Tabs, Row } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import ConsultaOfertasEspecial from './consultaOfertaEspecial';
import ConsultaOfertas from './consultaOfertas'

const { TabPane } = Tabs;

function  OfertasDerecha() {
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
            <div className="col-lg-3 mt-3">
                <ConsultaOfertasEspecial />
            </div>
        </Row>
        </div>
    )
}

export default withRouter( OfertasDerecha);