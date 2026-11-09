export const metadata = {
  title: "Offline | Steve Foundation",
};

export default function OfflinePage() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        color: "#1a202c",
      }}
    >
      <div style={{ maxWidth: "560px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "#111827",
            marginBottom: "12px",
          }}
        >
          You’re offline
        </h1>
        <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "#4b5563" }}>
          This page isn’t available right now. Check your connection and try
          again.
        </p>
      </div>
    </div>
  );
}
