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
    <div
      style={{ backgroundColor: "white" }}
      className="nav-el flex justify-between h-14 py-2 items-center px-7"
    >
      <div className="flex flex-row items-center gap-2 ml-5 w-3/5">
        <img
          style={{ width: "100px", height: "100px" }}
          src={process.env.PUBLIC_URL + "/images/Logo.png"}
          alt="logo"
        />
        <input
          className="bg-gray-200 py-2 px-1 focus:outline-none rounded-lg ml-3"
          placeholder="Search for people..."
        />
        <button>
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center justify-end w-2/5">
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
              <div>
                <button className="flex flex-row items-center gap-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="User profile"
                    className=" w-10 h-10 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-left">Jane Doe</h2>
                    <span className="text-xs ml-1">
                      odio eu feugiat pretium nibh
                    </span>
                  </div>
                  <div className="text-green-500 text-5xl ml-auto">
                    <i className="bi bi-dot"></i>
                  </div>
                </button>
                <hr className="my-2" />
                <button className="flex flex-row items-center gap-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="User profile"
                    className=" w-10 h-10 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-left">Jane Doe</h2>
                    <span className="text-xs ml-1">
                      odio eu feugiat pretium nibh
                    </span>
                  </div>
                  <div className="text-red-500 text-5xl ml-auto">
                    <i className="bi bi-dot"></i>
                  </div>
                </button>
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
