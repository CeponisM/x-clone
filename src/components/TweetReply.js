import React, { useState } from "react";
import { db } from "./firebase";
import firebase from "firebase/app";

function TweetReply({ tweet }) {
  const [reply, setReply] = useState("");

  const postReply = (e) => {
    e.preventDefault();
    if(reply.trim() !== "") {
      db.collection("tweets").add({
        content: reply,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        replyTo: tweet.id,
        // Add other tweet details here
      });
      setReply("");
    }
  };

  const fetchNestedReplies = async (tweetId) => {
    let replies = [];
    const snapshot = await db.collection("tweets").where("replyTo", "==", tweetId).get();
    snapshot.forEach(doc => {
      replies.push({ id: doc.id, data: doc.data() });
    });
    return replies;
  };

  const retweetWithComment = (originalTweetId, commentContent) => {
    db.collection("tweets").add({
      content: commentContent,
      retweeting: originalTweetId,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // Add other tweet details here
    });
  };

  const likeRetweet = (retweetId, currentLikes) => {
    db.collection("tweets").doc(retweetId).update({
      likes: currentLikes + 1,
    });
  };

  return (
    <div>
      <form onSubmit={postReply}>
        <input 
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder={`Replying to ${tweet.data.username}`}
        />
        <button type="submit">Reply</button>
      </form>
    </div>
  );
}

export default TweetReply;