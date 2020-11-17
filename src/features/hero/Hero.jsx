import React from 'react'
import { Button } from 'reactstrap'

const Hero = ({ heading }) => {
    return (
        <div className={'hero'}>
            <div className={'hero__left'}>
                <span className={'hero__left-text text-uppercase'}>Půjčky</span>
                <h1 className={'hero__left-heading font-weight-bold font-62 my-4'}>
                    Nečekejte na stáří,
                    <br />
                    plňte si sny již nyní.
                </h1>
                <div className={'hero__left__buton-holder'}>
                    <Button className={'text-uppercase font-weight-bold px-3 py-3'}>více o půjčce</Button>
                </div>
            </div>
            <div className={'hero__right'}></div>
        </div>
    )
}

export default Hero
