import React from 'react'
import FeedComponent from '../../components/FeedComponent'
import PostInput from '../../components/PostInput'
import ProfileElement from '../../components/ProfileElement'

const Feed = () => {
    return (
        <div className=' container mx-auto mt-8 pt-14'>
            <div className='flex flex-col  gap-4 md:flex-row'>
                <ProfileElement/>
                <div className='flex flex-col  gap-4'>
                <PostInput />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
                </div>
            </div>
        </div>
    )
}

export default Feed