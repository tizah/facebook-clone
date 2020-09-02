import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import moment from "moment";
import Post from "./Post";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={`https://picsum.photos/id/237/500/600`}
        message={`This is my new post`}
        timestamp={moment(Date.now()).from()}
        username={`Easy Do`}
        image={`https://picsum.photos/500/600?grayscale`}
      />
      <Post
        profilePic={`https://picsum.photos/seed/picsum/200/300`}
        message={`This is my new post`}
        timestamp={moment(Date.now()).from()}
        username={`Easy Do`}
      />
    </div>
  );
}

export default Feed;
