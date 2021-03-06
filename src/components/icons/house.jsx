import React from 'react'

const House = ({ width, height, fill }) => {
    return (
        <div className={'icon'}>
            <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 20 17'>
                <path
                    fill={fill}
                    fill-rule='evenodd'
                    d='M10.5 1.075l7.99 4.943c.33.204.531.566.531.954v8.815c0 .619-.502 1.12-1.12 1.12H1.917c-.62 0-1.121-.501-1.121-1.12V6.972c0-.388.2-.75.53-.954L9.32 1.075a1.125 1.125 0 0 1 1.18 0zm-.59 2.271l-6.871 4.25v7.07h3.195v-3.158a1.121 1.121 0 0 1 2.242 0v3.158h8.304v-7.07l-6.87-4.25z'
                />
            </svg>
        </div>
    )
}

export default House
