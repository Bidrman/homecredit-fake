import React from 'react'
import { Row } from 'reactstrap'

import CustomCard from '../../components/card'

const Blog = () => {
    return (
        <div className={'blog'}>
            <h2 className={'blog__heading'}>Z našeho blogu</h2>
            <Row>
                <CustomCard
                    className={'blog__card'}
                    backgroundImage
                    title={'kreditní karta'}
                    buttonText={'více o kartách'}
                    footer={
                        <>
                            <Row></Row>
                        </>
                    }
                />
            </Row>
        </div>
    )
}

export default Blog
