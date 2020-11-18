import React from 'react'
import { Button } from 'reactstrap'
import CustomCard from '../../components/card'

import styles from './styles.module.scss'

const Hero = ({ heading }) => {
    return (
        <div className={'hero'}>
            <div className={'hero__left'}>
                <span className={'hero__left-text text-uppercase font-16 font-weight-bold'}>Půjčky</span>
                <h1 className={'hero__left-heading font-weight-bold font-62 mt-4 mb-5'}>
                    Nečekejte na stáří,
                    <br />
                    plňte si sny již nyní.
                </h1>
                <div className={'hero__left__buton-holder'}>
                    <Button className={`${styles.button} text-uppercase font-weight-bold px-3 py-3`}>
                        více o půjčce
                    </Button>
                </div>
            </div>
            <div className={'hero__right'}>
                <CustomCard
                    className={'hero__card'}
                    title={'1/4'}
                    buttonText={'využít aknčí nabídku'}
                    text={'Nyní vracíme 1/4 úroků zpět.'}
                />
            </div>
        </div>
    )
}

export default Hero
