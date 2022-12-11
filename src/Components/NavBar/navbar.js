import React from 'react'
import './navbar.css'
export default function NavBar() {
  return (
    <div class="navBar">
      <div class="navBar_logo">
        <img
          src={require("../../Assets/Logo.png")}
          alt="logo"
        ></img>
      </div>
      <div class="navBar_buttons">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}
