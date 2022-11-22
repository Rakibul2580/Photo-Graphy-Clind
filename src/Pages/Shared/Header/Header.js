import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const rightMenu = (
    <>
      {user?.uid ? (
        <>
          <li>
            <NavLink to="/addservice">Add Service</NavLink>
          </li>
          <li>
            <Link to={`/myreview/${user?.email}`}>MyReview</Link>
          </li>
          <li>
            <button onClick={logOut} className="btn btn-warning">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  const menuList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-pink-200 fixed top-0 left-0 right-0 bg-base-100 rounded-md bg-opacity-60 z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-compact dropdown-content font-medium mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuList}
              {rightMenu}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case font-bold text-xl text-yellow-400"
          >
            De<span className="text-emerald-400">Memories</span>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal p-0 font-medium">{menuList}</ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal p-0 font-medium">{rightMenu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
