import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
          <div className="footer-top">
            <div className="footer-col">
              <h3>🛍️ ShopEasy</h3>
              <p>Your one-stop destination for quality products at the best prices.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Track Order</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <p>📧 support@shopeasy.com</p>
              <p>📞 +1 (800) 123-4567</p>
              <p>📍 123 Market Street, NY</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 ShopEasy. All rights reserved.</p>
          </div>
        </footer>
  )
}
