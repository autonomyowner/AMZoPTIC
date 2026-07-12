import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, money } from "../data/products";
import { useCart } from "../context/CartContext";
import Icon from "../components/Icon";

export default function Product() {
  const { id } = useParams();
  const { add } = useCart();
  const p = PRODUCTS.find((x) => x.id === id);

  if (!p) {
    return (
      <main>
        <div className="container">
          <div className="empty-note">
            Frame not found. <Link to="/shop" style={{ textDecoration: "underline" }}>Back to shop</Link>
          </div>
        </div>
      </main>
    );
  }

  const related = PRODUCTS.filter((x) => x.id !== p.id && (x.cat === p.cat || x.shape === p.shape)).slice(0, 4);

  return (
    <main>
      <div className="container">
        <section className="pdp">
          <div className="pdp-visual">
            <img src={p.img} alt={p.name} />
          </div>
          <div className="pdp-info">
            <div className="cat">{p.cat} · {p.gender}</div>
            <h1 className="display">{p.name}</h1>
            <div className="pdp-price">
              {money(p.price)}
              {p.oldPrice && <s>{money(p.oldPrice)}</s>}
            </div>
            <p className="pdp-desc">{p.desc}</p>
            <div className="pdp-actions">
              <button className="btn btn-dark" onClick={() => add(p.id)}>Add to Bag — {money(p.price)}</button>
              <Link to={`/try-on?frame=${p.id}`} className="btn btn-outline"><Icon name="eye-outline" size={16} /> Try It On</Link>
            </div>
            <dl className="pdp-meta">
              <div><dt>Frame shape</dt><dd style={{ textTransform: "capitalize" }}>{p.shape}</dd></div>
              <div><dt>Lens</dt><dd>{p.cat === "sunglasses" ? "Polarized UV400" : "Optical demo (Rx-ready)"}</dd></div>
              <div><dt>Material</dt><dd>Bio-acetate & steel hinges</dd></div>
              <div><dt>Shipping</dt><dd>Free over 10,000 DA · 2–5 days</dd></div>
              <div><dt>Warranty</dt><dd>2 years</dd></div>
            </dl>
          </div>
        </section>

        {related.length > 0 && (
          <>
            <div className="section-head" style={{ marginTop: 12 }}>
              <h2 className="display">You may also like</h2>
              <Link to="/shop" className="link-more">View all</Link>
            </div>
            <div className="prod-grid" style={{ paddingBottom: 72 }}>
              {related.map((x) => (
                <ProductCard key={x.id} p={x} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
