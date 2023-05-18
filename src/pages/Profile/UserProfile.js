import React from 'react'
import FriendList from '../../components/FriendList'

const UserProfile = () => {
    return (
        <div id="container" className='bg-white pt-14 pb-11'>
            <div>
                <img src='https://wallpapercave.com/wp/wp5600948.jpg' className=' w-full h-72 relative' alt='' />




                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className=' rounded-full w-28 h-28 absolute top-64 left-28' />

            </div>
            <div className=' mt-20 flex flex-col justify-center ml-28 gap-2'>
                <h1 className=' text-2xl font-bold '>John Doe</h1>
                <p className=" text-base text-gray-500">Aliquip veniam occaecat proident dolor id non consequat eu eu amet exercitation anim.</p>
                <span className='text-sm text-gray-400'>San Diego, California, United Sates</span>
                <div className=' flex flex-row  mt-7 w-4/5 border-t'>
                    <div className=' w-3/5 border-r'>
                        <div className=' py-4  border-b '>
                            <h2 className='text-lg font-bold'>About</h2>
                            <p className=' text-gray-500 py-2'>
                                Minim cillum Lorem ex et dolore nisi est fugiat Lorem ipsum excepteur consequat. Excepteur nulla aliquip proident sunt in officia aute quis veniam amet magna est do commodo. Ipsum cupidatat duis pariatur laborum deserunt sint tempor sint irure exercitation in. Aliqua excepteur fugiat elit laborum in.
                                Ullamco duis commodo pariatur ullamco exercitation cillum id esse consequat non consectetur dolore eiusmod sit. Deserunt excepteur fugiat nisi sit nisi amet veniam in commodo non.
                                Nulla cillum Lorem ad eu nulla dolore pariatur sint.
                            </p>
                        </div>
                        <div className=' space-y-3  py-4 border-b'>
                            <h2 className='text-lg font-bold'>Experience</h2>
                            <div className='flex flex-col pb-3  border-b gap-1'>
                                <h3 className='font-bold'>CEO executive</h3>
                                <h4 className=' text-gray-400 text-sm'>Microsoft - full-time</h4>
                                <h4 className=' text-gray-400 text-sm'>Jan 2020 - present</h4>
                                <h4 className=' text-gray-400 text-sm'>Dolore labore pariatur adipisicing culpa nostrud elit consectetur nulla veniam laborum.</h4>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-bold'>Chief Product Officer</h3>
                                <h4 className=' text-gray-400 text-sm'>Notion - full-time</h4>
                                <h4 className=' text-gray-400 text-sm'>May 2015 - December 2019</h4>
                                <h4 className=' text-gray-400 text-sm'>Ea amet excepteur laboris nulla. Occaecat non enim dolore minim dolore tempor dolore excepteur.</h4>
                            </div>
                        </div>
                    </div>
                    <div className=' w-2/5'>
                        <FriendList />
                    </div>
                </div>
            </div>


        </div >
    )
}

export default UserProfile