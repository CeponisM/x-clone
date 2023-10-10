import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Ensure correct path
import TweetsList from "./TweetsList"; // Import your tweets display component

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userDoc = await db.collection("users").doc(userId).get();
      setUser({ id: userDoc.id, data: userDoc.data() });
    };
    fetchUser();
  }, [userId]);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.data.username}</h1>
          <p>{user.data.bio}</p>
          <TweetsList userId={user.id} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default UserProfile;