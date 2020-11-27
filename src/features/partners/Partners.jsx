import React from 'react'
import { Col, Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'

import Fotolab from '../../files/images/logo/fotolab.png'
import Dok from '../../files/images/logo/dok.png'
import Lekarna from '../../files/images/logo/lekarna.png'

const Partners = () => {
    return (
        <div className={'d-flex flex-column pb-1 pb-md-3 partners'}>
            <Col className={'text-center pb-1'}>
                <h3
                    className={
                        'text-uppercase text-black font-weight-bold font-28 mt-3 mt-md-5 partners__heading'
                    }
                >
                    Z porftolia našich partnerů
                </h3>
            </Col>
            <Col className={'d-flex flex-column align-items-center flex-md-row justify-content-between px-0'}>
                <Card className={'partners__card mb-3 mb-lg-4'}>
                    <CardBody className={'partners__image'}>
                        <CardTitle className={'w-75'}>
                            <h4 className={'mb-3 font-20 font-weight-bold partners__card-heading'}>
                                Čokoládový adventní kalendář Kinder
                            </h4>
                        </CardTitle>
                        <span className={'partners__text'}>Od 449,- Kč</span>
                        <div className={'partners__logo-wrapper mt-1'}>
                            <img src={Fotolab} alt='partner' />
                        </div>
                    </CardBody>
                </Card>
                <Card className={'partners__card mb-3 mb-lg-4'}>
                    <CardBody className={'partners__image'}>
                        <CardTitle className={'w-100'}>
                            <h4 className={'mb-4 font-20 font-weight-bold partners__card-heading'}>
                                Spravujte všechny vaše pojištění z jednoho místa
                            </h4>
                        </CardTitle>
                        <span className={'partners__text'}>Zdarma a online</span>
                        <div className={'partners__logo-wrapper'}>
                            <img src={Dok} alt='partner' />
                        </div>
                    </CardBody>
                </Card>
                <Card className={'partners__card mb-3 mb-lg-4'}>
                    <CardBody className={'partners__image'}>
                        <CardTitle className={'w-75 pr-1'}>
                            <h4 className={'mb-3 font-20 font-weight-bold partners__card-heading'}>
                                Nyní doprava ZDARMA k nákupu nad 599 Kč
                            </h4>
                        </CardTitle>
                        <div className={'partners__logo-wrapper'}>
                            <img src={Lekarna} alt='partner' />
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <p className={'text-center py-1 py-md-3'}>
                    <a href='#' className={'more-info'}>
                        Více o našich partnerech
                    </a>
                </p>
            </Col>
        </div>
    )
}

export default Partners
