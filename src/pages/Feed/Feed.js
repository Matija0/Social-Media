import React from "react";
import FeedComponent from "../../components/FeedComponent";
import PostInput from "../../components/PostInput";
import ProfileElement from "../../components/ProfileElement";
import FollowList from "../../components/FollowList";
import Suggested from "../../components/Suggested";
import Stories from "../../components/Stories";
import Ads from "../../components/Ads";

const Feed = () => {
  return (
    <div className=" mx-11 mt-8 pt-14 flex flex-row gap-5 ">
      <div style={{ width: "30%" }}>
        <ProfileElement />
        <div className="mt-5">
          <Ads />
        </div>
      </div>
      <div className="flex flex-col gap-5" style={{ width: "60%" }}>
        <PostInput />
        <Stories />
        <FeedComponent />
        <FeedComponent />
        <FeedComponent />
        <FeedComponent />
      </div>
      <div style={{ width: "30%" }}>
        <FollowList />
        <div className="mt-5">
          <Suggested />
        </div>
      </div>
    </div>
  );
};

export default Feed;
