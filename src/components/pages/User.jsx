import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUserId = async () => {
          try {
            const response = await axios.get(
              `https://jsonplaceholder.typicode.com/users/${userId}`
            );
    
            if (response.status !== 200) {
              throw new Error("fail fetch to getUsers");
            }
    
            const getUser = await response.data;
            setUser(getUser);
          } catch (error) {
            console.error("Error:", error);
          }
        };
        getUserId();
      }, [userId]);
  return (
    <div className="user__card">
        <p className="user__card__title">{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <a className="user__card__web">{user.website}</a>
    </div>
  )
}

export default User
