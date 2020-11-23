import React from 'react'
import { Row } from 'reactstrap'

import CustomCard from '../../components/card'
import HandLend from '../../components/icons/handLend'
import Card from '../../components/icons/card'
import Atom from '../../components/icons/atom'
import ShoppingBag from '../../components/icons/shoppingBag'
import Car from '../../components/icons/car'

const Loans = () => {
    return (
        <div className={'loans'}>
            <Row className={'mt-2 mt-md-4 d-flex flex-row justify-content-center justify-content-md-around'}>
                <CustomCard
                    className={'biggerCard mt-1 mb-4'}
                    backgroundImage
                    title={'půjčky'}
                    text={'S extra nízkým úrokem, právě pro vás. Dělejte to, co máte rádi'}
                    buttonText={'více o půjčce'}
                    icon={<HandLend fill={'#d30010'} width={'50'} height={'45'} />}
                />
                <CustomCard
                    className={'biggerCard mt-1 mb-4'}
                    backgroundImage
                    title={'kreditní karta'}
                    text={'Mějte peníze stále k dispozici. Navíc karta pomůže v nouzi.'}
                    buttonText={'více o kartách'}
                    icon={<Card fill={'#d30010'} width={'50'} height={'45'} />}
                />
            </Row>
            <Row className={'d-flex flex-row justify-content-center justify-content-md-around'}>
                <CustomCard
                    className={'smallerCard'}
                    title={'konsolidace'}
                    text={'Snižte si splátky, ušetřete a kupte si něco hezkého na sebe'}
                    buttonText={'více o konsolidaci'}
                    icon={<Atom fill={'#d30010'} width={'42'} height={'42'} />}
                />
                <CustomCard
                    className={'smallerCard'}
                    title={'konsolidace'}
                    text={'Snižte si splátky, ušetřete a kupte si něco hezkého na sebe'}
                    buttonText={'více o konsolidaci'}
                    icon={<ShoppingBag fill={'#d30010'} width={'42'} height={'42'} />}
                />{' '}
                <CustomCard
                    className={'smallerCard'}
                    title={'konsolidace'}
                    text={'Snižte si splátky, ušetřete a kupte si něco hezkého na sebe'}
                    buttonText={'více o konsolidaci'}
                    icon={<Car fill={'#d30010'} width={'42'} height={'42'} />}
                />
            </Row>
        </div>
    )
}

export default Loans
