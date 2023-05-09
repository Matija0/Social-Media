import React from 'react'
import FeedComponent from '../../components/FeedComponent'
import PostInput from '../../components/PostInput'

const Feed = () => {
    return (
        <div className=' container mx-auto mt-5'>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <PostInput />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
            </div>
        </div>
    )
}

export default Feed