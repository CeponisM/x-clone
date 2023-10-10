import React, { useState } from "react";
import { db } from "./firebase";

function UserSettings({ user }) {
  const [username, setUsername] = useState(user.data.username);
  const [bio, setBio] = useState(user.data.bio);

  const updateUserDetails = (e) => {
    e.preventDefault();
    db.collection("users").doc(user.id).update({
      username,
      bio,
    });
  };

  return (
    <form onSubmit={updateUserDetails}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Bio:
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}
export default UserSettings;