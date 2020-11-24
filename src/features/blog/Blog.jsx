import React from 'react'

import CustomCard from '../../components/card'
import Magnifier from '../../components/icons/magnifier'

const Blog = () => {
    return (
        <div className={'blog'}>
            <h2 className={'blog__heading'}>Z našeho blogu</h2>
            <div className={'blog__row'}>
                <CustomCard
                    className={'blog__card'}
                    backgroundImage
                    title={
                        <>
                            <span>19.6.2018</span>
                            <h4>5 věcí, které dělají páry při správě svých účtů špatně</h4>
                        </>
                    }
                    buttonText={'Celý článek'}
                    footer={
                        <>
                            <div className={'d-flex flex-row py-2 blog__footer'}>
                                <div className={'d-flex align-items-center flex-row pl-3'}>
                                    <Magnifier width='14' height='14' />
                                    <span className={'d-block ml-1 font-14'}>2 komentáře</span>
                                </div>
                                <div className={'d-flex align-items-center flex-row pl-3'}>
                                    <Magnifier className={'mb-1'} width='14' height='14' />
                                    <span className={'d-block ml-1 font-14'}>26 přečtení</span>
                                </div>
                            </div>
                        </>
                    }
                />
                <CustomCard
                    className={'blog__card'}
                    backgroundImage
                    title={
                        <>
                            <span>19.6.2018</span>
                            <h4>5 věcí, které dělají páry při správě svých účtů špatně</h4>
                        </>
                    }
                    buttonText={'Celý článek'}
                    footer={
                        <>
                            <div className={'d-flex flex-row py-2 blog__footer'}>
                                <div className={'d-flex align-items-center flex-row pl-3'}>
                                    <Magnifier width='14' height='14' />
                                    <span className={'d-block ml-1 font-14'}>2 komentáře</span>
                                </div>
                                <div className={'d-flex align-items-center flex-row pl-3'}>
                                    <Magnifier className={'mb-1'} width='14' height='14' />
                                    <span className={'d-block ml-1 font-14'}>26 přečtení</span>
                                </div>
                            </div>
                        </>
                    }
                />
                <CustomCard
                    className={'blog__card'}
                    backgroundImage
                    title={
                        <>
                            <span>19.6.2018</span>
                            <h4>5 věcí, které dělají páry při správě svých účtů špatně</h4>
                        </>
                    }
                    buttonText={'Celý článek'}
                    footer={
                        <>
                            <div className={'d-flex flex-row py-2 blog__footer'}>
                                <div className={'d-flex align-items-center flex-row pl-3'}>
                                    <Magnifier width='14' height='14' />
                                    <span className={'d-block ml-1 font-14'}>2 komentáře</span>
                                </div>
                                <div className={'d-flex align-items-center flex-row pl-3'}>
                                    <Magnifier className={'mb-1'} width='14' height='14' />
                                    <span className={'d-block ml-1 font-14'}>26 přečtení</span>
                                </div>
                            </div>
                        </>
                    }
                />
            </div>
        </div>
    )
}

export default Blog
