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

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "white" }} className="nav-el flex justify-between h-14 py-2 items-center px-7">
      <div className="flex flex-row items-center gap-2 ml-5 w-3/5">
        <h1 className="text-xl font-bold">Social Media</h1>
        <input
          className="bg-gray-200 py-2 px-1 focus:outline-none rounded-lg ml-9"
          placeholder="Search for people..."
        />
        <button>
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center justify-end w-2/5">
        <Popover>
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
                <h1 className="font-bold">Notifications</h1> <span className="text-gray-500"><i class="bi bi-clock"></i> past hour</span>
              </div>
            </PopoverHeader>
            <PopoverBody bg={"gray.100"}>
              <h2>Jane Doe liked your post</h2>
            </PopoverBody>
          </PopoverContent>
        </Popover>
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
              <h1 className="font-bold">Messages</h1>
            </PopoverHeader>
            <PopoverBody>
              <div></div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Menu>
          <MenuButton as={Button} bg="none" _hover={{ bg: "none" }} _expanded={{ bg: "none" }}>
            <img className=" w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
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
