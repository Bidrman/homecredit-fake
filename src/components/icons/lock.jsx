import React from 'react'

const Lock = ({ width, height, fill }) => {
    return (
        <div className={'icon'}>
            <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 12 13'>
                <path
                    fill={fill}
                    fill-rule='evenodd'
                    d='M6.073 0c2.343 0 4.024 2.241 4.068 4.252a.53.53 0 0 1-.216.439c.816.223 1.403.96 1.403 1.812v4.608c0 1.04-.846 1.887-1.886 1.887H2.705a1.89 1.89 0 0 1-1.888-1.887V6.503c0-.857.585-1.597 1.396-1.815a.534.534 0 0 1-.21-.435C2.048 2.24 3.731 0 6.073 0zm3.49 5.693H2.556a.824.824 0 0 0-.679.81v4.608c0 .456.371.827.828.827h6.737c.455 0 .825-.37.825-.827V6.503c0-.405-.3-.75-.704-.81zm-3.667 1.39c.3 0 .545.244.545.544v2.15a.545.545 0 0 1-1.089 0v-2.15c0-.3.244-.544.544-.544zm.177-6.022c-1.681 0-2.976 1.697-3.01 3.215a.531.531 0 0 1-.152.36l6.323-.002a.524.524 0 0 1-.153-.359c-.033-1.517-1.326-3.214-3.008-3.214z'
                    opacity='.8'
                />
            </svg>
        </div>
    )
}

export default Lock