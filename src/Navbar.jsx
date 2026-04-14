import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🛍️ ShopEasy</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="cart-btn">🛒 Cart <span className="cart-count">0</span></button>
      </div>
    </nav>
  )
}
