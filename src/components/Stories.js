import { useEffect, useState } from "react";
import { BASEURL } from "../api/BaseUrl";
import axios from "axios";

const Stories = () => {
  const [story, setStory] = useState([]);
  const [loading, isLoading] = useState(true);
  const fetchSingleStory = async () => {
    await axios
      .get(BASEURL + "/api/stories/get")
      .then((res) => {
        setStory(res.data);
        isLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchSingleStory();
  }, []);

  return (
    <div className="flex flex-row justify-between gap-4 bg-white h-fit py-2 px-4">
      <button className="cursor-default">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className=" h-14 w-14"
        />
        <h2 className="font-bold text-sm justify-center">Your story</h2>
      </button>
      {story.map((data, index) => {
        return (
          <button className="cursor-default" key={index} loading={loading}>
            <img src={data.picture} alt="profile" className="h-14 w-14" />
            <h2 className="font-bold text-sm justify-center">{data.userId}</h2>
          </button>
        );
      })}
    </div>
  );
};

export default Stories;
