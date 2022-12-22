import React from 'react'
import './navbar.css'
export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar_logo">
        <img src={require("../../Assets/Logo.png")} alt="logo"></img>
      </div>
      <div className="navBar_buttons">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}
