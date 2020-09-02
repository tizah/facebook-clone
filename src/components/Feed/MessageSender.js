import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcom from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./MessageSender.css";

function MessageSender() {
  const [input, setInput] = useState("");
  //const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //can save to db or external storage

    //reset inputs
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder="What's on your mind?"
          />
          {/* <input placeholder="image URL (Optional)"  value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}/> */}
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__botton">
        <div className="messageSender__option">
          <VideocamIcom style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
