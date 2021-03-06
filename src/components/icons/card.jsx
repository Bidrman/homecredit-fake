import React from 'react'

const Card = ({ width, height, fill }) => {
    return (
        <div className={'icon'}>
            <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 48 42'>
                <path
                    fill={fill}
                    fill-rule='evenodd'
                    d='M30.706.71a5.605 5.605 0 0 1 7.648 2.05l8.78 15.208a5.605 5.605 0 0 1-2.049 7.648l-13.92 8.037-13.092 7.559a5.604 5.604 0 0 1-7.648-2.05l-8.78-15.209a5.606 5.606 0 0 1 2.049-7.648zm5.619 3.22a3.26 3.26 0 0 0-4.448-1.192L4.865 18.334a3.26 3.26 0 0 0-1.192 4.448l8.781 15.21a3.26 3.26 0 0 0 4.447 1.19l27.013-15.595a3.26 3.26 0 0 0 1.192-4.447zm-.594 13.884a1.284 1.284 0 0 1 1.751.47 1.283 1.283 0 0 1-.469 1.75L16.578 31.833a1.283 1.283 0 0 1-1.282-2.22z'
                />
            </svg>
        </div>
    )
}

export default Card
