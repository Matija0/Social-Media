import React from 'react'

const PostInput = () => {
    return (
        <div className=' bg-white w-3/4 py-3 px-4  rounded-lg md:w-3/5'>

            <div className='flex flex-row '>

                <input className=' bg-gray-200 w-full py-3 px-1 focus:outline-none rounded-lg' placeholder="What's on your mind" />

            </div>
            <div className='flex flex-row gap-3 justify-between items-center mt-4'>
                <button className='text-2xl text-gray-400 flex flex-row items-center gap-2'><i class="bi bi-card-image"></i><span className='text-base'>Image</span></button>
                <button className=' w-fit h-fit py-2 rounded-lg px-3 text-base text-white bg-sky-500'>Post</button>
            </div>
        </div>
    )
}

export default PostInput