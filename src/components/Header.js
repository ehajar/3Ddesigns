import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Restaurant.</div>
        <nav>
          <ul>
            <li>
              <a href='/'>Scanner Qr</a>
            </li>
            <li>
              <a href='/'>products</a>
            </li>
            <li>
              <a href='/'>solutions</a>
            </li>
            <li>
              <a href='/'>About us</a>
            </li>
            <li className='btn'>
              <a href='/'>order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}