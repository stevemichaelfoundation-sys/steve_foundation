"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./global.css";

const DEPARTMENTS = [
  {
    key: "Maternal & child health",
    label: "Maternal & Child Health",
    description: "We explore maternal and infant mental health to help families live better lives. We use science and data to find new ways to support mothers and babies. Our team works hard to discover what helps parents and infants feel good. We share our facts with doctors and the public.",
    tone: "#3B1F5C",
  },
  {
    key: "Mental health",
    label: "Mental Health",
    description: "We explore mental health to help people live better lives. We use science and data to find new ways to support the mind. Our team works hard to discover what helps people feel good. We share our facts with doctors and the public.",
    tone: "#3F9B6C",
  },
  {
    key: "Adolescent sexual & Reproductive",
    label: "Adolescent Sexual & Reproductive Health",
    description: "A specialized research focus delivering crucial data, community toolkits, and evidence-based frameworks to directly improve adolescent well-being and health rights.",
    tone: "#E8628A",
  },
  {
    key: "Child Education & Development Skills",
    label: "Child Education & Development Skills",
    description: "Nurturing young minds by bridging academic fundamentals with essential life skills, ensuring early milestones are met through rigorous evidence-based learning strategies.",
    tone: "#5B3A82",
  },
];

export default function BranchHomePage() {

  const [activeTab, setActiveTab] = useState("stat-1");

  return (
    <div className="homepage-wrapper">
      

      <section className="immersive-photo-hero">
        <div className="hero-background-image-container">
          <img 
            src="/ae.png" 
            alt="Global Impact Backdrop" 
            className="hero-fluid-background-photo"
          />
          <div className="hero-dark-vignette-overlay"></div>
        </div>

        <div className="immersive-hero-inner-content">
          <div className="immersive-hero-centered-pane">
            
      
            <span className="immersive-hero-eyebrow">Global Research & Impact Alliance</span>
            <h1 className="immersive-hero-title">Coordinating our work across the World</h1>
            <p className="immersive-hero-description">
              Advancing public health, mental well-being, and educational frameworks through rigorous data-driven science and community partnerships.
            </p>
            
           <div className="immersive-hero-actions">
  <Link href="#departments" className="btn-primary-immersive">
    Explore Research
  </Link>
  
  <Link href="/about-us" className="btn-secondary-immersive">
    Partner With Us
  </Link>
  
  <Link href="/support" className="btn-secondary-immersive">
    Support Our Initiatives
  </Link>
</div>

          </div>
        </div>

        <div className="immersive-hero-tabs-footer-bar">
          <button 
            className={`immersive-tab-folder-btn ${activeTab === "stat-1" ? "is-active" : ""}`}
            onClick={() => setActiveTab("stat-1")}
          >
            <div className="tab-folder-top-row">
              <span className="tab-folder-index">01</span>
              <span className="tab-folder-title-label">Core Programs</span>
            </div>
            <div className="tab-folder-large-metric">4</div>
          </button>

          <button 
            className={`immersive-tab-folder-btn ${activeTab === "stat-2" ? "is-active" : ""}`}
            onClick={() => setActiveTab("stat-2")}
          >
            <div className="tab-folder-top-row">
              <span className="tab-folder-index">02</span>
              <span className="tab-folder-title-label">Countries Covered</span>
            </div>
            <div className="tab-folder-large-metric">2</div>
          </button>

          <button 
            className={`immersive-tab-folder-btn ${activeTab === "stat-3" ? "is-active" : ""}`}
            onClick={() => setActiveTab("stat-3")}
          >
            <div className="tab-folder-top-row">
              <span className="tab-folder-index">03</span>
              <span className="tab-folder-title-label">Active Frameworks</span>
            </div>
            <div className="tab-folder-large-metric">12+</div>
          </button>

          <button 
            className={`immersive-tab-folder-btn ${activeTab === "stat-4" ? "is-active" : ""}`}
            onClick={() => setActiveTab("stat-4")}
          >
            <div className="tab-folder-top-row">
              <span className="tab-folder-index">04</span>
              <span className="tab-folder-title-label">On The Ground</span>
            </div>
            <div className="tab-folder-large-metric">30+</div>
          </button>
        </div>
      </section>

      {/* --- Dynamic Content Area showing directly below menu tabs --- */}
      <div className="dynamic-tab-narrative-container-section">
        <div className="narrative-inner-box">
          {activeTab === "stat-1" && (
            <div className="tab-narrative-block animate-fade">
              <h2>Deploying 4 Core Strategic Development Programs</h2>
              <p>Our ongoing field initiatives combine mental health awareness, maternal healthcare support, and child educational resource ecosystems to drive community health resilience where it is needed most.</p>
            </div>
          )}
          {activeTab === "stat-2" && (
            <div className="tab-narrative-block animate-fade">
              <h2>Dual-Country Strategic Regional Operational Expansion</h2>
              <p>We work actively across target national junctions to connect care metrics, institutional public data channels, and health rights field toolkits smoothly across diverse demographics.</p>
            </div>
          )}
          {activeTab === "stat-3" && (
            <div className="tab-narrative-block animate-fade">
              <h2>12+ Active Implementation Frameworks and Vetted Solutions</h2>
              <p>Providing practitioners, local healthcare workers, and regional educators with peer-reviewed baseline standards directing daily community health actions and educational field implementations.</p>
            </div>
          )}
          {activeTab === "stat-4" && (
            <div className="tab-narrative-block animate-fade">
              <h2>30+ Dedicated Clinical and Social Field Researchers</h2>
              <p>Meet the focused professionals guiding our operations on the ground—translating complex public health research into scalable field methodologies to help families live to their happiest potential.</p>
            </div>
          )}
        </div>
      </div>

      <section id="departments" className="departments-hub">
        <div className="section-header-centered">
          <span className="journey-eyebrow"># SCIENTIFIC PILLARS</span>
          <h2>Our Specialized Research Departments</h2>
          <p>Discover how our dedicated teams work together to conduct vital research and deliver programs directly on the ground.</p>
        </div>
        <div className="departments-grid">
          {DEPARTMENTS.map((dept) => (
            <div key={dept.key} className="dept-card" style={{ borderLeft: `4px solid ${dept.tone}` }}>
              <h3 className="dept-card-title">{dept.label}</h3>
              <p className="dept-card-description">{dept.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
