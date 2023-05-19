import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Comment from "./Comment";
import axios from "axios";
import { BASEURL } from "../api/BaseUrl";

const FeedComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const fetchPost = () => {
    axios
      .get(BASEURL + "/api/post/get")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {post.map((data, index) => {
        return (
          <div
            className="feed-item bg-white rounded-lg py-2 px-3 shadow-lg"
            key={index}
            loading={loading}
          >
            <div className="flex flex-row justify-between items-center px-3">
              <div className="flex flex-row items-center justify-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="User profile"
                  className=" w-11 h-11 rounded-full"
                />
                <div>
                  <h1 className="text-black text-lg">John Doe</h1>
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
              <p className="text-base my-4">{data.content}</p>
              <img
                className=" w-full rounded-lg"
                src="https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521__340.jpg"
                alt=""
              />
              <div className="flex flex-row gap-2 mt-3 items-center">
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
                  Jane Doe{" "}
                  <span className=" font-normal text-gray-600">and </span> 45
                  others
                </h3>
              </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Comments</ModalHeader>
                <ModalCloseButton />
                <ModalBody paddingX={0}>
                  <Comment />
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        );
      })}
    </>
  );
};

export default FeedComponent;
