import React from 'react'

const FeedComponent = () => {
    return (
        <div className='feed-item w-3/4  bg-white rounded-lg py-2 px-3 md:w-3/5'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='User profile' className=' w-14 h-14 rounded-full' />
                    <div>
                        <h1 className='text-black text-lg'>John Doe</h1>
                        <span className=' text-gray-400 text-sm'>San Diego, CA</span>
                    </div>
                </div>
                <button className=' bg-sky-500 text-white py-2 px-3 w-fit h-fit rounded-lg text-sm hover:bg-sky-400'>Follow</button>
            </div>
            <div className=''>

                <p className='text-base my-4'>Duis dolore quis enim quis velit mollit. Ex dolor occaecat nisi magna fugiat tempor. Officia Lorem excepteur mollit ad ut amet. Magna officia Lorem id quis non tempor ut velit cillum ullamco aliquip ipsum. Lorem quis officia fugiat pariatur id labore id fugiat quis excepteur. Irure amet enim dolor do magna elit laboris.</p>
                <img className='w-full px-2 h-2/4' src='https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521__340.jpg' alt='' />
                <div className='flex flex-row gap-2 mt-3 items-center'>
                    <button className='text-2xl'><i class="bi bi-hand-thumbs-up"></i></button>
                    <button className='text-2xl'><i class="bi bi-hand-thumbs-down"></i></button>
                    <button className='text-2xl ml-auto'><i class="bi bi-chat-square-text"></i></button>
                </div>
            </div>
        </div>
    )
}

export default FeedComponent