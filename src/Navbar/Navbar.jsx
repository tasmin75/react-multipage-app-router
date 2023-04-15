import React from 'react';
import {Link} from 'react-router-dom';
import style from './Navbar.module.css'

function Navbar() {


  return (
    <div className={style.navbar}>
      <Link to='/'>Home</Link>
      <Link to='/create'>Create</Link>
      <Link to='/update'>Update</Link>
      <Link to='/delete'>Delete</Link>
    </div>
  );
}

export default Navbar;