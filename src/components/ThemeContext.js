import React, { createContext, useState } from "react";
import { db } from "./firebase";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState("16px");

    const saveUserSettings = (userId, settings) => {
        return db.collection("users").doc(userId).update(settings);
    };
    
    return (
      <ThemeContext.Provider value={{ darkMode, setDarkMode, fontSize, setFontSize }}>
        {children}
      </ThemeContext.Provider>
    );
  };