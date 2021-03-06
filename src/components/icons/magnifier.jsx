import React from 'react'

const Magnifier = ({ width, height, fill, className }) => {
    return (
        <div className={className}>
            <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 13 13'>
                <path
                    fill={fill}
                    fill-rule='evenodd'
                    d='M4.906 0a4.873 4.873 0 0 1 4.867 4.866 4.84 4.84 0 0 1-1.09 3.06l4.113 4.113a.559.559 0 0 1 0 .796.556.556 0 0 1-.398.164.557.557 0 0 1-.398-.165L7.878 8.712a4.85 4.85 0 0 1-2.972 1.022A4.872 4.872 0 0 1 .039 4.866 4.872 4.872 0 0 1 4.906 0zm0 1.124a3.746 3.746 0 0 0-3.742 3.742 3.746 3.746 0 0 0 3.742 3.742 3.746 3.746 0 0 0 3.742-3.742 3.747 3.747 0 0 0-3.742-3.742z'
                    opacity='.8'
                />
            </svg>
        </div>
    )
}

export default Magnifier
