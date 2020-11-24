import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Navbar from 'react-bootstrap/Navbar'

import { Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons'

const Subfooter = () => {
    return (
        <Container>
            <Navbar expand={'lg'} collapseOnSelect className={'w-100 subfooter__navigation'}>
                <Col>
                    <Navbar.Toggle aria-controls='footerAirbank'>
                        <h4 className='text-uppercase font-weight-bold text-black mb-3 font-20'>
                            Naše produkty
                        </h4>
                    </Navbar.Toggle>
                    <h4 className='text-uppercase font-weight-bold text-black mb-3 ghost  font-20'>
                        Naše produkty
                    </h4>
                    <Navbar.Collapse id={'footerAirbank'}>
                        <ul className='subfooter__list'>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Půjčky
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Karty
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Konsolidace
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Nákup na splátky
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Financování auta
                                </a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Col>
                <Col>
                    <Navbar.Toggle aria-controls='footerOffer'>
                        <h4 className='text-uppercase font-weight-bold text-black mb-3  font-20'>
                            O home credit
                        </h4>
                    </Navbar.Toggle>
                    <h4 className='text-uppercase font-weight-bold text-black mb-3 ghost font-20'>
                        O home credit
                    </h4>
                    <Navbar.Collapse id={'footerOffer'}>
                        <ul className='subfooter__list'>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    O nás
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Kariéra
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Pro partnery
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Důležité dokumenty
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Kontakty
                                </a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Col>
                <Col>
                    <Navbar.Toggle aria-controls='footerSupport'>
                        <h4 className='text-uppercase font-weight-bold text-black mb-3 font-20'>Podpora</h4>
                    </Navbar.Toggle>
                    <h4 className='text-uppercase font-weight-bold text-black mb-3 ghost font-20'>Podpora</h4>
                    <Navbar.Collapse id={'footerSupport'}>
                        <ul className='subfooter__list'>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'></a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Nejdůležitější dotazy
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Dokumenty ke stažení
                                </a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Col>
                <Col>
                    <h4 className='text-uppercase font-weight-bold text-black mb-3  font-20'>
                        Sociální sítě
                    </h4>
                    <div className='mb-4'></div>
                    <div className='mb-3'></div>
                    <div className='mb-3'></div>
                    <div className='mb-3'></div>
                </Col>
            </Navbar>
        </Container>
    )
}

export default Subfooter
