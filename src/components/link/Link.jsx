import React from 'react'

const Link = ({ icon = null, text, href, additionalClass }) => {
    const classes = additionalClass ? `link ${additionalClass}` : 'link'
    return (
        <a href={href} className={classes}>
            {icon}&nbsp;{text}
        </a>
    )
}

export default Link
