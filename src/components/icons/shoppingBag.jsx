import React from 'react'

const ShoppingBag = ({ width, height, fill }) => {
    return (
        <div className={'icon'}>
            <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 36 43'>
                <path
                    fill={fill}
                    fill-rule='evenodd'
                    d='M23.084.023c1.93 0 3.499 1.57 3.499 3.5V7.73h6.201c.65 0 1.184.512 1.21 1.161l1.286 31.593a1.21 1.21 0 0 1-1.167 1.537H1.52a1.21 1.21 0 0 1-1.21-1.26l1.3-31.87A1.21 1.21 0 0 1 2.82 7.73h6.2V3.523c0-1.93 1.57-3.5 3.5-3.5zM9.02 10.15H3.98l-1.2 29.448h30.04L31.622 10.15h-5.039v2.874a1.211 1.211 0 0 1-2.422 0V10.15h-12.72v2.874a1.211 1.211 0 0 1-2.421 0V10.15zm14.064-7.706H12.52c-.595 0-1.077.484-1.077 1.078V7.73h12.72V3.523c0-.594-.483-1.078-1.078-1.078z'
                />
            </svg>
        </div>
    )
}

export default ShoppingBag
