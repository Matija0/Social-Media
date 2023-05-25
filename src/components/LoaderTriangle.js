import React from 'react'
import { Triangle } from 'react-loader-spinner'
const LoaderTriangle = () => {
    return (
        <Triangle
            height="150"
            width="150"
            color="#0284c7"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}

export default LoaderTriangle