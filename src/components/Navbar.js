import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Message from "./Message";

const Navbar = () => {
  return (
    <div
      
      className="nav-el flex  h-14 py-2 items-center px-7 bg-white justify-between"
    >
      <div className="flex flex-row items-center gap-2">
        <img
          style={{ width: "100px", height: "100px" }}
          src={process.env.PUBLIC_URL + "/images/Logo.png"}
          alt="logo"
        />
        <input
          className="bg-gray-200 hidden py-2 px-1 focus:outline-none rounded-lg ml-3 md:block"
          placeholder="Search for people..."
        />
        <button>
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center justify-end">
        {/*Notifications */}
        <Popover isLazy>
          <PopoverTrigger>
            <button className="text-xl">
              <i class="bi bi-bell"></i>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <div className="flex flex-row items-center gap-3">
                <h1 className="font-bold">Notifications</h1>{" "}
                <span className="text-gray-500">
                  <i class="bi bi-clock"></i> past hour
                </span>
              </div>
            </PopoverHeader>
            <PopoverBody bg={"gray.100"}>
              <h2>Jane Doe liked your post</h2>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {/*Messages*/}
        <Popover>
          <PopoverTrigger>
            <button className="text-xl">
              <i class="bi bi-chat-dots"></i>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <h1 className="font-bold text-blue-950">Your messages</h1>
            </PopoverHeader>
            <PopoverBody>
              <div className=" space-y-4">
             <Message/>
             <Message/>
             </div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Menu>
          <MenuButton
            as={Button}
            bg="none"
            _hover={{ bg: "none" }}
            _expanded={{ bg: "none" }}
          >
            <img
              className=" w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Sign out</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>My profile</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
