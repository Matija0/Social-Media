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

const Feed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchPost = () => {
    axios
      .get(BASEURL + "/api/post/get")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div
      id="container"
      className=" mx-0 mt-8 pt-14 flex flex-col gap-5 md:flex-row md:mx-12"
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
        {
          data.map((item) => {
            return (
              <div key={item.id}>
                <FeedComponent
                  item={item}
                />
              </div>
            )

          })
        }
      </div>
      <div id="right-el">
        <FriendList />
      </div>
    </div>
  );
};

export default Feed;
