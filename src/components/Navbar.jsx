import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'
import '../App.css'
const Navbar = () => {

  const links = (
    <>
      <li>
        <NavLink
       
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
         
          to="/donations"
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
        
          to="/stats"
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <a href="">
          {" "}
          <img src={logo} alt="" className="w-28 h-9 lg:w-60 lg:h-16" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
