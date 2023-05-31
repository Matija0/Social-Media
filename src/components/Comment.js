import axios from "axios";
import React, { useEffect } from "react";

import { BASEURL } from "../api/BaseUrl";
import { useQuery } from "react-query";
import LoaderOval from "./LoaderOval";
import { useGetTheme } from "../helpers/GetTheme";

const Comment = (props) => {
  const theme = useGetTheme();

  useEffect(() => {}, [theme]);

  const {
    data: comment,
    isLoading,
    isFetching,
  } = useQuery("comment", () =>
    axios.get(BASEURL + "/api/comment/get").then((resp) => resp.data)
  );
  if (isLoading || isFetching) {
    return (
      <>
        <LoaderOval />
      </>
    );
  }

  return (
    <div
      id="comment"
      className=" py-2 flex flex-col gap-3  max-h-96 overflow-y-scroll"
    >
      {comment.map((item) => {
        return (
          <div className="flex flex-row gap-3 px-2" key={item?.postId?.id}>
            <img
              className=" w-7 h-7 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <div
              className={
                theme === "light"
                  ? " bg-gray-200 py-1 px-2 rounded-lg"
                  : " bg-zinc-700 py-1 px-2 rounded-lg text-gray-300"
              }
            >
              <h1 className="font-bold">{item?.user?.username}</h1>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
