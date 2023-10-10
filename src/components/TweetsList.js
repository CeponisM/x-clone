import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Adjust path as per your file structure

function TweetsList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("tweets")
      .where(userId ? "userId" : "docId", "==", userId || "any")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTweets(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
      });

    return () => {
      unsubscribe();
    };
  }, [userId]);

  const likeTweet = (id, likes) => {
    db.collection("tweets").doc(id).update({
      likes: likes + 1,
    });
  };

  const retweet = (tweetData) => {
    db.collection("tweets").add({
      ...tweetData,
      retweetCount: (tweetData.retweetCount || 0) + 1,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div>
      {tweets.map(tweet => (
        <div key={tweet.id}>
          <p>{tweet.data.content}</p>
          <button onClick={() => likeTweet(tweet.id, tweet.data.likes)}>Like {tweet.data.likes || 0}</button>
          <button onClick={() => retweet(tweet.data)}>Retweet {tweet.data.retweetCount || 0}</button>
          {/* ... other tweet display details ... */}
        </div>
      ))}
    </div>
  );
}

export default TweetsList;