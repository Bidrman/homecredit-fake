import React from 'react'
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'

const CustomCard = ({ className, title, text, buttonText }) => {
    return (
        <Card className={className}>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <Button className={'radius-2'}>{buttonText}</Button>
            </CardBody>
        </Card>
    )
}

export default CustomCard
