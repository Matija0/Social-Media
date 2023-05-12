import { useState } from "react";

const Suggested = () => {
  const [followed, setFollowed] = useState("false");

  return (
    <div className="bg-white h-fit rounded-lg py-2 px-3">
      <div className="flex flex-row items-center">
        <h1 className="text-lg font-bold mb-2">Suggested for you</h1>
        <button className=" cursor-default ml-auto">
          <p className="text-sm font-bold text-blue-500 hover:text-blue-600 mb-2">
            See All
          </p>
        </button>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="User profile"
          className=" w-7 h-7 rounded-full"
        />
        <h2 className="">Jane Doe</h2>
        {followed ? (
          <button
            className="text-xl ml-auto text-blue-500 cursor-default"
            onClick={() => {
              setFollowed((val) => !val);
            }}
          >
            <i className="bi bi-person-plus"></i>
          </button>
        ) : (
          <button
            className="text-xl ml-auto text-blue-500 cursor-default"
            onClick={() => {
              setFollowed((val) => !val);
            }}
          >
            <i className="bi bi-person-plus-fill"></i>
          </button>
        )}
      </div>
      <div className="flex flex-row gap-3 items-center mt-3">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="User profile"
          className=" w-7 h-7 rounded-full"
        />
        <h2 className="">Jane Doe</h2>
        <button className="text-xl ml-auto text-blue-500 cursor-default">
          <i className="bi bi-person-plus"></i>
        </button>
      </div>
      <div className="flex flex-row gap-3 items-center mt-3">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="User profile"
          className=" w-7 h-7 rounded-full"
        />
        <h2 className="">Jane Doe</h2>
        <button className="text-xl ml-auto text-blue-500 cursor-default">
          <i className="bi bi-person-plus"></i>
        </button>
      </div>
      <div className="flex flex-row gap-3 items-center mt-3">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="User profile"
          className=" w-7 h-7 rounded-full"
        />
        <h2 className="">Jane Doe</h2>
        <button className="text-xl ml-auto text-blue-500 cursor-default">
          <i className="bi bi-person-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Suggested;
