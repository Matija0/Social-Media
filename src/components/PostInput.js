import React, { useEffect, useState } from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import axios from "axios";
import { BASEURL } from "../api/BaseUrl";

const PostInput = () => {
  const uploader = Uploader({
    apiKey: "public_FW25bKi9hKiRJXVLSG9PTXUHrLQR",
  });
  const uploaderOptions = {
    multi: false,
    styles: {
      colors: {
        primary: "#377dff",
      },
    },
    showRemoveButton: true,
  };
  const MyUploadButton = ({ setFiles }) => (
    <UploadButton
      uploader={uploader}
      options={uploaderOptions}
      onComplete={setFiles}
    >
      {({ onClick }) => (
        <button onClick={onClick} className=" text-gray-400 text-2xl">
          <i className="bi bi-image"></i>
        </button>
      )}
    </UploadButton>
  );
  const MyUploadedFiles = ({ files }) =>
    files.map((file) => {
      // Tip: save 'filePath' to your DB (not 'fileUrl').
      const filePath = file.filePath;
      const fileUrl = uploader.url(filePath, "thumbnail"); // "raw" for un-transformed file.
      return (
        <p key={fileUrl}>
          <a href={fileUrl} target="_blank" rel="noreferrer">
            <img
              className=" w-11 h-7 rounded-lg"
              src={fileUrl}
              alt="postimage"
            />
          </a>
        </p>
      );
    });
  const [files, setFiles] = useState(0);
  const [content, setContent] = useState("");
  const userId = 1;
  const date = new Date();
  const sendData = async () => {
    const params = {
      content: content,
      picture: files[0].fileUrl,
      createdAt: date,
      userId: userId,
    };
    try {
      await axios.post(BASEURL + "/api/post/post", params).then((res) => {
        console.log(res.data);
      });
      alert("Success");
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData();
  };
  useEffect(() => { }, []);

  return (
    <div className=" bg-white  py-3 px-4  rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row ">
          <input
            className=" bg-gray-200 w-full py-3 px-1 focus:outline-none rounded-lg"
            placeholder="What's on your mind"
            id="post"
            name="text"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3 justify-between items-center mt-4">
          <div>
            {files.length ? (
              <MyUploadedFiles files={files} />
            ) : (
              <MyUploadButton setFiles={setFiles} />
            )}
          </div>
          <button
            type="submit"
            className=" w-fit h-fit py-2 rounded-lg px-3 text-sm text-white bg-sky-500 hover:bg-sky-400"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostInput;