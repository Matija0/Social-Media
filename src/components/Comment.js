import axios from "axios";
import React, { useEffect, useState } from "react";

import { BASEURL } from "../api/BaseUrl";
import { useQuery } from "react-query";

const Comment = (props) => {
  const [content, setContent] = useState();
  const [userId] = useState(3);
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
    setContent("")
  };

  const { data: comment, isLoading, isFetching, isError } = useQuery("comment", () => axios.get(BASEURL + "/api/comment/get").then(resp => resp.data));
  if (isLoading || isFetching) {
    return (
      <>
        <div>
          Loading...
        </div>
      </>
    )
  }


  return (
    <div className=" pt-2 flex flex-col gap-3">
      {comment.map((item) => {
        return (
          <div className="flex flex-row gap-3 px-2" key={item.id}>
            <img
              className=" w-7 h-7 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <div className=" bg-gray-200 py-1 px-1 rounded-lg">
              <h1 className="font-bold">Jane Doe</h1>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
      <form className=" border-t border-gray-300 mt-5" onSubmit={postComment}>
        <input
          type="text"
          placeholder="Post a comment..."
          className=" outline-none w-full py-2 px-2"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Comment;
