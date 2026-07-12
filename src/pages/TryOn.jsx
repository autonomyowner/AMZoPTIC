import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import GlassesArt from "../components/GlassesArt";
import { PRODUCTS, money } from "../data/products";
import { useCart } from "../context/CartContext";
import Icon from "../components/Icon";

export default function TryOn() {
  const [params] = useSearchParams();
  const initial = PRODUCTS.find((p) => p.id === params.get("frame")) || PRODUCTS[0];

  const [frame, setFrame] = useState(initial);
  const [mode, setMode] = useState("idle"); // idle | camera | photo
  const [photo, setPhoto] = useState(null);
  const [camError, setCamError] = useState(null);
  // overlay state, as fractions of stage size
  const [pos, setPos] = useState({ x: 0.5, y: 0.42 });
  const [scale, setScale] = useState(0.42); // width as fraction of stage width
  const [rot, setRot] = useState(0);

  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const drag = useRef(null);
  const { add } = useCart();

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  };

  useEffect(() => stopCamera, []);

  const startCamera = async () => {
    setCamError(null);
    setPhoto(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 } },
        audio: false,
      });
      streamRef.current = stream;
      setMode("camera");
      // video element mounts after state change
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => {});
        }
      });
    } catch (err) {
      setCamError(
        err && err.name === "NotAllowedError"
          ? "Camera access was denied. Allow it in your browser, or upload a photo instead."
          : "Couldn't start the camera on this device. Try uploading a photo instead."
      );
      setMode("idle");
    }
  };

  const onUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    stopCamera();
    const url = URL.createObjectURL(file);
    setPhoto(url);
    setMode("photo");
  };

  const onPointerDown = (e) => {
    e.preventDefault();
    const rect = stageRef.current.getBoundingClientRect();
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
      w: rect.width,
      h: rect.height,
    };
    e.target.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const d = drag.current;
    setPos({
      x: Math.min(0.95, Math.max(0.05, d.origX + (e.clientX - d.startX) / d.w)),
      y: Math.min(0.95, Math.max(0.05, d.origY + (e.clientY - d.startY) / d.h)),
    });
  };
  const onPointerUp = () => (drag.current = null);
  const onWheel = (e) => {
    setScale((s) => Math.min(0.9, Math.max(0.12, s - e.deltaY * 0.0004)));
  };

  const overlayStyle = {
    left: `${pos.x * 100}%`,
    top: `${pos.y * 100}%`,
    width: `${scale * 100}%`,
    transform: `translate(-50%, -50%) rotate(${rot}deg)`,
  };

  const active = mode !== "idle";

  return (
    <main>
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">AMZ Optic Studio</div>
          <h1 className="display">Virtual Try-On</h1>
          <p>
            Start your camera or upload a selfie, then drag the frames onto your face.
            Scroll or use the sliders to resize and tilt.
          </p>
        </div>

        <div className="tryon-layout">
          <div>
            <div
              className="stage"
              ref={stageRef}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
              onWheel={onWheel}
            >
              {mode === "camera" && <video ref={videoRef} className="mirror" playsInline muted />}
              {mode === "photo" && photo && <img className="photo" src={photo} alt="Your uploaded portrait" />}
              {!active && (
                <div className="stage-idle">
                  <div className="big-ico"><Icon name="eye-outline" size={32} /></div>
                  <p>Start your camera or upload a photo to begin.</p>
                  {camError && <p style={{ color: "#e0836f", marginTop: 10, maxWidth: 380 }}>{camError}</p>}
                </div>
              )}
              {active && (
                <>
                  <div className="overlay-glasses" style={overlayStyle} onPointerDown={onPointerDown}>
                    <GlassesArt
                      shape={frame.shape}
                      frame={frame.frame}
                      lens={frame.lens}
                      lensOpacity={frame.lensOpacity ?? 0.8}
                    />
                  </div>
                  <div className="stage-hint">Drag to position · scroll to resize</div>
                </>
              )}
            </div>

            <div className="tryon-controls" style={{ marginTop: 16 }}>
              <button className="btn btn-dark btn-sm" onClick={startCamera}>
                {mode === "camera" ? (
                  <><Icon name="reload-outline" size={15} /> Restart Camera</>
                ) : (
                  <><Icon name="play-outline" size={15} /> Start Camera</>
                )}
              </button>
              <label className="btn btn-outline btn-sm" style={{ cursor: "pointer" }}>
                <Icon name="cloud-upload-outline" size={15} /> Upload Photo
                <input type="file" accept="image/*" hidden onChange={onUpload} />
              </label>
              {mode === "camera" && (
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => { stopCamera(); setMode("idle"); }}
                >
                  <Icon name="stop-outline" size={15} /> Stop
                </button>
              )}
            </div>
          </div>

          <aside className="tryon-panel">
            <h3>{frame.name}</h3>
            <div className="sub">
              {frame.cat} · {money(frame.price)}{" "}
              <Link to={`/product/${frame.id}`} style={{ textDecoration: "underline" }}>details</Link>
            </div>

            <div className="slider-row">
              <label>Size <span>{Math.round(scale * 100)}%</span></label>
              <input type="range" min="12" max="90" value={Math.round(scale * 100)}
                onChange={(e) => setScale(Number(e.target.value) / 100)} />
            </div>
            <div className="slider-row">
              <label>Tilt <span>{rot}°</span></label>
              <input type="range" min="-25" max="25" value={rot}
                onChange={(e) => setRot(Number(e.target.value))} />
            </div>

            <button className="btn btn-dark" style={{ width: "100%", justifyContent: "center", marginBottom: 20 }}
              onClick={() => add(frame.id)}>
              Add to Bag — {money(frame.price)}
            </button>

            <div className="eyebrow" style={{ marginBottom: 10 }}>Switch frames</div>
            <div className="frame-picker">
              {PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  className={`frame-opt ${p.id === frame.id ? "on" : ""}`}
                  onClick={() => setFrame(p)}
                >
                  <img src={p.img} alt="" loading="lazy" />
                  <span>{p.name}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
