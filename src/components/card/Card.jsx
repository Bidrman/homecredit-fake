import React from 'react'
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'

const CustomCard = ({
    className,
    title,
    text,
    buttonText,
    backgroundImage = false,
    icon = null,
    footer = null,
}) => {
    let content
    if (backgroundImage) {
        content = (
            <>
                <div className='left'>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{text}</CardText>
                    <Button className={'radius-2'}>{buttonText}</Button>
                </div>
                <div className='right'></div>
            </>
        )
    } else {
        content = (
            <>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <Button className={'radius-2'}>{buttonText}</Button>
            </>
        )
    }

    return (
        <Card className={className}>
            {icon ? icon : ''}
            <CardBody>
                {content}
                {footer ? footer : ''}
            </CardBody>
        </Card>
    )
}

export default CustomCard
