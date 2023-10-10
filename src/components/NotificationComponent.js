import React, { useEffect, useState } from "react";
import { db } from "./firebase";

function NotificationsComponent({ userId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("notifications")
      .where("recipientId", "==", userId)
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setNotifications(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
      });
    
    return () => {
      unsubscribe();
    };
  }, [userId]);

  return (
    <div>
      {notifications.map(notification => (
        <div key={notification.id} style={{ background: notification.data.read ? "#fff" : "#eee" }}>
          <p>{notification.data.type} by {notification.data.senderId}</p>
          {/* Add more detailed rendering and perhaps link to the related tweet */}
        </div>
      ))}
    </div>
  );
}

export default NotificationsComponent;