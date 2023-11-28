import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    let navigate = useNavigate();
  return (
    <div>
        <h1>Home Page</h1>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={() => navigate('/users')}>Все Пользователи</button>
    </div>
  )
}

export default Home
