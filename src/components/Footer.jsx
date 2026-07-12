import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="brand">
              <img src="/logo.png" alt="AMZ Optic" className="brand-logo footer-logo" />
            </div>
            <p className="slogan" style={{ color: "#c9c9c9", fontSize: 22 }}>see the world</p>
            <p>
              Premium eyewear for every face. Designed in-house, fitted virtually,
              shipped free worldwide.
            </p>
          </div>
          <div>
            <h6>Shop</h6>
            <ul>
              <li><Link to="/shop?f=sunglasses">Sunglasses</Link></li>
              <li><Link to="/shop?f=eyeglasses">Eyeglasses</Link></li>
              <li><Link to="/shop?f=sale">Sale</Link></li>
              <li><Link to="/try-on">Virtual Try-On</Link></li>
            </ul>
          </div>
          <div>
            <h6>Help</h6>
            <ul>
              <li><a href="#footer">Shipping & Returns</a></li>
              <li><a href="#footer">Size Guide</a></li>
              <li><a href="#footer">Prescription Info</a></li>
              <li><a href="#footer">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:hello@amzoptic.com">hello@amzoptic.com</a></li>
              <li><a href="tel:+213555000000">+213 555 00 00 00</a></li>
              <li><a href="#footer">Instagram</a></li>
              <li><a href="#footer">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} AMZ Optic. All rights reserved.</span>
          <span>Free shipping over 10,000 DA · 30-day returns · 2-year warranty</span>
        </div>
        <div className="foot-dev">
          <a href="https://sitedz.com" target="_blank" rel="noopener noreferrer" className="dev-signature">
            Developed by <span className="dev-brand">site<em>dz</em></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
