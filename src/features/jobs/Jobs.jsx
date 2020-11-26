import React from 'react'
import { Button } from 'reactstrap'

const Jobs = () => {
    return (
        <div className={'jobs'}>
            <div className={'jobs__container'}>
                <h3 className={'text-uppercase font-28 font-weight-bold jobs__heading'}>
                    Přidejte se k naší rodině z home creditu
                </h3>
                <Button className={'text-uppercase font-weight-bold px-4 py-3 btn btn-info jobs__btn'}>
                    Volná místa
                </Button>
            </div>
        </div>
    )
}

export default Jobs
