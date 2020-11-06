import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Col } from 'reactstrap'

import Homecredit from '../icons/homecredit'
import Link from '../link/Link'

const Navigation = () => {
    return (
        <Navbar expand={'md'} collapseOnSelect className={'w-100 navigation'}>
            <Col xs='1' lg='1'>
                <Navbar.Brand href='https://www.homecredit.cz'>
                    <Homecredit />
                </Navbar.Brand>
            </Col>
            <Col xs='1' lg='11'>
                <Navbar.Toggle aria-controls='collapsibleNavbar' className={'bg-green'}>
                    <span className={'navbar-toggler-icon'}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id={'collapsibleNavbar'}>
                    <ul className='navbar-nav navigation__list w-100 justify-content-between'>
                        <li className={'nav-item font-15'}>
                            <Link className={'navigation__link'} text='domecek' />
                        </li>
                        <li className={'nav-item font-15'}>
                            <Link className={'navigation__link'} text='půjčky' />
                        </li>{' '}
                        <li className={'nav-item font-15'}>
                            <Link className={'navigation__link'} text='karty' />
                        </li>
                        <li className={'nav-item font-15'}>
                            <Link className={'navigation__link'} text='konsolidace' />
                        </li>{' '}
                        <li className={'nav-item font-15'}>
                            <Link className={'navigation__link'} text='nákup na splátky' />
                        </li>
                        <li className={'nav-item font-15'}>
                            <Link className={'navigation__link'} text='financování auta' />
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Col>
        </Navbar>
    )
}

export default Navigation
