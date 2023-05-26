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
    window.localStorage.removeItem("userID")
    window.localStorage.removeItem("theme")
    navigate("/login");
    window.location.reload()
  };
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const [show, handleSHow] = useState(false);
  
  const transitionNavBar = () => {
    if (window.scrollY > 150) {
      handleSHow(true);
    } else {
      handleSHow(false);
    }
  };

  const toggleTheme= () =>{
   if(theme==="light"){
    setTheme("dark")
   }else{
    setTheme("light")
   }
   window.location.reload()
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    window.localStorage.setItem("theme", theme)
    return () => window.removeEventListener("scroll", transitionNavBar);
    

  }, [theme]);

  return (
    <div  className={`nav-${theme} flex  h-14 py-2 items-center px-7 justify-between`}>
      <div className="flex flex-row items-center gap-2">
        <Link to={"/"}>
          {theme==="light"? (<img
            style={{ width: "100px", height: "100px" }}
            src={process.env.PUBLIC_URL + "/images/Logo.png"}
            className="ml-0 md:ml-48"
            alt="logo"
          />) : (<h1 className=" text-cyan-400 text-2xl font-bold ml-0 md:ml-48 ">Social Media</h1>)}
        </Link>
        <input
          className={theme==="light"? ("bg-gray-200 hidden py-2 px-1 focus:outline-none rounded-lg ml-3 md:block") : ("bg-zinc-700 hidden py-2 px-1 focus:outline-none rounded-lg ml-3 md:block text-gray-100")}
          placeholder="Search for people..."
          id="search"
        />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className={theme==="light"? ("flex flex-row gap-7 items-center justify-end") : ("flex flex-row gap-7 items-center justify-end text-gray-100")}>
        {/*Notifications */}
        <Popover isLazy>
          <PopoverTrigger>
            <button className="text-xl">
              <i className="bi bi-bell"></i>
            </button>
          </PopoverTrigger>
          <PopoverContent border={0}>
            <div className={theme==="light"? ("bg-gray-100 border ") : (" bg-gray-800 text-gray-300 rounded-sm")}>
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
            <PopoverBody>
              <h2>Jane Doe liked your post</h2>
            </PopoverBody>
            </div>
          </PopoverContent>
        </Popover>
        {/*Messages*/}
        <Popover>
          <PopoverTrigger>
            <button className="text-xl">
              <i className="bi bi-chat-dots"></i>
            </button>
          </PopoverTrigger>
          <PopoverContent border={0}>
            
            <div className={theme==="light"? ("bg-gray-100 rounded-sm") : ("bg-gray-800 rounded-sm text-gray-300")}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <h1 className="font-bold">Your messages</h1>
            </PopoverHeader>
            <PopoverBody>
              <div className=" space-y-2">
                <Message />
                <hr className=" w-full" />
                <Message />
              </div>
              
            </PopoverBody>
            </div>
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
        <button onClick={toggleTheme}>
          {theme==="light"? (<i class="bi bi-brightness-high-fill"></i>) : (<span className=" text-gray-200"><i class="bi bi-moon-stars-fill"></i></span>)}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
