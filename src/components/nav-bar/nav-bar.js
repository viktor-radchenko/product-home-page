import { Link } from "react-router-dom";

import './nav-bar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='products'>Products</Link>
        </li>
        <li>
          <Link to='cart'>Cart</Link>
        </li>
        <li className="navbar__login">
          <Link to='login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
