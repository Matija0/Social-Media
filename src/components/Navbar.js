import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
} from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div className='bg-white flex justify-between py-2 items-center px-7'>
            <div className='flex flex-row items-center gap-2 ml-4'>
                <h1 className='text-xl font-bold'>Social Media</h1>
                <input className='bg-gray-200 w-52 py-2 px-1 focus:outline-none rounded-lg ml-9' placeholder='Search for people...' />
                <button><i class="bi bi-search"></i></button>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <Popover>
                    <PopoverTrigger>
                        <button className='text-xl'><i class="bi bi-bell"></i></button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Notifications <i class="bi bi-clock"></i> past hour</PopoverHeader>
                        <PopoverBody>
                            <h1>Jane Doe liked your post</h1>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <button className='text-xl'><i class="bi bi-chat-dots"></i></button>
            </div>

        </div>
    )
}

export default Navbar