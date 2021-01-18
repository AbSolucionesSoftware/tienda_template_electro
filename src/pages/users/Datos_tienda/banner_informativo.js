import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import './banner.scss'

export default function BannerInformativo() {
    return (
        <div className=" container-fluid container-mini-banner">
            <div className="row">
                <div className="col-lg-8 card-informativa">
                    <p className="mr-5 mt-2 ">
                        Registrate para una mayor experiencia, en nuestra tienda
                    </p>    
                    <UserOutlined className style={{fontSize: 45}}/>
                  
                </div>
                <div className="col-lg-4 card-informativa">
                    <Link to="/perfiles">
                        <Button 
                            className="mt-2 color-boton"
                            shape="round"
                            size='large'
                            style={{fontSize: 20}}
                        >
                            Registrarse
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
