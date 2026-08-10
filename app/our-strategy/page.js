"use client";

import Link from "next/link";
import"./our-strategy.css"; 

export default function OurStrategyPage() {
  const secondaryPillars = [
    {
      id: 2,
      date: "Mother & Baby Pillar",
      title: "Breaking the Intergenerational Cycle",
      strategy: "Position ASRHR as the ultimate preventative care for maternal and child health.",
      action: "Launch a 'Healthy Youth, Healthy Future' initiative. Tie the prevention of adolescent pregnancies directly to lower rates of low-birth-weight babies and maternal mortality.",
      pitch: "The best way to guarantee healthy mothers and babies tomorrow is to protect the health and choices of adolescents today. Preventing unintended pregnancies ensures that when they do choose to have children, they utilize our premium maternal care ecosystem.",
      tone: "green",
      iconText: "👶"
    },
    {
      id: 3,
      date: "Health Production Pillar",
      title: "Youth-Friendly Access & Innovation",
      strategy: "Redesign product delivery to remove stigma and judgment.",
      action: "Create discrete, affordable 'Adolescent Wellness Kits' containing menstrual hygiene products, nutritional supplements, and educational leaflets. Partner with local pharmacies to create 'Youth-Friendly' certified shelves or digital ordering systems to ensure absolute confidentiality.",
      pitch: "Young people want to protect their health, but stigma stops them. By producing discrete, accessible health solutions, we capture an underserved market segment and build lifetime brand loyalty from age fifteen, not age twenty-five.",
      tone: "pink",
      iconText: "🚀"
    },
    {
      id: 4,
      date: "Community & Policy Pillar",
      title: "The Protective Shield",
      strategy: "Lead community engagement to reduce resistance from parents and gatekeepers.",
      action: "Host 'Community Dialogue Forums' that reframe ASRHR not as 'sex education,' but as a tool for economic independence, higher school completion rates, and the eradication of child marriage.",
      pitch: "We are building a protective community shield around our consumers. When families understand that health rights equal economic growth, community resistance melts away, opening doors for our educational and health programs.",
      tone: "purple",
      iconText: "🛡️"
    }
  ];

  return (
    <div className="strategy-dashboard-canvas">
      

      <section className="strategy-hero-masthead">
        <span className="strategy-eyebrow-accent">STRATEGIC INFRASTRUCTURE</span>
        <h1 className="strategy-main-heading">Our Strategy & Pillars</h1>
        <p className="strategy-subheading-intro">
          Our current multi-year strategy rests on four target pillars. Each one shapes a real decision — where a new office opens, which programs get renewed, and how we report back to the communities we work with.
        </p>
      </section>

  
      <section className="featured-pillar-container">
        <h2 className="section-label-heading">Featured Strategy</h2>
        
        <div className="featured-pillar-card-row">
          <div className="featured-graphic-frame tone-purple">
            <div className="graphic-inner-brand-box">
              <span className="brand-badge-node">Education Pillar</span>
              <div className="brand-divider-cross">✕</div>
              <span className="brand-subtext-node">Knowledge Before Product</span>
            </div>
          </div>

          <div className="featured-text-details-column">
            <span className="featured-date-badge">Pillar 1 • Primary Focus</span>
            <h3 className="featured-card-title">Knowledge Before Product</h3>
            
            <div className="strategy-content-item-stack">
              <p className="strategy-paragraph-node">
                <strong>The Strategy:</strong> Develop digital and school-based Comprehensive Sexuality Education (CSE) toolkits that double as brand-building vehicles.
              </p>
              <p className="strategy-paragraph-node">
                <strong>The Action:</strong> Create a localized, gamified mobile app or SMS platform that provides anonymous, age-appropriate information on reproductive health.
              </p>
              <blockquote className="strategy-pitch-quote">
                "We aren't just selling health products; we are building the literacy required to use them safely. By staying in school, these girls become the educated, high-earning consumer base of tomorrow."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="all-pillars-list-section">
        <h2 className="section-label-heading">All Strategy Pillars</h2>
        <div className="all-pillars-vertical-stack">
          {secondaryPillars.map((pillar) => (
            <div key={pillar.id} className="all-articles-list-row-card">
        
              <div className={`list-thumbnail-box tone-${pillar.tone}`}>
                <span className="thumbnail-icon-glyph">{pillar.iconText}</span>
              </div>

              <div className="list-text-details-box">
                <span className="list-card-date-badge">{pillar.date}</span>
                <h3 className="list-card-title">{pillar.title}</h3>
                
                <div className="list-strategy-body-data">
                  <p className="strategy-paragraph-node"><strong>The Strategy:</strong> {pillar.strategy}</p>
                  <p className="strategy-paragraph-node"><strong>The Action:</strong> {pillar.action}</p>
                  <blockquote className="strategy-pitch-quote">
                    {pillar.pitch}
                  </blockquote>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <div className="footer-control-action-bar">
        <Link href="/" className="btn-secondary">
          ← Return to Main Management Board
        </Link>
      </div>

    </div>
  );
}
