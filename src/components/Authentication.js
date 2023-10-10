import React, { useState } from "react";
import { auth, provider } from "./firebase"; // Path might change based on your folder structure

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
      .catch((error) => alert(error.message));
  };
  
  const signInWithEmail = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };
  
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      
      <button onClick={signInWithEmail}>Sign In</button>
      <button onClick={register}>Register</button>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default Authentication;