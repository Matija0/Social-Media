import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const FriendList = () => {
  return (
    <div className="bg-white h-fit rounded-lg py-2 px-3 space-y-4">
      <div className="flex flex-row items-center">
        <h1 className="text-lg font-bold mb-2">Friends</h1>

      </div>
      <div className="flex flex-row gap-3 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="User profile"
          className=" w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h2 className=" font-semibold">Jane Doe</h2>
          <span className="text-sm text-gray-400">Product officer at Notion</span>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="User profile"
          className=" w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h2 className=" font-semibold">Jane Doe</h2>
          <span className="text-sm text-gray-400">Product officer at Notion</span>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="User profile"
          className=" w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h2 className=" font-semibold">Jane Doe</h2>
          <span className="text-sm text-gray-400">Product officer at Notion</span>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="User profile"
          className=" w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h2 className=" font-semibold">Jane Doe</h2>
          <span className="text-sm text-gray-400">Product officer at Notion</span>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <button className="text-sm py-2 px-3 border border-gray-400 rounded-lg hover:bg-gray-200">
          Show more <i class="bi bi-chevron-down"></i>
        </button>
      </div>
    </div>
  );
};

export default FriendList;
