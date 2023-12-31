import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const dispatch = useDispatch();

  return (
    <div
      className="p-2 m-2 w-72 shadow-lg h-[17rem]"
      onLoad={() => {
        dispatch(toggleMenu());
      }}
    >
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnail-img"
      ></img>
      <ul>
        <li className="font-bold py-2">
          {title.length > 50 ? title.substring(0, 50) + "..." : title}
        </li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
