import React from 'react'

const ShoppingBag = ({ width, height, fill }) => {
    return (
        <div className={'icon'}>
            <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 48 42'>
                <path
                    fill={fill}
                    fill-rule='evenodd'
                    d='M35.972.13c2.291 0 4.496 1.783 5.019 4.06l2.379 10.342.011.048.048.017a6.312 6.312 0 0 1 4.204 5.941v7.094c0 2.932-2.08 5.518-4.946 6.149l-.072.016v3.674a3.846 3.846 0 0 1-3.842 3.843h-1.898a3.847 3.847 0 0 1-3.841-3.843v-3.543H15.169v3.543a3.847 3.847 0 0 1-3.842 3.843H9.429a3.847 3.847 0 0 1-3.842-3.843v-3.674l-.072-.016C2.649 33.151.57 30.564.57 27.631v-7.093a6.312 6.312 0 0 1 4.204-5.94l.048-.018L7.21 4.19C7.735 1.912 9.94.13 12.23.13zm4.084 33.798h-4.463v3.543c0 .707.576 1.282 1.282 1.282h1.898c.708 0 1.283-.575 1.283-1.282v-3.543zm-27.447 0H8.146v3.543c0 .707.575 1.282 1.283 1.282h1.898c.707 0 1.282-.575 1.282-1.282v-3.543zM35.972 2.69H12.231c-1.092 0-2.272.969-2.525 2.073L7.144 15.901a1.276 1.276 0 0 1-1.005.969 3.741 3.741 0 0 0-3.01 3.668v7.094a3.742 3.742 0 0 0 3.738 3.737h34.469c2.06 0 3.739-1.677 3.739-3.737v-7.094a3.75 3.75 0 0 0-3.017-3.67 1.267 1.267 0 0 1-1-.967L38.498 4.762c-.254-1.104-1.434-2.072-2.525-2.072zm2.38 17.077a4.322 4.322 0 0 1 4.316 4.32 4.32 4.32 0 0 1-4.315 4.315 4.322 4.322 0 0 1-4.318-4.315 4.324 4.324 0 0 1 4.318-4.32zm-28.5 0a4.324 4.324 0 0 1 4.318 4.32 4.322 4.322 0 0 1-4.319 4.315 4.322 4.322 0 0 1-4.317-4.315 4.324 4.324 0 0 1 4.317-4.32zm28.5 2.56a1.758 1.758 0 1 0 1.757 1.76c0-.97-.788-1.76-1.756-1.76zm-28.5 0c-.97 0-1.759.79-1.759 1.76a1.758 1.758 0 0 0 3.517 0c0-.97-.789-1.76-1.759-1.76z'
                />
            </svg>
        </div>
    )
}

export default ShoppingBag
