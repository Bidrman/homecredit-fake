import React from 'react'
import { Container } from 'reactstrap'

import styles from './styles/modules.scss'

import Navigation from './components/navigation'
import Hero from './features/hero'
import Loans from './features/loans'

const App = () => {
    return (
        <div className={'page'}>
            <header>
                <section>
                    <Container className={'px-0 pl-80 pr-80 elastic'}>
                        <Navigation />
                    </Container>
                </section>
            </header>
            <section>
                <Container>
                    <Hero />
                </Container>
            </section>
            <section>
                <Container>
                    <Loans />
                </Container>
            </section>
        </div>
    )
}

export default App
