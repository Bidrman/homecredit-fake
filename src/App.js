import React from 'react'
import { Container } from 'reactstrap'

import styles from './styles/modules.scss'

import Navigation from './components/navigation'
import Hero from './features/hero'
import Loans from './features/loans'
import Blog from './features/blog'
import Slider from './features/slider'
import Subfooter from './features/subfooter'
import Jobs from './features/jobs/Jobs'
import Partners from './features/partners/Partners'

const App = () => {
    return (
        <div className={'page bg-objects'}>
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
            <section className={'bg-light bg-card'}>
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
            <section className={'bg-light'}>
                <div className='inner-container'>
                    <Container className={'px-0'}>
                        <Slider />
                    </Container>
                </div>
            </section>
            <section>
                <div className='inner-container'>
                    <Container className={'px-0'}>
                        <Partners />
                    </Container>
                </div>
            </section>
            <section>
                <Container className={'px-0'}>
                    <Jobs />
                </Container>
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
