import { useState } from "react";

const Stories = () => {
  const [viewed, setViewed] = useState("false");

  return (
    <div className="flex flex-row gap-4 bg-white h-fit py-2 px-3 rounded-lg">
      <button className="cursor-default">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className="h-20 w-20"
        />
        <h2 className="font-bold text-sm justify-center">Your story</h2>
      </button>
      {viewed ? (
        <button
          className="cursor-default"
          onClick={() => {
            setViewed((val) => !val);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/Story logo-unwatched.png"}
            alt="profile"
            className="h-20 w-20"
          />
          <h2 className="font-bold text-sm justify-center">Jane Doe</h2>
        </button>
      ) : (
        <button
          className="cursor-default"
          onClick={() => {
            setViewed((val) => !val);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/Story logo-watched.png"}
            alt="profile"
            className="h-20 w-20"
          />
          <h2 className="font-bold text-sm justify-center">Jane Doe</h2>
        </button>
      )}
      <button className="cursor-default">
        <img
          src={process.env.PUBLIC_URL + "/images/Story logo-unwatched.png"}
          alt="profile"
          className="h-20 w-20"
        />
        <h2 className="font-bold text-sm justify-center">Jane Doe</h2>
      </button>
      <button className="cursor-default">
        <img
          src={process.env.PUBLIC_URL + "/images/Story logo-unwatched.png"}
          alt="profile"
          className="h-20 w-20"
        />
        <h2 className="font-bold text-sm justify-center">Jane Doe</h2>
      </button>
      <button className="cursor-default">
        <img
          src={process.env.PUBLIC_URL + "/images/Story logo-unwatched.png"}
          alt="profile"
          className="h-20 w-20"
        />
        <h2 className="font-bold text-sm justify-center">Jane Doe</h2>
      </button>
      <button className="cursor-default">
        <img
          src={process.env.PUBLIC_URL + "/images/Story logo-unwatched.png"}
          alt="profile"
          className="h-20 w-20"
        />
        <h2 className="font-bold text-sm justify-center">Jane Doe</h2>
      </button>
      <button className="cursor-default">
        <img
          src={process.env.PUBLIC_URL + "/images/Story logo-unwatched.png"}
          alt="profile"
          className="h-20 w-20"
        />
        <h2 className="font-bold text-sm justify-center">Jane Doe</h2>
      </button>
    </div>
  );
};

export default Stories;
