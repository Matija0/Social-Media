import { useEffect, useState } from "react";
import { BASEURL } from "../api/BaseUrl";
import axios, { Axios } from "axios";
import { useQuery } from "react-query";
import useApi from "../api/useApi";
import LoaderOval from "./LoaderOval";


const Stories = () => {
  //const api = useApi()


  const { data: story, isLoading, isFetching, isError } = useQuery("story", () => axios.get(BASEURL + "/api/stories/get").then(resp => resp.data));
  if (isLoading || isFetching) {
    return (
      <>
        <LoaderOval />
      </>
    )

  }
  console.log(story)
  return (
    <div className="flex flex-row  gap-4 bg-white h-fit py-2 px-4">
      <button className="cursor-default">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className=" h-14 w-14"
        />
        <h2 className="font-bold text-sm justify-center">Your story</h2>
      </button>

      {story != undefined ? story.map((item, index) => (
        <div>
          <img src={item.picture} className="h-14 w-14" />
          <h2 className="font-bold text-sm text-center">{item.userId}</h2>
        </div>
      )) : null}
    </div>
  );
};

export default Stories;
