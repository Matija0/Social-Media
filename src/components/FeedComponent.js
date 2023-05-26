import React, { useState } from "react";
import axios from "axios"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import Comment from "./Comment";
import { BASEURL } from "../api/BaseUrl";
import { useGetUserID } from "../helpers/GetUserID";
import { useGetTheme } from "../helpers/GetTheme";

const FeedComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const theme=useGetTheme()

  //comment post
  const [content, setContent] = useState();
  const userId=useGetUserID()
  const [postId] = useState(3);
  const postComment = (event) => {
    event.preventDefault();
    const params = {
      content: content,
      userId: userId,
      postId: postId,
    };
    axios
      .post(BASEURL + "/api/comment/post", params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setContent("");
  };

  return (
    <div className={theme==="light"? ("feed-item bg-white rounded-lg py-2 px-3 shadow-lg") : ("feed-item bg-zinc-800 rounded-lg py-2 px-3 shadow-lg text-gray-300")}>
      <div className="flex flex-row justify-between items-center px-3">
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User profile"
            className=" w-11 h-11 rounded-full"
          />
          <div>
            <h1 className="text-lg">{props.item?.user?.username}</h1>
            <span className=" text-gray-400 text-sm">San Diego, CA</span>
          </div>
        </div>
        {isFollowed ? (
          <button
            className="border-2 border-sky-500 text-sky-500 py-1 px-2  w-fit h-fit rounded-lg text-sm"
            onClick={() => {
              setIsFollowed((val) => !val);
            }}
          >
            <i className="bi bi-check-all"></i>
          </button>
        ) : (
          <button
            className="border-2 border-sky-500 text-sky-500 py-1 px-2  w-fit h-fit rounded-lg text-sm"
            onClick={() => {
              setIsFollowed((val) => !val);
            }}
          >
            Follow{" "}
          </button>
        )}
      </div>
      <div className="">
        <p className="text-base my-4">{props.item.content}</p>
        <img
          className=" w-full rounded-lg"
          src={props.item.picture}
          alt="Post"
        />
        <div className="text-sm text-gray-400 mt-3 ml-auto w-fit self-end">
          {props.item.createdAt}
        </div>
        <div className="flex flex-row gap-2 mt-3 items-center justify-center">
          {isLiked ? (
            <button
              className="text-2xl text-blue-500"
              onClick={() => {
                setIsLiked((val) => !val);
              }}
            >
              <i className="bi bi-hand-thumbs-up-fill"></i>{" "}
              <span className="text-xl"></span>
            </button>
          ) : (
            <button
              className="text-2xl text-blue-500"
              onClick={() => {
                setIsLiked((val) => !val);
              }}
            >
              <i className="bi bi-hand-thumbs-up"></i>
            </button>
          )}
          <button
            className="text-2xl text-blue-500 ml-auto flex flex-row items-center justify-center gap-1"
            onClick={onOpen}
          >
            <span className="text-xl">0</span>{" "}
            <i className="bi bi-chat-square-text"></i>
          </button>
        </div>
        <div className=" my-2">
          <h3 className="font-bold text-sm">
            <span className=" font-normal text-gray-600">Liked by </span>
            Jane Doe <span className=" font-normal text-gray-600">and </span> 45
            others
          </h3>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent >
          <div className={theme==="light"? ("bg-white"): ("bg-zinc-800 text-gray-300")}>
          <ModalHeader>Comments</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding={0}>
            <Comment />
          </ModalBody>
          <ModalFooter paddingX={0} paddingTop={0}> 
          <form className=" border-t border-gray-300 w-full" onSubmit={postComment}>
        <input
          type="text"
          placeholder="Post a comment..."
          className={theme==="light"? (" outline-none w-full pt-2 px-2") : (" bg-zinc-800 text-gray-300 outline-none w-full pt-2 px-2")}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </form>
          </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FeedComponent;
