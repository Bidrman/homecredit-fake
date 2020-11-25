import React from 'react'
import { Col, Container } from 'reactstrap'
import Navbar from 'react-bootstrap/Navbar'

import LinkedIn from '../../components/icons/linkedin'
import Facebook from '../../components/icons/fb'
import Youtube from '../../components/icons/youtube'

const Subfooter = () => {
    return (
        <Container>
            <Navbar expand={'lg'} collapseOnSelect className={'w-100 subfooter__navigation'}>
                <Col>
                    <Navbar.Toggle aria-controls='footerAirbank'>
                        <h4 className='text-uppercase font-weight-bold text-black mb-3 font-16 ls-1'>
                            Naše produkty
                        </h4>
                    </Navbar.Toggle>
                    <h4 className='text-uppercase font-weight-bold text-black mb-3 ghost font-16 ls-1'>
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
                        <h4 className='text-uppercase font-weight-bold text-black mb-3  font-16 ls-1'>
                            O home credit
                        </h4>
                    </Navbar.Toggle>
                    <h4 className='text-uppercase font-weight-bold text-black mb-3 ghost font-16 ls-1'>
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
                        <h4 className='text-uppercase font-weight-bold text-black mb-3 font-16 ls-1'>
                            Podpora
                        </h4>
                    </Navbar.Toggle>
                    <h4 className='text-uppercase font-weight-bold text-black mb-3 ghost font-16 ls-1'>
                        Podpora
                    </h4>
                    <Navbar.Collapse id={'footerSupport'} className={'d-flex flex-column'}>
                        <div className={'phone-number d-flex flex-column'}>
                            <a className={''} href='#'>
                                +&nbsp;420&nbsp;542&nbsp;100&nbsp;100
                            </a>
                            <span className=''>V pracovní dny od 8 do 18 hodin</span>
                        </div>
                        <ul className='subfooter__list'>
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
                    <h4 className='text-uppercase font-weight-bold text-black mb-3  font-16 ls-1'>
                        Sociální sítě
                    </h4>
                    <div className='mb-3 d-flex flex-row align-items-center'>
                        <div className='icon mr-2'>
                            <Facebook width='24' height='24' fill='#404040' />
                        </div>
                        <div className='icon mr-2'>
                            <Youtube width='24' height='24' fill='#404040' />
                        </div>
                        <div className='icon mr-2'>
                            <Facebook width='24' height='24' fill='#404040' />
                        </div>
                        <div className='icon mr-2'>
                            <LinkedIn width='24' height='24' fill='#404040' />
                        </div>
                    </div>
                </Col>
            </Navbar>
        </Container>
    )
}

export default Subfooter
