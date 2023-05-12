import React from "react";

const Comment = () => {
  return (
    <div className=" border-y py-2 border-gray-300">
      <div className="flex flex-row items-center gap-2 px-3">
        <img
          className=" w-7 h-7 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        />
        <h1 className="font-bold">Jane Doe</h1>
        <span className=" text-gray-400 ml-auto">11 May 2023</span>
      </div>
      <div className=" my-3 px-3">
        Consectetur aute commodo labore sunt sit laborum consectetur nostrud
        aliquip ex pariatur.
      </div>
    </div>
  );
};

export default Comment;
