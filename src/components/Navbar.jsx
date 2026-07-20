import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Icon from "./Icon";

const LINKS = [
  { to: "/shop", label: "New Arrival" },
  { to: "/shop?f=sale", label: "Sale", hot: true },
  { to: "/shop?f=women", label: "Women" },
  { to: "/shop?f=men", label: "Men" },
  { to: "/shop?f=eyeglasses", label: "Eye Glasses" },
  { to: "/shop?f=sunglasses", label: "Sun Glass" },
  { to: "/guide", label: "Guide" },
  { to: "/try-on", label: "Try-On Studio" },
];

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="nav-wrap">
      <div className="container">
        <div className="nav-top">
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger ${open ? "on" : ""}`}>
              <span></span><span></span><span></span>
            </span>
          </button>

          <Link to="/" className="brand" aria-label="AMZ Optic home">
            <img src="/logo.webp" alt="AMZ Optic" className="brand-logo" />
          </Link>

          <div className="search" role="search">
            <Icon name="search" size={16} />
            <input placeholder="Search frames, styles, collections…" aria-label="Search" />
          </div>

          <div className="nav-actions">
            <Link to="/try-on" className="btn btn-outline btn-sm tryon-cta"><Icon name="eye-outline" size={16} /> Virtual Try-On</Link>
            <Link to="/cart" className="icon-btn" aria-label={`Bag, ${count} items`}>
              <Icon name="bag-handle-outline" size={22} />
              {count > 0 && <span className="cart-count">{count}</span>}
            </Link>
          </div>
        </div>

        <nav className="nav-links">
          {LINKS.filter((l) => l.label !== "Try-On Studio").map((l) => (
            <NavLink key={l.label} to={l.to} className={l.hot ? "hot" : undefined}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/try-on" className="tryon-link">Try-On Studio <Icon name="open-outline" size={13} /></NavLink>
          <a href="#footer">Contact Us</a>
        </nav>
      </div>

      {/* mobile dropdown */}
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="mobile-search" role="search">
          <Icon name="search" size={16} />
          <input placeholder="Search frames, styles…" aria-label="Search" />
        </div>
        <nav className="mobile-links">
          {LINKS.map((l) => (
            <NavLink key={l.label} to={l.to} className={l.hot ? "hot" : undefined}>
              {l.label}
            </NavLink>
          ))}
          <a href="#footer" onClick={() => setOpen(false)}>Contact Us</a>
        </nav>
        <Link to="/cart" className="btn btn-dark mobile-cart">
          Bag {count > 0 ? `(${count})` : ""}
        </Link>
      </div>
      {open && <button className="mobile-backdrop" aria-hidden="true" onClick={() => setOpen(false)} />}
    </div>
  );
}
