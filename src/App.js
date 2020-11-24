import React from 'react'
import { Container } from 'reactstrap'

import styles from './styles/modules.scss'

import Navigation from './components/navigation'
import Hero from './features/hero'
import Loans from './features/loans'
import Blog from './features/blog'

import Subfooter from './features/subfooter'

const App = () => {
    return (
        <div className={'page'}>
            <header>
                <section>
                    <div className='inner-container'>
                        <Container className={'px-0 '}>
                            <Navigation />
                        </Container>
                    </div>
                </section>
            </header>
            <section>
                <Container>
                    <Hero />
                </Container>
            </section>
            <section className={'bg-light'}>
                <div className='inner-container'>
                    <Container className={'px-0'}>
                        <Loans />
                    </Container>
                </div>
            </section>
            <section>
                <div className='inner-container'>
                    <Container className={'px-0'}>
                        <Blog />
                    </Container>
                </div>
            </section>
            <section>
                <div className='inner-container'>
                    <Container className={'px-0'}></Container>
                </div>
            </section>
            <section></section>
            <footer>
                <section className={'subfooter'}>
                    <Subfooter />
                </section>
            </footer>
        </div>
    )
}

export default App
