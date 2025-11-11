import React from "react";
import { styles } from "./profile";
import { useUser } from "@/features/auth/user/useUser";



export const ProfilePage: React.FC = () => {
  const {user}= useUser();
 
  return (
    <div >
      <div style={styles.card}>
        <img src={user?.avatar}/>

        <h2 style={styles.name}>{user?.name}</h2>
        <p style={styles.role}>{user?.role}</p>

        <div style={styles.infoBlock}>
          <span style={styles.label}>Email: {user?.email}</span>
          
        </div>

        <button style={styles.button}>Редактировать</button>
      </div>
    </div>
  );
};
