import React from 'react'

const FollowList = () => {
    return (
        <div className='bg-white h-fit rounded-lg py-2 px-3'>
            <h1 className='text-lg font-bold mb-2'>People that follow you</h1>
            <div className='flex flex-row gap-3 items-center'>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='User profile' className=' w-7 h-7 rounded-full' />
                <h2 className=''>Jane Doe</h2>

            </div>

        </div>
    )
}

export default FollowList