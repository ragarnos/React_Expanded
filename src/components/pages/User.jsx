import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const User = () => {
    const { userId } = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
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
    <>
        <div className="user__card">
            <p className="user__card__title">{data.name}</p>
            <p>{data.username}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <a className="user__card__web">{data.website}</a>
        </div>
        <button onClick={refetch}>Refetch Data</button>
    </>
    
    
  )
}

export default User