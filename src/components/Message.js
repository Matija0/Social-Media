import React from 'react'

const Message = () => {
  return (
    <div className="flex flex-col gap-5 text-blue-950">
    <button className="flex flex-row items-center gap-2 hover:bg-gray-200 rounded-lg">
      
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="User profile"
        className=" w-10 h-10 rounded-full relative"
      />
      <div className="ml-1">
        <h2 className="text-base font-bold text-left">Jane Doe</h2>
        <span className="text-xs font-bold ">
          odio eu feugiat pretium nibh
        </span>
      </div>
      <span className="text-green-500 text-5xl ml-auto absolute left-6 top-9">
        <i className="bi bi-dot"></i>
      </span>
    </button>
    
    
  </div>
  )
}

export default Message