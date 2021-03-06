import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Col, Container } from 'reactstrap'

import Homecredit from '../icons/homecredit'
import House from '../icons/house'
import Lock from '../icons/lock'
import Magnifier from '../icons/magnifier'

import styles from './Navigation.module.scss'

// import Link from '../link/Link'

const Navigation = () => {
    const [show, setShow] = useState(false)
    const showDropdown = (e) => {
        setShow(!show)
    }
    const hideDropdown = (e) => {
        setShow(false)
    }

    return (
        <Navbar expand={'lg'} collapseOnSelect className={'w-100 navigation'}>
            <Container className={'d-flex justify-content-end'}>
                <div className={`${styles.upperMenu}`}>
                    <Col xs='1' md='11' lg='12' className={'d-none d-md-block upper-navigation px-0'}>
                        <Nav className={'d-flex justify-content-end'}>
                            <Nav.Link className={`${styles.upperlink} px-3`}>
                                <Magnifier fill={'#404040'} width={'13'} height={'13'} />
                                Hledat
                            </Nav.Link>
                            <Nav.Link className={`${styles.upperlink} px-3`}>O Home Credit</Nav.Link>
                            <Nav.Link className={`${styles.upperlink} px-3`}>Kariéra</Nav.Link>
                            <Nav.Link className={`${styles.upperlink} px-3`}>Kontakty</Nav.Link>
                            <Nav.Link className={`${styles.upperlink} px-3`}>
                                <Lock fill={'#d30010'} width={'13'} height={'13'} />
                                Klientská Zóna
                            </Nav.Link>
                        </Nav>
                    </Col>
                </div>
            </Container>

            <Col xs='0' lg='12' className={'d-none d-lg-block px-0'}>
                <div className={'navigation__hr'}></div>
            </Col>

            <Container>
                <div className={'d-flex flex-row align-items-center w-100 inner-container'}>
                    <Col xs='1' lg='1' xl='2' className={'px-0 navigation__logo'}>
                        <Navbar.Brand href='https://www.homecredit.cz'>
                            <Homecredit />
                        </Navbar.Brand>
                    </Col>
                    <Col xs='2' className={'d-flex d-md-none px-0 justify-content-end'}>
                        <Nav className={'d-flex d-md-none justify-content-end'}>
                            <Nav.Link className={`px-0`}>
                                <Magnifier fill={'#404040'} width={'16'} height={'16'} />
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs='2' md='11' lg='11' xl='10' className={'px-0'}>
                        <Navbar.Toggle aria-controls='collapsibleNavbar' className={'bg-green'}>
                            <span className={'navbar-toggler-icon'}></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id={'collapsibleNavbar'}>
                            <Nav className='navbar-nav navigation__list w-100 justify-content-between'>
                                <Nav.Link className={`${styles.link} nav-item`}>
                                    <House fill={'#d30010'} width={'18'} height={'16'} />
                                </Nav.Link>
                                <Nav.Link className={`${styles.link} nav-item`}>Půjčky</Nav.Link>{' '}
                                <Nav.Link className={`${styles.link} nav-item`}>Karty</Nav.Link>
                                <Nav.Link className={`${styles.dropdown} nav-item`}>
                                    <NavDropdown
                                        title='Konsolidace'
                                        className={`${styles.link} border-0`}
                                        id='collasible-nav-dropdown'
                                        show={show}
                                        onMouseEnter={showDropdown}
                                        onMouseLeave={hideDropdown}
                                    >
                                        <NavDropdown.Item
                                            href='/publishers/radio'
                                            className={
                                                'font-weight-normal text-capitalize  d-block py-3 font-16'
                                            }
                                        >
                                            O konsolidaci a kalkulačka
                                        </NavDropdown.Item>

                                        <NavDropdown.Item
                                            href='/publishers/podcasters'
                                            className={
                                                'font-weight-normal text-capitalize  d-block py-3 font-16'
                                            }
                                        >
                                            Audio Podcasters
                                        </NavDropdown.Item>

                                        <NavDropdown.Item
                                            href='/publishers/videopodcasters'
                                            className={
                                                'font-weight-normal text-capitalize  d-block py-3 font-16'
                                            }
                                        >
                                            Video Podcasters
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Link>{' '}
                                <Nav.Link className={`${styles.link} nav-item`}>Nákup na splátky</Nav.Link>
                                <Nav.Link className={`${styles.link} nav-item`}>Financování auta</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </div>
            </Container>
        </Navbar>
    )
}

export default Navigation
