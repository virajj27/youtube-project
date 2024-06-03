import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [video, setVideo] = useState();
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideo(json.items);
  };
  return (
    <div className="flex flex-wrap px-3 ">
      {video &&
        video.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
