"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Programs", href: "/programs"},
  { label: "Where we work", href: "/where-we-work" },
  { label: "Our Strategy", href: "/our-strategy" }, 
  { label: "Support", href: "/support" },
  { label: "Policies", href: "/policies" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="branch-header" style={{ 
      padding: "20px 40px", 
      borderBottom: "1px solid #edf2f7", 
      backgroundColor: "#ffffff", 
      fontFamily: "sans-serif" 
    }}>
      <div className="branch-brand-row" style={{ 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        width: "100%", 
        maxWidth: "1400px", 
        margin: "0 auto", 
        boxSizing: "border-box" 
      }}>

        <div className="branch-brand" style={{ flex: "0 0 200px", display: "flex", justifyContent: "flex-start" }}>
          <img
            src="/branch1.png"
            alt="Branch logo"
            style={{ width: "160px", height: "60px", borderRadius: "8px", objectFit: "contain" }}
          />
        </div>

        <nav className="branch-nav" style={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "center", 
          alignItems: "center", 
          gap: "36px", 
          flex: "1", 
          whiteSpace: "nowrap"
        }}>
          {NAV_ITEMS.map((item) => {
            const isActive = mounted && pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: isActive ? "#0d9488" : "#2d3748",
                  fontWeight: "600", 
                  fontSize: "16px",
                  paddingBottom: "6px",
                  display: "inline-block",
                  cursor: "pointer",
                  transition: "color 0.15s ease",
                  borderBottom: `2px solid ${isActive ? "#0d9488" : "transparent"}`
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ flex: "0 0 200px", display: "flex", justifyContent: "flex-end" }}>
          <Link 
            href="/contactus" 
            className="branch-subscribe-btn" 
            style={{ 
              padding: "12px 24px", 
              backgroundColor: "#0d9488", 
              color: "#ffffff", 
              borderRadius: "6px", 
              textDecoration: "none", 
              fontWeight: "700", 
              fontSize: "15px", 
              display: "inline-block" 
            }}
          >
            Contact us
          </Link>
        </div>

      </div>
    </header>
  );
}
