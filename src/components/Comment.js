import React from "react";

const Comment = () => {
  return (
    <div className=" pt-2 flex flex-col ">
      <div className="flex flex-row gap-3 px-2">
        <img
          className=" w-7 h-7 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        />
        <div className=" bg-gray-200 py-1 px-1 rounded-lg">
          <h1 className="font-bold">Jane Doe</h1>
          <p>
            Consectetur aute commodo labore sunt sit laborum consectetur nostrud
            aliquip ex pariatur.
          </p>
        </div>
      </div>

      <div className=" border-t border-gray-300 mt-5">




        <input
          type="text"
          placeholder="Post a comment..."
          className=" outline-none w-full py-2 px-2"
        />



      </div>
    </div>
  );
};

export default Comment;
