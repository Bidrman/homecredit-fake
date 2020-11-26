import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Navbar from 'react-bootstrap/Navbar'

import Google from '../../components/icons/googleStore'
import Apple from '../../components/icons/ios'
import logo from '../../files/images/logo/bitmap.png'
import LinkedIn from '../../components/icons/linkedin'
import Facebook from '../../components/icons/fb'
import Youtube from '../../components/icons/youtube'

const Subfooter = () => {
    return (
        <Container>
            <div className={'subfooter__inner-container'}>
                <div className={'subfooter__strip bg-light'}></div>
                <Navbar expand={'md'} collapseOnSelect className={'w-100 subfooter__navigation'}>
                    <Col xs='12' sm='6' md='3'>
                        <Navbar.Toggle aria-controls='footerHomecredit'>
                            <h4 className='text-uppercase font-weight-bold text-black mb-3 font-16 ls-1'>
                                Naše produkty
                            </h4>
                        </Navbar.Toggle>
                        <h4 className='text-uppercase font-weight-bold text-black mb-3 ghost font-16 ls-1 '>
                            Naše produkty
                        </h4>
                        <Navbar.Collapse id={'footerHomecredit '}>
                            <ul className='subfooter__list align-items-center align-items-md-start justify-content-start'>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Půjčky
                                    </a>
                                </li>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Karty
                                    </a>
                                </li>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Konsolidace
                                    </a>
                                </li>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Nákup na splátky
                                    </a>
                                </li>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Financování auta
                                    </a>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Col>
                    <Col xs='12' sm='6' md='3'>
                        <Navbar.Toggle aria-controls='footerOffer'>
                            <h4 className='text-uppercase font-weight-bold text-black mb-3  font-16 ls-1'>
                                O home credit
                            </h4>
                        </Navbar.Toggle>
                        <h4 className='text-uppercase font-weight-bold text-black mb-3 ghost font-16 ls-1'>
                            O home credit
                        </h4>
                        <Navbar.Collapse
                            id={'footerOffer'}
                            className={'align-items-center align-items-md-start '}
                        >
                            <ul className='subfooter__list'>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        O nás
                                    </a>
                                </li>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Kariéra
                                    </a>
                                </li>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Pro partnery
                                    </a>
                                </li>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Důležité dokumenty
                                    </a>
                                </li>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Kontakty
                                    </a>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Col>

                    <Col xs='12' sm='6' md='3'>
                        <Navbar.Toggle aria-controls='footerSupport'>
                            <h4 className='text-uppercase font-weight-bold text-black mb-3 font-16 ls-1'>
                                Podpora
                            </h4>
                        </Navbar.Toggle>
                        <h4 className='text-uppercase font-weight-bold text-black mb-3 ghost font-16 ls-1'>
                            Podpora
                        </h4>
                        <Navbar.Collapse
                            id={'footerSupport'}
                            className={
                                'd-flex flex-column text-left align-items-center align-items-md-start justify-content-start'
                            }
                        >
                            <div className={'phone-number d-flex flex-column mb-4'}>
                                <a
                                    className={'font-24 text-black font-weight-bold phone-number-anchor'}
                                    href='tel: +420542100100'
                                >
                                    +&nbsp;420&nbsp;542&nbsp;100&nbsp;100
                                </a>
                                <span className=''>V pracovní dny od 8 do 18 hodin</span>
                            </div>
                            <ul className='subfooter__list'>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Nejdůležitější dotazy
                                    </a>
                                </li>
                                <li className='subfooter__list-item mb-1'>
                                    <a href='#' className='subfooter__link'>
                                        Dokumenty ke stažení
                                    </a>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Col>
                    <Col xs='12' sm='6' md='2'>
                        <h4 className='text-uppercase font-weight-bold text-black mb-3  font-16 ls-1'>
                            Sociální sítě
                        </h4>
                        <div className='mt-2 mb-3 d-flex flex-row align-items-center justify-content-center justify-content-lg-start'>
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
                <div className={'subfooter__apps'}>
                    <Col xs='12' className={'py-4 d-flex justify-content-center bg-light w-100'}>
                        <div>
                            <Google fill='#fff' />
                        </div>
                        <div className={'mx-2'}>
                            <img src={logo} alt='noAlt' />
                        </div>
                        <div>
                            <Apple />
                        </div>
                    </Col>
                    <Col xs='12' className={'px-0 pt-4 w-100 d-flex flex-row justify-content-start'}>
                        <Col xs='6' md='5' className={'px-0'}>
                            <span className={'font-14'}>
                                @ 2019 Home Credict a.s., Nové sady 996/25, 602 00 Brno
                            </span>
                        </Col>
                        <Col xs='6' md='3'>
                            <span className={'font-14'}>Webdesign & development by SiteOne</span>
                        </Col>
                    </Col>
                </div>
            </div>
        </Container>
    )
}

export default Subfooter
