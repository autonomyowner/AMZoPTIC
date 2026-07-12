import { Link } from "react-router-dom";
import { money } from "../data/products";
import { useCart } from "../context/CartContext";
import Icon from "../components/Icon";

export default function Cart() {
  const { items, subtotal, setQty, remove, clear } = useCart();
  const FREE_SHIP_THRESHOLD = 10000;
  const shipping = subtotal === 0 || subtotal >= FREE_SHIP_THRESHOLD ? 0 : 800;

  return (
    <main>
      <div className="container cart-page">
        <div className="eyebrow">Your Bag</div>
        <h1 className="display" style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}>
          Shopping Bag
        </h1>

        {items.length === 0 ? (
          <div className="empty-note">
            <p style={{ marginBottom: 18 }}>Your bag is empty — your face deserves better.</p>
            <Link to="/shop" className="btn btn-dark">Browse Frames</Link>
          </div>
        ) : (
          <div className="cart-grid">
            <div className="cart-list">
              {items.map(({ product: p, qty }) => (
                <div className="cart-item" key={p.id}>
                  <Link to={`/product/${p.id}`} className="thumb">
                    <img src={p.img} alt={p.name} />
                  </Link>
                  <div>
                    <div className="cat">{p.cat}</div>
                    <h4><Link to={`/product/${p.id}`}>{p.name}</Link></h4>
                    <div className="qty">
                      <button onClick={() => setQty(p.id, qty - 1)} aria-label="Decrease quantity"><Icon name="remove-outline" size={14} /></button>
                      <span>{qty}</span>
                      <button onClick={() => setQty(p.id, qty + 1)} aria-label="Increase quantity"><Icon name="add-outline" size={14} /></button>
                    </div>
                  </div>
                  <div className="right">
                    <span className="price">{money(p.price * qty)}</span>
                    <button className="rm" onClick={() => remove(p.id)}>Remove</button>
                  </div>
                </div>
              ))}
              <button className="rm" style={{ justifySelf: "start", padding: "6px 0" }} onClick={clear}>
                Clear bag
              </button>
            </div>

            <div className="summary">
              <h3>Order Summary</h3>
              <div className="row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
              <div className="row">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : money(shipping)}</span>
              </div>
              {shipping > 0 && (
                <div className="row" style={{ fontSize: 12.5 }}>
                  <span>Add {money(FREE_SHIP_THRESHOLD - subtotal)} more for free shipping</span>
                </div>
              )}
              <div className="row total"><span>Total</span><span>{money(subtotal + shipping)}</span></div>
              <button className="btn btn-dark" onClick={() => alert("Demo store — checkout isn't wired up yet.")}>
                Checkout <Icon name="arrow-forward-outline" size={16} />
              </button>
              <Link to="/shop" className="btn btn-outline" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>
                Continue shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
