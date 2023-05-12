import React from "react";

const Comment = () => {
  return (
    <div className=" py-2 flex flex-col px-2">
        <div className="flex flex-row gap-3">
        <img
          className=" w-7 h-7 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        />
        <div className=" bg-gray-300 py-1 px-1 rounded-lg">
        <h1 className="font-bold">Jane Doe</h1>
        
        <p>Consectetur aute commodo labore sunt sit laborum consectetur nostrud
        aliquip ex pariatur.</p>
        </div>
        </div>
        <span className=" text-gray-400 ml-auto text-sm">11 May 2023</span>
    </div>
  );
};

export default Comment;
