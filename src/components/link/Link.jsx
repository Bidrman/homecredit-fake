import React from 'react'

const Link = ({ text, href, additionalClass }) => {
    const classes = additionalClass ? `link ${additionalClass}` : 'link'
    return (
        <a href={href} className={classes}>
            {text}
        </a>
    )
}

export default Link
