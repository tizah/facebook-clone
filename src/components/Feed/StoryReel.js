import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://source.unsplash.com/user/erondu/1600x900"
        profileSrc="https://gravatar.com/avatar/d584fa55de5332e4d7cedf30ecf26ec5?s=400&d=robohash&r=x"
        title="David Zagi"
      />
      <Story
        image="https://source.unsplash.com/user/jackie/likes/1600x900"
        profileSrc="https://gravatar.com/avatar/d584fa55de5332e4d7cedf30ecf26ec5?s=400&d=robohash&r=x"
        title="Imran Amit"
      />
      <Story
        image="https://source.unsplash.com/collection/190727/1600x900"
        profileSrc="https://gravatar.com/avatar/d53309535e170b6158171948dfca7d79?s=400&d=robohash&r=x"
        title="Sarah Umar"
      />
      <Story
        image="https://source.unsplash.com/user/erondu/daily"
        profileSrc="https://robohash.org/ae23dd6dcdc46c9e197ec01472448e85?set=set4&bgset=&size=400x400"
        title="Tobi Tobi"
      />
      <Story
        image="https://source.unsplash.com/WLUHO9A_xik/1600x900"
        profileSrc="https://api.adorable.io/avatars/400/0b5fdb530c9069835cf12854ede01c68.png"
        title="Gupta Ayu"
      />
    </div>
  );
}

export default StoryReel;
