import React from 'react'
import { Container } from 'reactstrap'

import styles from './styles/modules.scss'

import Navigation from './components/navigation'
import Hero from './features/hero'

const App = () => {
    return (
        <div className={'page'}>
            <header>
                <section>
                    <Container>
                        <Navigation />
                    </Container>
                </section>
            </header>
            <section>
                <Container>
                    <Hero />
                </Container>
            </section>
        </div>
    )
}

export default App
