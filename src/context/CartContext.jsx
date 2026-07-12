import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../data/products";

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("amz-cart")) || [];
    } catch {
      return [];
    }
  });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem("amz-cart", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const add = (id) => {
    setItems((prev) => {
      const hit = prev.find((i) => i.id === id);
      return hit
        ? prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { id, qty: 1 }];
    });
    const p = PRODUCTS.find((p) => p.id === id);
    setToast(`${p ? p.name : "Item"} added to bag`);
  };

  const setQty = (id, qty) =>
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setItems([]);

  const detailed = useMemo(
    () =>
      items
        .map((i) => ({ ...i, product: PRODUCTS.find((p) => p.id === i.id) }))
        .filter((i) => i.product),
    [items]
  );
  const count = detailed.reduce((n, i) => n + i.qty, 0);
  const subtotal = detailed.reduce((n, i) => n + i.qty * i.product.price, 0);

  return (
    <CartCtx.Provider value={{ items: detailed, count, subtotal, add, setQty, remove, clear, toast }}>
      {children}
      {toast && <div className="toast">✓ {toast}</div>}
    </CartCtx.Provider>
  );
}

export const useCart = () => useContext(CartCtx);
