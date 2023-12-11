import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function AllUsers() {
    const url = `https://jsonplaceholder.typicode.com/users/`;
    const [data, error, isLoading, refetch] = useFetch(url);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!data) {
        return <div>No data available.</div>;
    }
  return (
    <div className="container">
    <button onClick={refetch}>Refetch Data</button>
      <div className="d-flex flex-wrap justify-space-start">
        {data.map((user) => (
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