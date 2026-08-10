"use client";

import React from "react";
import Link from "next/link";
import "./focus-area.css"; 

export default function FocusAreaPage() {
  const focusAreas = [
    {
      id: "digital-health",
      title: "Digital Health & AI Innovation",
      description: "Implementing cutting-edge tools to modernize public health tracking frameworks.",
      bullets: [
        { label: "Health Tech Integration", text: "Implementing cutting-edge AI and digital tools." },
        { label: "System Optimization", text: "Modernizing healthcare delivery and data tracking." },
        { label: "Future-Ready Care", text: "Preparing systems for the next generation of health technology." }
      ],
      tone: "purple",
      imageLabel: "Digital healthcare interface analytics"
    },
    {
      id: "nutrition-systems",
      title: "Nutrition & Food Systems",
      description: "Transforming nutrition research into actionable local programs to support community food security.",
      bullets: [
        { label: "Sustainable Security", text: "Designing resilient frameworks for community nutrition." },
        { label: "Policy & Practice", text: "Transforming nutrition research into actionable local programs." },
        { label: "Community Health", text: "Improving population health outcomes through food equity." }
      ],
      tone: "green",
      imageLabel: "Community nutrition logistics and farm distribution",
      reverse: true 
    },
    {
      id: "capacity-building",
      title: "Capacity Building & Training",
      description: "Training and upskilling public health professionals with modern methodologies and toolkits.",
      bullets: [
        { label: "Workforce Empowerment", text: "Training and upskilling public health professionals." },
        { label: "Institutional Strength", text: "Helping organizations scale their operations sustainably." },
        { label: "Knowledge Transfer", text: "Equipping teams with modern methodologies and tools." }
      ],
      tone: "pink",
      imageLabel: "Frontline physician workspace training seminar"
    },
    {
      id: "research-strengthening",
      title: "Research & Health Systems Strengthening",
      description: "Conducting rigorous research to inform policies and partner alongside governments and NGOs.",
      bullets: [
        { label: "Evidence-Based Strategy", text: "Conducting rigorous research to inform health policies." },
        { label: "Resilient Infrastructure", text: "Partnering with governments and NGOs to build lasting systems." },
        { label: "Equity-Driven Solutions", text: "Creating tailored frameworks for diverse community needs." }
      ],
      tone: "purple",
      imageLabel: "Laboratory data verification researchers",
      reverse: true
    }
  ];

  return (
    <div className="focus-dashboard-canvas">
      
      <section className="focus-hero-masthead">
        <h1 className="focus-main-heading">Our Focus Areas</h1>
        <p className="focus-subheading-intro">
          At Steve & Michael Consulting Group, we bridge the gap between research and real-world practice. 
          We deliver data-driven, sustainable solutions across key pillars of the public health ecosystem.
        </p>
      </section>

      <section className="focus-content-container">
        <h2 className="selection-label-heading">CHOOSE ONE OF THE OPTIONS BELOW TO GET STARTED</h2>
        
        <div className="focus-stacked-rows-list">
          {focusAreas.map((area) => (
            <div 
              key={area.id} 
              className={`focus-article-row-card${area.reverse ? " layout-reverse" : ""}`}
            >
              
              <div className={`focus-graphic-frame tone-${area.tone}`}>
                <div className="graphic-placeholder-inner">
                  <span className="placeholder-icon-badge">📷</span>
                  <span className="placeholder-text-meta">{area.imageLabel}</span>
                </div>
              </div>

              <div className="focus-text-details-column">
                <h3 className="focus-card-title">{area.title}</h3>
                <p className="focus-card-lead-desc">{area.description}</p>
                
                <ul className="focus-bullets-list-wrapper">
                  {area.bullets.map((bullet, idx) => (
                    <li key={idx} className="focus-bullet-node-item">
                      <strong>{bullet.label}:</strong> {bullet.text}
                    </li>
                  ))}
                </ul>

                <button 
                  type="button"
                  onClick={() => console.log(`Requesting detailed data briefs regarding: ${area.title}`)}
                  className="focus-action-request-btn"
                >
                  Request Information
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      <div className="focus-footer-nav">
        <Link href="/" className="btn-secondary">
          ← Return to Main Management Board
        </Link>
      </div>

    </div>
  );
}
