import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const SHAPES = [
  {
    id: "oval",
    name: "Oval",
    img: "/img/guide/oval.jpg",
    tag: "The all-rounder",
    intro:
      "Balanced proportions with a gently rounded jaw and slightly wider cheekbones. The most versatile shape — almost every frame flatters it.",
    best: ["Wayfarers & squares", "Round metal", "Oversized styles", "Cat-eye"],
    avoid: "Frames wider than the broadest part of your face.",
    filter: "sunglasses",
  },
  {
    id: "triangle",
    name: "Triangular",
    img: "/img/guide/triangle.jpg",
    tag: "Strong jaw, softer brow",
    intro:
      "A narrower forehead widening toward the jaw. The goal is to add width and weight up top to balance a stronger lower face.",
    best: ["Bold browline", "Cat-eye", "Decorated top rims", "Geometric frames"],
    avoid: "Bottom-heavy or low-set frames that pull the eye downward.",
    filter: "women",
  },
  {
    id: "square",
    name: "Square",
    img: "/img/guide/square.jpg",
    tag: "Defined angles",
    intro:
      "A strong jaw and broad forehead of similar width. Curved, lighter frames soften the angles and add contrast.",
    best: ["Round frames", "Oval frames", "Thin metal rims", "Curved edges"],
    avoid: "Boxy, sharp-cornered frames that echo the jawline.",
    filter: "eyeglasses",
  },
  {
    id: "round",
    name: "Round",
    img: "/img/guide/round.jpg",
    tag: "Soft curves",
    intro:
      "Full cheeks and a rounded chin with equal width and length. Angular, structured frames add definition and lengthen the face.",
    best: ["Square & rectangular", "Bold acetate", "Cat-eye", "D-frame"],
    avoid: "Small round frames that mirror the face's curves.",
    filter: "men",
  },
  {
    id: "heart",
    name: "Heart",
    img: "/img/guide/heart.jpg",
    tag: "Wide brow, narrow chin",
    intro:
      "A broad forehead tapering to a delicate chin. Frames that add width low down and stay light on top restore balance.",
    best: ["Rimless & light rims", "Oval frames", "Rectangular", "Winged edges"],
    avoid: "Heavy, top-heavy or decorated upper frames.",
    filter: "sunglasses",
  },
];

export default function Guide() {
  return (
    <main>
      <div className="container">
        {/* ---------- header ---------- */}
        <header className="page-head guide-head">
          <div className="eyebrow">Style Guide</div>
          <h1 className="display">Find the frame for<br />your face shape</h1>
          <p>
            Nearly every face is a blend of shapes rather than one perfect
            category — but knowing your dominant one is the fastest way to a
            frame that fits. Use this guide to match your silhouette, then try it
            on live in our studio.
          </p>
          <div className="guide-head-actions">
            <Link to="/try-on" className="btn btn-dark">
              <Icon name="eye-outline" size={16} /> Virtual Try-On
            </Link>
            <Link to="/shop" className="btn btn-outline">
              Browse all frames
            </Link>
          </div>
        </header>

        {/* ---------- quick jump chips ---------- */}
        <nav className="guide-jump" aria-label="Jump to a face shape">
          {SHAPES.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="guide-jump-chip">
              <img src={s.img} alt={`${s.name} face shape`} loading="lazy" />
              <span>{s.name}</span>
            </a>
          ))}
        </nav>

        {/* ---------- shape sections ---------- */}
        <div className="guide-shapes">
          {SHAPES.map((s, i) => (
            <section id={s.id} key={s.id} className="guide-shape" style={{ scrollMarginTop: 110 }}>
              <div className="guide-shape-visual">
                <span className="guide-shape-index">0{i + 1}</span>
                <a href={s.img} target="_blank" rel="noopener noreferrer" title="Open full size">
                  <img src={s.img} alt={`${s.name} face shape frame recommendations`} loading="lazy" />
                </a>
              </div>
              <div className="guide-shape-body">
                <div className="eyebrow">{s.tag}</div>
                <h2 className="display">{s.name} face</h2>
                <p>{s.intro}</p>
                <div className="guide-best">
                  <h3>Best frame styles</h3>
                  <ul>
                    {s.best.map((b) => (
                      <li key={b}>
                        <Icon name="shield-checkmark-outline" size={16} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="guide-avoid">
                  <strong>Steer clear of:</strong> {s.avoid}
                </p>
                <Link to={`/shop?f=${s.filter}`} className="btn btn-dark">
                  Make my choice <Icon name="arrow-forward-outline" size={15} />
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* ---------- tips strip ---------- */}
        <section className="guide-tips">
          <h2>Not sure which is yours?</h2>
          <p>Three quick ways to read your own face shape at home.</p>
          <div className="guide-tips-grid">
            <div className="guide-tip">
              <div className="guide-tip-ico"><Icon name="glasses-outline" size={22} /></div>
              <h4>Trace it</h4>
              <p>Face a mirror and trace your outline on the glass with a marker. Step back — the drawn shape is your answer.</p>
            </div>
            <div className="guide-tip">
              <div className="guide-tip-ico"><Icon name="cube-outline" size={22} /></div>
              <h4>Measure it</h4>
              <p>Compare forehead, cheekbone and jaw widths plus face length. The widest area points to your shape.</p>
            </div>
            <div className="guide-tip">
              <div className="guide-tip-ico"><Icon name="eye-outline" size={22} /></div>
              <h4>Try it live</h4>
              <p>Skip the guesswork — our Virtual Try-On overlays real frames on your camera in seconds.</p>
            </div>
          </div>
        </section>

        {/* ---------- closing CTA ---------- */}
        <section className="guide-cta tryon-banner">
          <div>
            <h2>See it before <em>you buy it</em></h2>
            <p>
              You've found your shape — now find the exact pair. Launch the AMZ
              Optic try-on studio and see every frame on your own face.
            </p>
            <Link to="/try-on" className="btn btn-light">
              Open the studio <Icon name="arrow-forward-outline" size={15} />
            </Link>
          </div>
          <div className="guide-cta-faces" aria-hidden="true">
            <img src="/img/guide/round.jpg" alt="" loading="lazy" />
            <img src="/img/guide/square.jpg" alt="" loading="lazy" />
            <img src="/img/guide/heart.jpg" alt="" loading="lazy" />
          </div>
        </section>
      </div>
    </main>
  );
}
