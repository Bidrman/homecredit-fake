import React from 'react'

const Graph = ({ width, height, fill }) => {
    return (
        <div className={'mb-4 icon'}>
            <svg
                viewBox='0 0 60 60'
                fill={fill}
                width={width}
                height={height}
                data-element-id='icons/Icon/default'
            >
                <path
                    d='M6 52.002V0h2v52.002h52v2H8V60H6v-5.998H0v-2h6zm6.926-1.242a1.008 1.008 0 0 1-.708-1.718l10-10a1.016 1.016 0 0 1 1.414 0l6.226 6.218 7.094-30.74a1.03 1.03 0 0 1 .698-.74c.354-.1.726 0 .982.262l8.904 8.898L54.49 4.4a.992.992 0 0 1 1.288-.58.987.987 0 0 1 .584 1.28l-7.5 20a.959.959 0 0 1-.724.62.975.975 0 0 1-.92-.258l-8.724-8.72L31.4 47.48c-.082.34-.35.642-.698.74-.348.1-.726 0-.984-.258l-6.792-6.8-9.294 9.3a.986.986 0 0 1-.706.298z'
                    id='Chart_svg__a'
                ></path>
            </svg>
        </div>
    )
}

export default Graph
