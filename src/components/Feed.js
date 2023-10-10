import React from "react";
import PostTweet from "./PostTweet";
import TweetsList from "./TweetsList";

function Feed() {
  return (
    <div>
      <h1>Home</h1>
      <PostTweet />
      <TweetsList />
    </div>
  );
}

export default Feed;