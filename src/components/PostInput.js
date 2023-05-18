import React from "react";

const PostInput = () => {
  return (
    <div className=" bg-white  py-3 px-4  rounded-lg">
      <div className="flex flex-row ">
        <input
          className=" bg-gray-200 w-full py-3 px-1 focus:outline-none rounded-lg"
          placeholder="What's on your mind"
          id="post"
        />
      </div>
      <div className="flex flex-row gap-3 justify-between items-center mt-4">
        <label for="file-upload" class="custom-file-upload">
          <span className=" text-2xl text-gray-400"><i class="bi bi-card-image"></i></span>
        </label>
        <input id="file-upload" type="file" />




        <button className=" w-fit h-fit py-2 rounded-lg px-3 text-sm text-white bg-sky-500 hover:bg-sky-400">
          Post
        </button>
      </div>
    </div>
  );
};

export default PostInput;
