import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (response.status !== 200) {
          throw new Error("fail fetch to getUsers");
        }

        const newData = await response.data;
        setUsers(newData);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getUsers();

    function handleResize() {
      console.log("Window resized");
    }
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-space-start">
        {users.map((user) => (
          <div className="user__card" key={user.id}>
            <Link className="user__card__title" to={`/users/${user.id}`}>{user.name}</Link>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <a className="user__card__web">{user.website}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AllUsers;
