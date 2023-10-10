import React, { useState } from "react";
import { db } from "./firebase"; // Adjust path as per your file structure
import firebase from "firebase/app";

function PostTweet() {
  const [tweetContent, setTweetContent] = useState("");

  const postTweet = (e) => {
    e.preventDefault();
    if(tweetContent.trim() !== "") {
      db.collection("tweets").add({
        content: tweetContent,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // Add other tweet details (user info, etc.) here
      });
      setTweetContent("");
    }
  };

  return (
    <div>
      <form onSubmit={postTweet}>
        <input 
          type="text" 
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
          placeholder="What's happening?"
        />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
}

export default PostTweet;