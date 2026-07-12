import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, PRODUCTS } from "../data/products";
import Icon from "../components/Icon";

const MARQUEE = [
  "Free shipping over 10,000 DA",
  "UV400 polarized lenses",
  "Virtual try-on studio",
  "30-day easy returns",
  "2-year frame warranty",
  "New drops every month",
];

export default function Home() {
  const featured = PRODUCTS.slice(0, 8);
  return (
    <main>
      <div className="container">
        {/* HERO */}
        <section className="hero">
          <Link to="/shop?f=sale" className="hero-main hero-main--poster">
            <img className="hero-photo" src="/img/promo-hero.webp" alt="AMZ Optic — see the world. 35% off, order now." />
          </Link>

          <div className="hero-side">
            <Link to="/shop?f=sale" className="hero-card offer">
              <img className="card-art" src="/img/aurum-round.webp" alt="" />
              <span className="tag">For New Comers</span>
              <h3 className="display">Exclusive<br />Offer</h3>
            </Link>
            <Link to="/shop" className="hero-card arrivals">
              <img className="card-art" src="/img/luna-gold.webp" alt="" />
              <span className="tag">New Arrivals</span>
              <h3 className="display">Fresh<br />Frames</h3>
            </Link>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="section-head">
          <h2 className="display">Browse Categories</h2>
          <Link to="/shop" className="link-more">View all</Link>
        </div>
        <div className="cat-grid">
          {CATEGORIES.map((c) => (
            <Link key={c.id} to={`/shop?f=${c.id}`} className="cat-card">
              <div className="cat-art">
                <img src={c.img} alt={c.label} loading="lazy" />
              </div>
              <h4>{c.label}</h4>
              <p>{c.blurb}</p>
            </Link>
          ))}
        </div>

        {/* FEATURED */}
        <div className="section-head">
          <h2 className="display">Most Picked</h2>
          <Link to="/shop" className="link-more">Shop everything</Link>
        </div>
        <div className="prod-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {/* TRY-ON BANNER */}
        <section className="tryon-banner">
          <div>
            <div className="eyebrow" style={{ color: "#8d8880" }}>AMZ Optic Studio</div>
            <h2 className="display">Try them on, <em>virtually.</em></h2>
            <p>
              Use your camera or upload a photo and see any frame on your face before
              you buy. Position, scale and switch styles in real time.
            </p>
            <Link to="/try-on" className="btn btn-light"><Icon name="eye-outline" size={16} /> Launch Try-On Studio</Link>
          </div>
          <div className="tryon-visual">
            <img
              className="tryon-studio-shot"
              src="/img/tryon-studio.webp"
              alt="AMZ Optic Studio — try any frame on your face before you buy"
              loading="lazy"
            />
          </div>
        </section>

        {/* FEATURES */}
        <div className="features">
          {[
            ["cube-outline", "Free Shipping", "On all orders over 10,000 DA, nationwide."],
            ["refresh-outline", "30-Day Returns", "Changed your mind? Send them back, free."],
            ["shield-checkmark-outline", "2-Year Warranty", "Hinges, coatings and frames — covered."],
            ["glasses-outline", "Rx Ready", "Add your prescription to any optical frame."],
          ].map(([ico, t, d]) => (
            <div className="feature" key={t}>
              <div className="f-ico"><Icon name={ico} size={26} /></div>
              <h5>{t}</h5>
              <p>{d}</p>
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <section className="newsletter">
          <h2 className="display">Join the list</h2>
          <p>10% off your first order plus early access to every drop.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="your@email.com" aria-label="Email address" />
            <button className="btn btn-dark" type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </main>
  );
}
