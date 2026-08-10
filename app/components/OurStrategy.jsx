import Link from "next/link";

export default function OurStrategy() {
  const pillars = [
    { num: "01", title: "Invest close to communities", body: "Funding decisions are shaped by the people directly affected, not made from a distance." },
    { num: "02", title: "Build long-term capacity", body: "Every program includes a plan to hand off skills and infrastructure to local partners." },
    { num: "03", title: "Measure what matters", body: "We track outcomes, not just activity, and publish what we learn even when it's uncomfortable." },
  ];

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
      <p style={{ fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2E7550" }}>
        Our strategy
      </p>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#241633", marginTop: "10px", marginBottom: "20px" }}>
        The plan guiding where and how we invest
      </h2>
      <p style={{ fontSize: "15px", color: "#241633", lineHeight: "1.6", maxWidth: "640px", marginBottom: "40px" }}>
        Our current multi-year strategy rests on three pillars. Each one shapes a real decision.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
        {pillars.map((p) => (
          <div key={p.num} style={{ borderTop: "4px solid #3B1F5C", padding: "24px", background: "#FAF7F5", borderRadius: "0 0 10px 10px" }}>
            <div style={{ backgroundColor: "#EAE3F0", color: "#3B1F5C", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "13px", marginBottom: "14px" }}>
              {p.num}
            </div>
            <h3 style={{ fontWeight: "bold", fontSize: "17px", marginBottom: "10px", color: "#241633" }}>{p.title}</h3>
            <p style={{ fontSize: "13.5px", color: "#4a3a5c", lineHeight: "1.55" }}>{p.body}</p>
          </div>
        ))}
      </div>

      <section style={{ marginTop: "50px" }}>
        <div style={{ backgroundColor: "#3B1F5C", color: "#FAF7F5", padding: "36px", borderRadius: "16px", textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}>See the strategy in action</h2>
          <p style={{ fontSize: "14px", marginBottom: "20px", opacity: 0.9 }}>Read how these pillars show up in our regional work.</p>
          <Link href="/branches" style={{ display: "inline-block", backgroundColor: "#3F9B6C", color: "#fff", padding: "10px 22px", borderRadius: "8px", fontWeight: 600, fontSize: "14px" }}>
            View branches →
          </Link>
        </div>
      </section>
    </main>
  );
}
