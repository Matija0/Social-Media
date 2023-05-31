import React, { useState } from 'react'
import FriendList from '../../components/FriendList'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import axios from 'axios'

const UserProfile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    const [data, setData] = useState({
        location: "",
        about: "",
        jobs: [],

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleJobChange = (e, index) => {
        const { value } = e.target;
        const jobs = data.jobs;
        jobs[index] = value;
        setData({ ...data, jobs });
    };

    const addJob = () => {
        setData({ ...data, jobs: [...data.jobs, ""] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

    }
    return (
        <div id="profile" className='bg-white pt-14 pb-11 mx-auto'>
            <div className='flex flex-row justify-between px-28'>




                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className=' rounded-full w-28 h-28' />
                <button onClick={onOpen} className=' text-2xl'><i class="bi bi-clipboard-data"></i></button>
            </div>
            <div className=' mt-20 flex flex-col justify-center ml-28 gap-2'>
                <h1 className=' text-2xl font-bold '>John Doe</h1>


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
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter your data!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit} className=' flex flex-col gap-3'>
                            <h2>Location</h2>
                            <input onChange={handleChange} className='border border-gray-300' />
                            <h2>About you:</h2>
                            <input onChange={handleChange} className='border border-gray-300' />
                            <h2>Jobs</h2>
                            {data.jobs.map((job, index) => (
                                <input
                                    key={index}
                                    name="jobs"
                                    value={job}
                                    className='border border-gray-300'
                                    onChange={(e) => handleJobChange(e, index)}
                                />
                            ))}
                            <button onClick={addJob} type="button" className=' bg-gray-300 px-2 py-1 w-fit self-center'>
                                Add Job
                            </button>

                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <button type='submit'>Submit</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div >
    )
}

export default UserProfile