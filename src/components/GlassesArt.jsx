// Procedural front-view glasses renderer. Used for product art and the
// virtual try-on overlay (transparent background, scales cleanly).
const SHAPES = {
  wayfarer: {
    lens: (cx) => (
      <path d={`M${cx - 62} 28 h108 a10 10 0 0 1 10 10 l-6 44 a14 14 0 0 1 -14 12 h-78 a16 16 0 0 1 -15.5 -12.5 l-12 -40 a10 10 0 0 1 7.5 -13.5 Z`} />
    ),
    bridge: "M138 40 q12 -10 24 0",
    bw: 8,
  },
  round: {
    lens: (cx) => <circle cx={cx} cy={58} r={40} />,
    bridge: "M136 46 q14 -14 28 0",
    bw: 7,
  },
  aviator: {
    lens: (cx) => (
      <path d={`M${cx - 48} 30 h96 a8 8 0 0 1 8 8 l-4 22 c-4 26 -22 40 -48 40 c-26 0 -44 -14 -50 -40 l-6 -22 a8 8 0 0 1 4 -8 Z`} />
    ),
    bridge: "M140 42 q10 -8 20 0",
    bw: 6,
  },
  cateye: {
    lens: (cx, flip) => (
      <path
        d={`M${cx} 96 c-30 0 -50 -12 -52 -36 c-1 -14 6 -26 20 -26 c10 0 16 6 32 6 c16 0 26 -10 38 -6 c10 3.5 12 16 6 30 c-8 20 -22 32 -44 32 Z`}
        transform={flip ? `scale(-1,1) translate(${-2 * cx},0)` : undefined}
      />
    ),
    bridge: "M138 46 q12 -10 24 0",
    bw: 7,
  },
  rect: {
    lens: (cx) => <rect x={cx - 56} y={32} width={112} height={58} rx={12} />,
    bridge: "M138 44 q12 -8 24 0",
    bw: 7,
  },
  shield: {
    lens: () => (
      <path d="M30 34 q120 -18 240 0 q10 2 8 14 l-6 30 q-3 18 -22 20 q-100 10 -200 0 q-19 -2 -22 -20 l-6 -30 q-2 -12 8 -14 Z" />
    ),
    bridge: null,
    bw: 0,
    single: true,
  },
  hex: {
    lens: (cx) => (
      <path d={`M${cx - 22} 22 h44 l22 20 v32 l-22 20 h-44 l-22 -20 v-32 Z`} />
    ),
    bridge: "M136 44 q14 -10 28 0",
    bw: 6,
  },
};

export default function GlassesArt({
  shape = "wayfarer",
  frame = "#171512",
  lens = "#2c2a27",
  lensOpacity = 0.92,
  stroke = 7,
  style,
  className,
  width = "100%",
}) {
  const s = SHAPES[shape] || SHAPES.wayfarer;
  const flipRight = shape === "cateye";
  return (
    <svg
      viewBox="0 0 300 120"
      width={width}
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={lens} fillOpacity={lensOpacity} stroke={frame} strokeWidth={stroke} strokeLinejoin="round">
        {s.single ? (
          s.lens()
        ) : (
          <>
            {s.lens(84, false)}
            {s.lens(216, flipRight)}
          </>
        )}
      </g>
      {s.bridge && (
        <path d={s.bridge} fill="none" stroke={frame} strokeWidth={s.bw} strokeLinecap="round" />
      )}
      {/* temple hints */}
      <path d="M12 40 L30 46 M288 40 L270 46" stroke={frame} strokeWidth={stroke - 1} strokeLinecap="round" fill="none" />
      {/* glare */}
      {!s.single && (
        <path d="M60 42 q14 -10 30 -8 M192 42 q14 -10 30 -8" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="5" strokeLinecap="round" fill="none" />
      )}
    </svg>
  );
}
