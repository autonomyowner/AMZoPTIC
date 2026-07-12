// Each product keeps SVG shape/colors too — the virtual try-on overlay needs a
// transparent vector version of the frame.
export const CATEGORIES = [
  { id: "sunglasses", label: "Sunglasses", blurb: "UV400 polarized shades", img: "/img/orbit-noir.jpg" },
  { id: "eyeglasses", label: "Eyeglasses", blurb: "Optical-ready frames", img: "/img/luna-gold.jpg" },
  { id: "women", label: "Women", blurb: "Cat-eye & oversized", img: "/img/vega-cat.jpg" },
  { id: "men", label: "Men", blurb: "Bold classic silhouettes", img: "/img/men-category.png" },
];

// Prices are stored directly in Algerian Dinar (DZD).
export const PRODUCTS = [
  { id: "orbit-noir", name: "Orbit Noir", cat: "sunglasses", gender: "men", shape: "wayfarer", price: 17500, oldPrice: 25500, badge: "sale",
    img: "/img/orbit-noir.jpg", frame: "#141311", lens: "#26241f",
    desc: "Our signature polarized wayfarer in gloss onyx acetate. The frame that started AMZ Optic." },
  { id: "vega-cat", name: "Vega Cat-Eye", cat: "sunglasses", gender: "women", shape: "cateye", price: 20000, badge: "new",
    img: "/img/vega-cat.jpg", frame: "#d8b394", lens: "#8a6a5a",
    desc: "A sculpted cat-eye in nude blush with gold hardware and gradient rose lenses. Retro glamour, modern fit." },
  { id: "luna-gold", name: "Luna Gold", cat: "eyeglasses", gender: "women", shape: "round", price: 13500, badge: "new",
    img: "/img/luna-gold.jpg", frame: "#b08d57", lens: "#f2f4f6", lensOpacity: 0.35,
    desc: "Feather-light round frames in brushed gold steel — a scholarly classic, ready for your prescription." },
  { id: "club-crema", name: "Club Crema", cat: "eyeglasses", gender: "men", shape: "wayfarer", price: 13000,
    img: "/img/club-crema.jpg", frame: "#5a3a26", lens: "#f4f2ee", lensOpacity: 0.3,
    desc: "Tortoise browline frames with gilt rims — boardroom polish with blue-light coating included." },
  { id: "riva-clear", name: "Riva Clear", cat: "sunglasses", gender: "women", shape: "round", price: 16000, badge: "new",
    img: "/img/riva-clear.jpg", frame: "#d9c8a9", lens: "#a9825a",
    desc: "Crystal-clear acetate with warm honey lenses. Shot on the Riviera, priced for everywhere else." },
  { id: "aurum-round", name: "Aurum Round", cat: "sunglasses", gender: "men", shape: "round", price: 18500, oldPrice: 21500, badge: "sale",
    img: "/img/aurum-round.jpg", frame: "#b08d57", lens: "#40513f",
    desc: "Fine gold wire rounds with deep G-15 green lenses — quiet luxury for loud sunlight." },
  { id: "rosa-round", name: "Rosa Round", cat: "sunglasses", gender: "women", shape: "round", price: 14500, oldPrice: 18500, badge: "sale",
    img: "/img/rosa-round.jpg", frame: "#e8c9be", lens: "#7a5c52",
    desc: "Soft rose rounds with espresso lenses — warm neutrals for every season. Case included." },
  { id: "titan-rect", name: "Titan Rect", cat: "sunglasses", gender: "men", shape: "rect", price: 17000,
    img: "/img/titan-rect.jpg", frame: "#1d1f26", lens: "#2b3040",
    desc: "Matte-black squared metal frame with smoke lenses. Sharp edges, zero effort." },
  { id: "mono-club", name: "Mono Club", cat: "sunglasses", gender: "men", shape: "wayfarer", price: 15500,
    img: "/img/mono-club.jpg", frame: "#101010", lens: "#3a3a3a",
    desc: "The clubmaster silhouette in monochrome — gradient charcoal lenses, timeless attitude." },
  { id: "aero-clear", name: "Aero Clear", cat: "eyeglasses", gender: "women", shape: "hex", price: 12000,
    img: "/img/aero-clear.jpg", frame: "#9aa3ad", lens: "#f0f2f4", lensOpacity: 0.3,
    desc: "Translucent smoke-grey geometry — minimal frames with maximum character." },
  { id: "pacific-round", name: "Pacific Round", cat: "sunglasses", gender: "men", shape: "round", price: 18000, badge: "new",
    img: "/img/pacific-round.jpg", frame: "#17150f", lens: "#2c2a24",
    desc: "Keyhole-bridge rounds built for salt, sand and long horizons. Polarized, of course." },
  { id: "exam-slim", name: "Exam Slim", cat: "eyeglasses", gender: "men", shape: "rect", price: 10500,
    img: "/img/exam-slim.jpg", frame: "#8a7a5c", lens: "#f4f4f2", lensOpacity: 0.25,
    desc: "Featherweight slim readers that pass every eye test. Our lightest optical frame." },
];

export const money = (n) => `${n.toLocaleString("fr-DZ")} DA`;
