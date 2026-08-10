"use client";

import { useState } from "react";
import Link from "next/link";
import "./policies.css";

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <div className="policiesPage">
      <header className="pageHeader">
        <h1 className="mainHeaderTitle">Latest news & policies</h1>
      </header>

      <nav className="tabNavigation">
        <button 
          className={`tabButton ${activeTab === "ALL" ? "active" : ""}`} 
          onClick={() => setActiveTab("ALL")}
        >
          ALL ARTICLES
        </button>
        <button 
          className={`tabButton ${activeTab === "ASRHR" ? "active" : ""}`} 
          onClick={() => setActiveTab("ASRHR")}
        >
          ASRHR MANUAL
        </button>
        <button 
          className={`tabButton ${activeTab === "ABOUT" ? "active" : ""}`} 
          onClick={() => setActiveTab("ABOUT")}
        >
          FOUNDATION PILLARS
        </button>
      </nav>

      <main className="cardsGrid">
        {(activeTab === "ALL" || activeTab === "ASRHR") && (
          <article className="policyCard">
            <div className="cardImagePlaceholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            
            <div className="cardMeta">
              <span className="calendarIcon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              </span>
              <span className="metaDate">2026-07-29</span>
            </div>

            <h2 className="cardTitle">
              📢 New Resource: Adolescent Sexual and Reproductive Health and Rights (ASRHR) Training Manual for Low-Resource Settings
            </h2>

            <p className="cardIntro">
              At Steve Foundation, we believe every adolescent deserves accurate information, respectful care, and the chance to make informed decisions about their own health.
            </p>

            <p className="cardDescription">
              We're proud to share our new Adolescent Sexual and Reproductive Health and Rights (ASRHR) Training Manual — a practical, field-ready guide for community health workers, peer educators, teachers, and youth-friendly service providers, with a focus on Rwanda's evolving policy landscape.
            </p>

            <div className="pillContainer">
              <h3 className="sectionSubtitle">Inside, you'll find:</h3>
              <ul className="checklist">
                <li><span className="greenCheck">✓</span> Age-appropriate, rights-based session plans</li>
                <li><span className="greenCheck">✓</span> Guidance on GBV response and referral pathways</li>
                <li><span className="greenCheck">✓</span> Tools for engaging parents and community leaders</li>
                <li><span className="greenCheck">✓</span> Low-resource facilitation techniques</li>
              </ul>
            </div>

            <Link href="#" className="readMoreButton">
              Read Full Manual 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </article>
        )}

        {(activeTab === "ALL" || activeTab === "ABOUT") && (
          <article className="policyCard">
            <div className="cardImagePlaceholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 21h20M4 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8M6 21v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
              </svg>
            </div>

            <div className="cardMeta">
              <span className="calendarIcon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              </span>
              <span className="metaDate">2026-06-15</span>
            </div>

            <h2 className="cardTitle">
              Introducing Steve Foundation — Building an Empowered Generation
            </h2>

            <p className="cardIntro">
              We're proud to introduce Steve Foundation — a non-profit dedicated to connecting care, knowledge, and opportunity to build a healthy, empowered generation.
            </p>

            <h3 className="sectionSubtitle">Our work is built on four pillars:</h3>
            
            <div className="pillarsGrid">
              <div className="pillarItem">
                <span className="pillarIcon">❤️</span>
                <div>
                  <h4>Maternal & Child Health</h4>
                  <p>Supporting mothers and children from pregnancy through early childhood.</p>
                </div>
              </div>

              <div className="pillarItem">
                <span className="pillarIcon">🧠</span>
                <div>
                  <h4>Mental Health</h4>
                  <p>Championing emotional wellbeing as a foundation for thriving families.</p>
                </div>
              </div>

              <div className="pillarItem">
                <span className="pillarIcon">⚧️</span>
                <div>
                  <h4>Adolescent Sexual & Reproductive Health</h4>
                  <p>Equipping young people with the knowledge and rights-based education they deserve.</p>
                </div>
              </div>

              <div className="pillarItem">
                <span className="pillarIcon">📖</span>
                <div>
                  <h4>Child Education & Developmental Skills</h4>
                  <p>Nurturing the next generation's growth and potential.</p>
                </div>
              </div>
            </div>

            <div className="taglineQuote">
              &ldquo;Empowered mothers. Informed youth. Stronger communities. Brighter future. That's the future we're building — together.&rdquo;
            </div>

            <Link href="#" className="readMoreButton">
              Learn More About Our Mission
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </article>
        )}
      </main>
    </div>
  );
}
