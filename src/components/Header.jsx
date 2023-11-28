import { NavLink } from 'react-router-dom'

const Header = () => {
  return (

    <nav>
      <ul className="horizontal">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/users'>User</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header
