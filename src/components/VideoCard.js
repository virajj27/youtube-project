import React from "react";

const VideoCard = ({ info }) => {
  const { title, channelTitle, publishedAt, thumbnails } = info.snippet;
  const { viewCount } = info.statistics;

  return (
    <div className="p-2 m-2 shadow-lg border w-72 rounded-lg mx-5">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-lg"
      />
      <ul className="p-1">
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
