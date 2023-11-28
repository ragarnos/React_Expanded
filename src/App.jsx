import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.scss";
import AllUsers from "./components/pages/AllUsers";
import Home from "./components/pages/Home";
import PageNotFaund from "./components/Error/PageNotFaund";
import Dashboard from "./components/pages/Dashboard";
import User from "./components/pages/User";
import LayoutMain from "./components/layout/LayoutMain";
import { useState } from "react";
function App() {
  const [IsAdmin, setIsAdmin] = useState(false);
  return (
    <> 
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route path='/' element={<Home />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/users/:userId" element={<User />} /> 
          </Route>

          <Route path="/dashboard" element={IsAdmin ? <Dashboard /> : <PageNotFaund />} />

          <Route path="*" element={<PageNotFaund />} />
        </Routes>
    </>
  )
}

export default App;
