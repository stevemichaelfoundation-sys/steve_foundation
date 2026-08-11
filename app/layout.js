import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Steve Foundation",
  description: "Global Research & Impact Alliance",
};
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
    { label: "What we do", href: "/what-we-do"},
 { label: "Where we work", href: "/where-we-work" },
 { label: "Our Strategy", href: "/our-strategy" },
  { label: "Support", href: "/support" },
  { label: "Policies", href: "/policies" },

];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#ffffff" }}>
        <div className="layout-main-wrapper" style={{ width: "100%" }}>
          
          <header className="branch-header" style={{ padding: "24px", borderBottom: "1px solid #edf2f7", backgroundColor: "#ffffff", fontFamily: "sans-serif" }}>
            <div className="branch-brand-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "20px" }}>
              <div className="branch-brand">
                <img
                  src="/branch1.png"
                  alt="Branch logo"
                  style={{ width: "240px", height: "90px", borderRadius: "8px", objectFit: "contain" }}
                />
              </div>
              <Link href="/contactus" className="branch-subscribe-btn" style={{ padding: "12px 24px", backgroundColor: "#0d9488", color: "#ffffff", borderRadius: "6px", textDecoration: "none", fontWeight: "700", fontSize: "16px", display: "inline-block" }}>
                Contact us
              </Link>
            </div>

            <nav className="branch-nav" style={{ display: "flex", gap: "24px", overflowX: "auto", paddingBottom: "10px", whiteSpace: "nowrap" }}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    color: "#2d3748",
                    fontWeight: "600",
                    fontSize: "17px",
                    paddingBottom: "6px"
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main style={{ minHeight: "60vh" }}>
            {children}
          </main>

          <footer className="branch-footer" style={{ 
            backgroundColor: "#111827", 
            color: "#cbd5e1", 
            padding: "60px 24px 40px 24px", 
            marginTop: "100px", 
            fontFamily: "sans-serif" 
          }}>
            <div className="branch-footer-inner" style={{ 
              maxWidth: "1200px", 
              margin: "0 auto", 
              display: "flex", 
              flexDirection: "row", 
              justifyContent: "space-between", 
              alignItems: "flex-start", 
              flexWrap: "wrap", 
              gap: "40px",
              textAlign: "left"
            }}>
              
              <div className="branch-footer-col" style={{ flex: "1", minWidth: "200px" }}>
                <h4 style={{ color: "#ffffff", marginBottom: "16px", fontSize: "16px", fontWeight: "700" }}>Gasabo Office</h4>
                <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>Kigali, Rwanda</p>
              </div>


              <div className="branch-footer-col" style={{ flex: "1.5", minWidth: "220px" }}>
                <h4 style={{ color: "#ffffff", marginBottom: "16px", fontSize: "16px", fontWeight: "700" }}>Quick links</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {NAV_ITEMS.map((item) => (
                    <Link key={item.href} href={item.href} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.15s" }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="branch-footer-col" style={{ flex: "1.5", minWidth: "220px" }}>
                <h4 style={{ color: "#ffffff", marginBottom: "16px", fontSize: "16px", fontWeight: "700" }}>Research Pillars</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Link href="/#departments" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Mental & Physical Health</Link>
                  <Link href="/#departments" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Maternal & Child Care</Link>
                  <Link href="/#departments" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Adolescent Sexual & Reproductive</Link>
                  <Link href="/#departments" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Child Education & Development Skills</Link>
                </div>
              </div>


              <div className="branch-footer-col" style={{ flex: "1", minWidth: "220px" }}>
                <h4 style={{ color: "#ffffff", marginBottom: "16px", fontSize: "16px", fontWeight: "700" }}>Contact</h4>
                <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "8px", wordBreak: "break-all" }}>steve.michaelfoundation@gmail.com</p>
                <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>+250 782270658</p>
              </div>

            </div>
            <div className="branch-footer-bottom" style={{ 
              maxWidth: "1200px",
              margin: "60px auto 0 auto",
              borderTop: "1px solid #1f2937", 
              paddingTop: "30px", 
              textAlign: "center", 
              fontSize: "14px", 
              color: "#6b7280" 
            }}>
              © {new Date().getFullYear()} Steve Foundation. All rights reserved.
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
