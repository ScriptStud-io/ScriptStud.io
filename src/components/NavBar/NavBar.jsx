/** IMPORTANT!
 *    This file is here because it came with the
 *    original file we cloned from General Assembly.
 *    For the time being we are NOT planning to
 *    use this file.
 */


import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      <ul>
      {user ?
        <>
          <li>Welcome, {user.name}</li>
          {/* <li><NavLink to="/users">Users</NavLink></li> */}
        </>
      :
        <>
          <li><NavLink to="/login">Log In</NavLink></li>
          {/* <li><NavLink to="/users">Users</NavLink></li> */}
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </>
      }
      </ul>
    </nav>
  )
}

export default NavBar;
