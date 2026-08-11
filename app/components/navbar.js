"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
    { label: "What we do", href: "/what-we-do"},
      { label: "Where we work", href: "/where-we-work" },
      { label: "Our Strategy", href: "/our-strategy" }, 
       { label: "Support", href: "/support" },
  { label: "Policies", href: "/policies" },

];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="branch-header" style={{ padding: "20px 40px", borderBottom: "1px solid #edf2f7", backgroundColor: "#ffffff", fontFamily: "sans-serif" }}>
      <div className="branch-brand-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", boxSizing: "border-box" }}>
        
        <div className="branch-brand" style={{ flexShrink: 0 }}>
          <img
            src="/branch1.png"
            alt="Branch logo"
            style={{ width: "430px", height: "200px", borderRadius: "8px", objectFit: "contain" }}
          />
        </div>
        <div className="branch-nav" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "36px", flex: 1, padding: "0 24px", whiteSpace: "nowrap", position: "relative", zIndex: 50 }}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                textDecoration: "none",
                color: pathname === item.href ? "#0d9488" : "#2d3748",
                fontWeight: pathname === item.href ? "700" : "600",
                fontSize: "19px",
                borderBottom: pathname === item.href ? "3px solid #0d9488" : "3px solid transparent",
                paddingBottom: "6px",
                display: "inline-block",
                position: "relative",
                zIndex: 100, 
                cursor: "pointer",
                transition: "color 0.15s ease"
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>


        <div style={{ flexShrink: 0, position: "relative", zIndex: 50 }}>
          <Link 
            href="/contactus" 
            className="branch-subscribe-btn" 
            style={{ padding: "14px 28px", backgroundColor: "#0d9488", color: "#ffffff", borderRadius: "6px", textDecoration: "none", fontWeight: "700", fontSize: "16px", display: "inline-block", transition: "opacity 0.15s ease" }}
          >
            Contact us
          </Link>
        </div>

      </div>
    </header>
  );
}
