import React from 'react'
import { Container } from 'reactstrap'

import styles from './styles/modules.scss'

import Navigation from './components/navigation'

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
            <section></section>
        </div>
    )
}

export default App
