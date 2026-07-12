import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "sunglasses", label: "Sunglasses" },
  { id: "eyeglasses", label: "Eyeglasses" },
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
  { id: "sale", label: "On Sale" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const f = params.get("f") || "all";

  const list = PRODUCTS.filter((p) => {
    if (f === "all") return true;
    if (f === "sale") return !!p.oldPrice;
    if (f === "women" || f === "men") return p.gender === f;
    return p.cat === f;
  });

  return (
    <main>
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">The Collection</div>
          <h1 className="display">Shop Frames</h1>
          <p>Every AMZ Optic frame ships with a hard case, microfiber cloth and our 2-year warranty.</p>
        </div>
        <div className="filters" role="tablist" aria-label="Filter products">
          {FILTERS.map((x) => (
            <button
              key={x.id}
              className={`chip ${f === x.id ? "on" : ""}`}
              onClick={() => setParams(x.id === "all" ? {} : { f: x.id })}
            >
              {x.label}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <div className="empty-note">No frames match this filter yet.</div>
        ) : (
          <div className="prod-grid" style={{ paddingBottom: 72 }}>
            {list.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
