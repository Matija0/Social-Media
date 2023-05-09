import React from 'react'

const Register = () => {
    return (
        <div className=' container mx-auto w-2/4 my-7 px-3 rounded-xl  flex flex-col items-center bg-white py-7 md:px-14'>
            <div> <h1 className='text-black text-xl font-bold mb-4'>Create your free account</h1></div>


            <form className='flex flex-col'>
                <label for="email" className=' text-sm font-medium'>Your email</label>
                <input type="email" id="email" className=' bg-gray-300 border-2 border-gray-400 rounded-lg focus:outline-none text-white p-2.5' placeholder="name@company.com" required="" />
                <label for="password" className='mb-2 text-sm font-medium'>Your password</label>
                <input type="password" id="password" placeholder="••••••••" className='bg-gray-300 border-2 border-gray-400  rounded-lg focus:outline-none w-full p-2.5 text-white ' required="" />

                <label for="confirm-password" className=" mb-2 text-sm font-medium  ">Confirm password</label>
                <input type="password" id="confirm-password" placeholder="••••••••" className="bg-gray-300 border-2 border-gray-400  rounded-lg focus:outline-none p-2.5 holder-gray-400 text-white" required="" />
                <div className='flex flex-row items-center justify-start my-4'>
                    <input type="checkbox" id="terms" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 mr-2' required="" />
                    <label for="terms" className='font-light text-gray-500'>I accept the Terms and Conditions</label>
                </div>
                <button type='submit' className='bg-blue-700 hover:bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-300'>Create account</button>
                <p class="text-sm font-light text-gray-500 mt-4">
                    Already have an account? <span className="font-medium text-primary-600 hover:underline cursor-pointer">Login here</span>
                </p>
            </form>


        </div>
    )
}

export default Register