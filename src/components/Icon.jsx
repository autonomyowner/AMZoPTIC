// Ionicons v7.1.0 (https://ionic.io/ionicons) — inlined as React components.
const ICONS = {
  search: (
    <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z" />
  ),
  "bag-handle-outline": (
    <>
      <path d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <path d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <path d="M160,224v16a96,96,0,0,0,96,96h0a96,96,0,0,0,96-96V224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </>
  ),
  "glasses-outline": (
    <>
      <path d="M224,232a32,32,0,0,1,64,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <line x1="448" y1="200" x2="464" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <line x1="64" y1="200" x2="48" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <path d="M64,200c0,96,16,128,80,128s80-32,80-128c0,0-16-16-80-16S64,200,64,200Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <path d="M448,200c0,96-16,128-80,128s-80-32-80-128c0,0,16-16,80-16S448,200,448,200Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </>
  ),
  "cube-outline": (
    <>
      <path d="M448,341.37V170.61A32,32,0,0,0,432.11,143l-152-88.46a47.94,47.94,0,0,0-48.24,0L79.89,143A32,32,0,0,0,64,170.61V341.37A32,32,0,0,0,79.89,369l152,88.46a48,48,0,0,0,48.24,0l152-88.46A32,32,0,0,0,448,341.37Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <polyline points="69 153.99 256 263.99 443 153.99" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <line x1="256" y1="463.99" x2="256" y2="263.99" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </>
  ),
  "refresh-outline": (
    <>
      <path d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
      <polyline points="256 58 336 138 256 218" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </>
  ),
  "shield-checkmark-outline": (
    <>
      <polyline points="336 176 225.2 304 176 255.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <path d="M463.1,112.37C373.68,96.33,336.71,84.45,256,48,175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </>
  ),
  "remove-outline": (
    <line x1="400" y1="256" x2="112" y2="256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
  ),
  "add-outline": (
    <>
      <line x1="256" y1="112" x2="256" y2="400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <line x1="400" y1="256" x2="112" y2="256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </>
  ),
  "arrow-forward-outline": (
    <>
      <polyline points="268 112 412 256 268 400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" />
      <line x1="392" y1="256" x2="100" y2="256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" />
    </>
  ),
  "reload-outline": (
    <>
      <path d="M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
      <path d="M464,97.42V208a16,16,0,0,1-16,16H337.42c-14.26,0-21.4-17.23-11.32-27.31L436.69,86.1C446.77,76,464,83.16,464,97.42Z" fill="currentColor" />
    </>
  ),
  "play-outline": (
    <path d="M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
  ),
  "cloud-upload-outline": (
    <>
      <path d="M320,367.79h76c55,0,100-29.21,100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69,0-113.44,45.79-128,91.2-60,5.7-112,43.88-112,106.4s54,106.4,120,106.4h56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <polyline points="320 255.79 256 191.79 192 255.79" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <line x1="256" y1="448.21" x2="256" y2="207.79" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </>
  ),
  "stop-outline": (
    <rect x="96" y="96" width="320" height="320" rx="24" ry="24" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" />
  ),
  "open-outline": (
    <>
      <path d="M384,224V408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V168a40,40,0,0,1,40-40H271.48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <polyline points="336 64 448 64 448 176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <line x1="224" y1="288" x2="440" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </>
  ),
  "eye-outline": (
    <>
      <path d="M255.66,112c-77.94,0-157.89,45.11-220.83,135.33a16,16,0,0,0-.27,17.77C82.92,340.8,161.8,400,255.66,400,348.5,400,429,340.62,477.45,264.75a16.14,16.14,0,0,0,0-17.47C428.89,172.28,347.8,112,255.66,112Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
    </>
  ),
  "close-outline": (
    <>
      <line x1="368" y1="368" x2="144" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <line x1="368" y1="144" x2="144" y2="368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </>
  ),
  "menu-outline": (
    <>
      <line x1="80" y1="160" x2="432" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
      <line x1="80" y1="256" x2="432" y2="256" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
      <line x1="80" y1="352" x2="432" y2="352" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
    </>
  ),
};

export default function Icon({ name, size = 20, className, ...rest }) {
  const glyph = ICONS[name];
  if (!glyph) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 512 512"
      aria-hidden="true"
      {...rest}
    >
      {glyph}
    </svg>
  );
}
