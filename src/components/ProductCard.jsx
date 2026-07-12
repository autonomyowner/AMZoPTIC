import { Link } from "react-router-dom";
import { money } from "../data/products";
import { useCart } from "../context/CartContext";
import Icon from "./Icon";

export default function ProductCard({ p }) {
  const { add } = useCart();
  return (
    <article className="prod-card">
      <Link to={`/product/${p.id}`} className="prod-thumb">
        <img src={p.img} alt={p.name} loading="lazy" />
        {p.badge && <span className={`badge ${p.badge}`}>{p.badge}</span>}
      </Link>
      <div className="prod-info">
        <div className="cat">{p.cat}</div>
        <h4><Link to={`/product/${p.id}`}>{p.name}</Link></h4>
        <div className="prod-foot">
          <span className="price">
            {money(p.price)}
            {p.oldPrice && <s>{money(p.oldPrice)}</s>}
          </span>
          <button className="add-mini" onClick={() => add(p.id)} aria-label={`Add ${p.name} to bag`}>
            <Icon name="add-outline" size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
