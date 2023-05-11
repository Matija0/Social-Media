import React from 'react'
import FeedComponent from '../../components/FeedComponent'
import PostInput from '../../components/PostInput'
import ProfileElement from '../../components/ProfileElement'
import FollowList from '../../components/FollowList'

const Feed = () => {
    return (
        <div className=' mx-11 mt-8 pt-14 flex flex-row gap-5 '>
            <div style={{ width: "30%" }}>
                <ProfileElement />
            </div>
            <div className='flex flex-col gap-5' style={{ width: "60%" }}>
                <PostInput />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
            </div>
            <div style={{ width: "30%" }}>
                <FollowList />
            </div>
        </div>
    )
}

export default Feed