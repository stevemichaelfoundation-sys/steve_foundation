"use client";

import { useState } from "react";
import Link from "next/link";
import "./support.css"; 

export default function SupportPage() {
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount] = useState("");

  return (
    <div className="contact-support-container">
      
      <section className="strategy-hero-masthead">
        <span className="strategy-eyebrow-accent">STRATEGIC INFRASTRUCTURE</span>
        <h1 className="strategy-main-heading">Support Community Initiatives</h1>
        <p className="strategy-subheading-intro">
          Our foundation relies on active community funding to drive decentralized health tracking frameworks, digital literacy, and clinical resource allocation.
        </p>
      </section>

      <section className="widget-display-zone">
        <div className="donation-hero-card">
          <h2 className="widget-main-title">SUPPORT COMMUNITY</h2>
          
          <div className="progress-tracker-bar">
            <span className="step-indicator-text">STEP 1/3</span>
            <div className="progress-line-bg">
              <div className="progress-line-fill" style={{ width: "33%" }}></div>
            </div>
          </div>

          <div className="toggle-frequency-row">
            <button 
              type="button"
              className={`freq-btn ${frequency === "one-time" ? "active" : ""}`}
              onClick={() => setFrequency("one-time")}
            >
              ONE-TIME
            </button>
            <button 
              type="button"
              className={`freq-btn ${frequency === "monthly" ? "active" : ""}`}
              onClick={() => setFrequency("monthly")}
            >
              MONTHLY
            </button>
          </div>

                    <div className="amount-input-wrapper">
            <span className="currency-prefix-symbol">$</span>
            <input 
              type="number" 
              placeholder="Enter contribution amount" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="contribution-numeric-field"
            />
          </div>

          <p className="widget-helper-disclaimer">
            Please enter any amount above to support our community programs, localized health tracking frameworks, and data initiatives.
          </p>

          <button type="button" className="action-btn-submit-initiative">
            ▼ SUPPORT INITIATIVE
          </button>

          {/* ✅ FIXED CONTACT LINK: Seamlessly redirects users to your /contactus layout page without error */}
          <Link 
            href="/contactus" 
            className="action-link-phone-call"
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "8px", 
              textDecoration: "none" 
            }}
          >
            📞 CALL US
          </Link>

          <div className="secure-badge-footer">
            <span className="secure-uppercase-label">SECURE PROCESSING GATEWAY</span>
            <p className="secure-subtext-note">🔒 Verified secure infrastructure transaction</p>
          </div>
        </div>
      </section>


      <section className="foundation-narrative-section">
        <div className="narrative-content-wrapper">
          <span className="narrative-eyebrow">ABOUT THE FOUNDATION</span>
          <h3 className="narrative-main-heading">Empowering Communities Through Data and Localized Healthcare</h3>
          
          <div className="narrative-paragraphs-stack">
            <p className="narrative-paragraph-node">
          The Steve Foundation is committed to dismantling systemic barriers in adolescent sexual and reproductive health rights (ASRHR). By bridging the gap between clinical healthcare delivery and modern digital systems, we empower young people with anonymous, validated knowledge exactly when they need it most.
            </p>
            <p className="narrative-paragraph-node">
              Our ongoing initiatives build foundational infrastructure across four critical execution pillars: youth-focused education, maternal and infant health support ecosystems, optimized decentralized product distribution, and parent-gatekeeper communal dialogue spaces. We firmly believe that literacy precedes product safety and long-term economic independence.
            </p>
            <p className="narrative-paragraph-node">
              Your structural contributions go directly toward deploying discrete health resource containers, engineering scalable offline mobile systems, and securing local community alliances. Together, we build a reliable protective shield around the vulnerable generations of tomorrow.
            </p>
          </div>

          <div className="narrative-footer-nav">
            <Link href="/" className="btn-return-home">
              ← Back to Overview
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
