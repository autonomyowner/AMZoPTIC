# Live 3D Virtual Try-On — Design Spec

**Date:** 2026-07-13
**Project:** AMZ Optic (React 19 + Vite eyewear store)
**Status:** Approved design, pending implementation plan

## Goal

Replace the current manual try-on (upload a photo, drag/resize/tilt a flat SVG) with a live, camera-based virtual try-on: the user opens the Try-On page, the camera starts, and the selected frames appear on their face automatically — correctly positioned, correctly sized, and following the head in real time as it moves, tilts, and turns.

## Decisions made

| Decision | Choice |
|---|---|
| Experience | Live real-time tracking (not snapshot auto-fit) |
| Tracking tech | Free/open-source: MediaPipe Face Landmarker, in-browser |
| Rendering | True 3D glasses (Three.js + glTF), models made in Blender from product photos |
| 3D asset rollout | Start with 1–2 bestseller products (first: Orbit Noir); add more over time |
| Manual mode | Removed entirely — no upload+drag fallback |
| Products without a 3D model | Still fully auto-tracked, using their existing SVG art as a flat textured plane in the 3D scene |

## User experience

1. User lands on `/try-on` (optionally with `?frame=<id>` as today).
2. Page requests the camera; while the MediaPipe model downloads (~10 MB, CDN, browser-cached after first visit) a loading state is shown.
3. Glasses appear on the user's face and track it continuously — position, scale, roll, yaw, pitch. No sliders, no dragging.
4. Side panel (existing styling): current frame name/price, **frame picker** to switch products live, **Add to Bag**, and a **Capture** button that snapshots video + glasses to a downloadable image.
5. Switching frames swaps the 3D model (or SVG plane) without restarting the camera.

## Architecture

All processing is on-device in the browser. No servers, no fees, no images leave the machine (privacy selling point — state it on the page).

### Components

- **`src/tryon/useFaceTracker.js`** — React hook owning the camera stream and MediaPipe Face Landmarker lifecycle.
  - Uses `@mediapipe/tasks-vision` FaceLandmarker in VIDEO mode with `outputFacialTransformationMatrixes: true`.
  - Emits per frame: the 4×4 facial transformation matrix (head pose), key landmarks (eyes, nose bridge) for scale computation, and a `faceDetected` flag.
  - Handles: permission denied, no camera, tab hidden (pause tracking), cleanup on unmount.

- **`src/tryon/TryOnScene.jsx`** — Three.js layer.
  - Transparent WebGL canvas positioned over the mirrored `<video>` element.
  - Camera projection matched to the video field of view so the 3D glasses register with the 2D video.
  - Loads the product's asset:
    - `product.model` set → load `.glb` via GLTFLoader (cached per product after first load).
    - no `model` → render the existing `GlassesArt` SVG rasterized onto a transparent plane, tinted with the product's `frame`/`lens` colors.
  - Every frame: apply the head matrix to the glasses group; scale from measured inter-eye landmark distance so frame width matches the person's face; smooth with light interpolation to avoid jitter.

- **`src/pages/TryOn.jsx`** — rewritten page.
  - Keeps current layout/CSS (`.tryon-layout`, `.stage`, `.tryon-panel`, frame picker).
  - Removes: upload input, drag handlers, size/tilt sliders, `mode: photo`.
  - Adds: loading state, "no face detected" hint, capture button.

### Data model change

`src/data/products.js`: optional `model` field per product, e.g. `model: "/models/orbit-noir.glb"`. Absence of the field means SVG-plane rendering. No other product changes.

## Blender asset pipeline (owner workflow)

Model each frame in Blender using product photos as front/side reference, then export `.glb` into `public/models/<product-id>.glb`.

Export requirements (to be documented in `public/models/README.md`):

- Real-world scale: total frame width (temple tip to temple tip when worn) ≈ 140 mm; 1 Blender unit = 1 m.
- Origin at the nose-bridge contact point, glasses facing −Z (looking at the wearer), Y up.
- Materials embedded in the `.glb` (Principled BSDF exports fine); lenses use alpha-blended transparency.
- Keep files light: target < 2 MB (decimate, no subdivision baked in, 1K textures max if any).

Integration of a new model = drop the file + add one `model:` line in `products.js`. Nothing else.

## Error handling

| Situation | Behavior |
|---|---|
| Camera permission denied | Message: allow camera in browser settings, with a Retry button |
| No camera on device | Clear message; link back to product page (no upload fallback by decision) |
| MediaPipe model still downloading | Spinner + "Loading try-on engine…" |
| No face in view | Subtle overlay hint: "Position your face in the frame" |
| `.glb` fails to load | Fall back to that product's SVG-plane rendering |
| Tab hidden | Pause tracking loop; resume on visibility |

## Performance

- Video constrained to 720p, front camera.
- One `requestAnimationFrame` loop drives both detection and render; detection results reused for the render of the same frame.
- MediaPipe runs via WASM/GPU delegate — acceptable on mid-range phones (~30 fps target).
- Three.js scene is minimal: one glasses object, ambient + directional light, no postprocessing.

## Testing / acceptance criteria

- Glasses stay anchored to the face while moving side-to-side, nodding, and turning up to ~45° yaw; temples become visible on turn (3D products).
- Frame width visually matches face width for different people/distances from camera (auto-scale works).
- Switching between all 12 products works live; the 10 SVG-plane products track just like the 3D ones.
- Permission-denied and no-camera paths show their messages (test via browser permission toggle).
- Capture button downloads a composited image (video + glasses).
- Page holds ~30 fps on a mid-range Android phone in Chrome.

## Out of scope (for this iteration)

- Snapshot/upload try-on mode (removed by decision).
- 3D models for all 12 products (only 1–2 bestsellers now; pipeline supports adding the rest).
- Face-shape recommendations, PD (pupillary distance) measurement, AR lens tint preview.
- Any server-side processing or analytics.
