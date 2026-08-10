export default function ImpactStories() {
  const stories = [
    { tag: "Health", title: "Amara's clinic", body: "A community health worker on how a new maternal health post cut travel time from three hours to twenty minutes." },
    { tag: "Education", title: "Back in the classroom", body: "A mother describes what it meant for her daughter to return to school after a two-year gap." },
    { tag: "Livelihoods", title: "A cooperative that held", body: "How a farming cooperative used new irrigation training to get through a drought year." },
  ];

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
      <p style={{ fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2E7550" }}>
        Impact stories
      </p>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#241633", marginTop: "10px", marginBottom: "20px" }}>
        First-hand accounts from the people we work with
      </h2>
      <p style={{ fontSize: "15px", color: "#241633", lineHeight: "1.6", maxWidth: "640px", marginBottom: "40px" }}>
        Numbers tell part of the story. These are the people behind them.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
        {stories.map((s) => (
          <div key={s.title} style={{ borderTop: "4px solid #3B1F5C", padding: "24px", background: "#FAF7F5", borderRadius: "0 0 10px 10px" }}>
            <span style={{ backgroundColor: "#EAE3F0", color: "#3B1F5C", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", textTransform: "uppercase" }}>
              {s.tag}
            </span>
            <h3 style={{ fontWeight: "bold", fontSize: "17px", margin: "14px 0 10px", color: "#241633" }}>{s.title}</h3>
            <p style={{ fontSize: "13.5px", color: "#4a3a5c", lineHeight: "1.55" }}>{s.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}