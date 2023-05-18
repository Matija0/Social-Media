import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  const [show, handleSHow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 150) {
      handleSHow(true);
    } else {
      handleSHow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div id={show ? ("nav-change") : ("nav-el")} className="flex  h-14 py-2 items-center px-7 justify-between">
      <div className="flex flex-row items-center gap-2">
        <Link to={"/"}>
          <img
            style={{ width: "100px", height: "100px" }}
            src={process.env.PUBLIC_URL + "/images/Logo.png"}
            alt="logo"
          />
        </Link>
        <input
          className="bg-gray-200 hidden py-2 px-1 focus:outline-none rounded-lg ml-3 md:block"
          placeholder="Search for people..."
          id="search"
        />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="flex flex-row gap-7 items-center justify-end">
        {/*Notifications */}
        <Popover isLazy>
          <PopoverTrigger>
            <button className="text-xl">
              <i className="bi bi-bell"></i>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <div className="flex flex-row items-center gap-3">
                <h1 className="font-bold">Notifications</h1>{" "}
                <span className="text-gray-500">
                  <i className="bi bi-clock"></i> past hour
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
              <i className="bi bi-chat-dots"></i>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <h1 className="font-bold text-blue-950">Your messages</h1>
            </PopoverHeader>
            <PopoverBody>
              <div className=" space-y-2">
                <Message />
                <hr className=" w-full" />
                <Message />
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
            padding={0}
            height={"fit-content"}
            width={"fit-content"}
            borderRadius={"50%"}

          >
            <img
              className=" w-9 h-9"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => logout()}>Sign out</MenuItem>
            <MenuItem>Settings</MenuItem>
            <Link to="/userprofile"> <MenuItem>My profile</MenuItem></Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
