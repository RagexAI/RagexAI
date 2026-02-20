export default function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        background: `radial-gradient(ellipse 90% 65% at 50% 38%,
          #ffffff  0%,
          #f6faff  7%,
          #eaf3fb 20%,
          #d7e9f5 36%,
          #c3d9ee 55%,
          #b0cae7 74%,
          #a0bedd 100%
        )`,
      }}
    />
  );
}
