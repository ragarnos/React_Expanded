import { NavLink, Route, Routes } from "react-router-dom";
import "./assets/styles/App.scss";
import Home from "./components/pages/Home";
import AllUsers from "./components/pages/Allusers";
import User from "./components/pages/User";
function App() {

  return (
    <> 
    <nav>
      <ul className="horizontal">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/users'>User</NavLink></li>
      </ul>
    </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/users/:userId" element={<User />} /> 
        </Routes>
    </>
  );
}

export default App;
