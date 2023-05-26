import React from "react";
import FeedComponent from "../../components/FeedComponent";
import PostInput from "../../components/PostInput";
import ProfileElement from "../../components/ProfileElement";
import Stories from "../../components/Stories";
import Ads from "../../components/Ads";
import FriendList from "../../components/FriendList";

import { useEffect } from "react";
import { useState } from "react";
import { BASEURL } from "../../api/BaseUrl";
import axios from "axios";
import { useQuery } from "react-query";
import LoaderTriangle from "../../components/LoaderTriangle";

const Feed = () => {
  const {
    data: post,
    isLoading,
    isFetching,
    isError,
  } = useQuery("post", () =>
    axios.get(BASEURL + "/api/post/get").then((resp) => resp.data)
  );
  if (isLoading || isFetching) {
    return (
      <div className="loader-t">
        <LoaderTriangle />
      </div>
    );
  }
  return (
    <div
      id="container"
      className=" pt-14 flex flex-col gap-5 md:flex-row "
    >
      <div id="left-el">
        <ProfileElement />
        <div className="mt-5 hidden md:block">
          <Ads />
        </div>
      </div>
      <div id="center-el" className="flex flex-col gap-5">
        <PostInput />
        <Stories />
        {post.map((item) => {
          return (
            <div key={item.id}>
              <FeedComponent item={item} />
            </div>
          );
        })}
      </div>
      <div id="right-el">
        <FriendList />
      </div>
    </div>
  );
};

export default Feed;
