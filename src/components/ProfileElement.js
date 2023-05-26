import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { useGetTheme } from "../helpers/GetTheme";

const ProfileElement = () => {
  const theme=useGetTheme()
  return (
    <>
      <div className={theme==="light"? ("hidden bg-white rounded-lg h-fit px-3 py-2 space-y-2 md:block") : ("hidden bg-zinc-800 rounded-lg h-fit px-3 py-2 space-y-2 md:block text-gray-300")}>
        <div>
          {/*button for friend list mobile*/}
          <img
            className=" w-14 h-14 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User profile"
          />
          <div>
            <h1 className="text-lg font-bold">John Doe</h1>
            <span className="text-gray-400 text-xs">5 followers</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex flex-row items-center justify-start gap-2">
            <button className="text-xl text-gray-400">
              <i className="bi bi-geo-alt"></i>
            </button>
            <span className="text-base text-gray-400">San Diego, CA</span>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <button className="text-xl text-gray-400">
              <i className="bi bi-briefcase"></i>
            </button>
            <span className="text-base text-gray-400">Microsoft CEO</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex flex-row items-center justify-between gap-2">
            <h2 className="text-base text-gray-400">
              People that viewed your profile
            </h2>
            <span className=" font-bold">450</span>
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <h2 className="text-base text-gray-400">Total likes</h2>
            <span className=" font-bold">50</span>
          </div>

        </div>
      </div>
      <div className=" md:hidden">
        <Accordion allowToggle bg={"white"}>
          <AccordionItem>
            <h2>
              <AccordionButton _hover={{ bg: "white" }}>
                <Box as="span" flex='1' textAlign={"start"}>
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className=" w-14 h-14 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt="User profile"
                    />

                    <h1 className="text-lg font-bold">John Doe</h1>
                    <span className="text-gray-400 text-xs">5 followers</span>

                  </div>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="space-y-1">
                <div className="flex flex-row items-center justify-start gap-2">
                  <button className="text-xl text-gray-400">
                    <i className="bi bi-geo-alt"></i>
                  </button>
                  <span className="text-base text-gray-400">San Diego, CA</span>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <button className="text-xl text-gray-400">
                    <i className="bi bi-briefcase"></i>
                  </button>
                  <span className="text-base text-gray-400">Microsoft CEO</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex flex-row items-center justify-between gap-2">
                  <h2 className="text-base text-gray-400">
                    People that viewed your profile
                  </h2>
                  <span className=" font-bold">450</span>
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                  <h2 className="text-base text-gray-400">Total likes</h2>
                  <span className=" font-bold">50</span>
                </div>

              </div>
            </AccordionPanel>
          </AccordionItem>


        </Accordion>
      </div>
    </>
  );
};

export default ProfileElement;
