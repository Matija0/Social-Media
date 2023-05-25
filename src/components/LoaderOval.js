import React from 'react'
import { Oval } from 'react-loader-spinner'
const LoaderOval = () => {
    return (
        <Oval
            height={30}
            width={25}
            color="#0284c7"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#0ea5e9"
            strokeWidth={2}
            strokeWidthSecondary={2}

        />
    )
}

export default LoaderOval