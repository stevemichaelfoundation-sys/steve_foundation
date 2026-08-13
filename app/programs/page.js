"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./programs"; 

export default function WhatWeDoPage() {
  const [formData, setFormData] = useState({
    sessionType: "🧠 Mental Health Inquiry / Counseling",
    studentName: "",
    email: "",
    notes: ""
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!navigator.onLine) {
      setStatus("No internet connection detected. Please connect and try again.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xoeadjpa", {
        method: "POST",
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! Check your inbox.");
        setFormData({ 
          sessionType: "🧠 Mental Health Inquiry / Counseling", 
          studentName: "", 
          email: "", 
          notes: "" 
        });
      } else {
        const data = await response.json();
        setStatus(`Failed: ${data.errors ? data.errors.map(err => err.message).join(', ') : "Submission error"}`);
      }
    } catch (error) {
      console.error("Booking submit error:", error);
      setStatus("Network connection blocked. Please check your internet and try again.");
    }
  };

  const [manualData, setManualData] = useState({
    manualEmail: "",
    manualLocation: ""
  });
  const [manualStatus, setManualStatus] = useState("");

  const handleManualInputChange = (e) => {
    const { name, value } = e.target;
    setManualData((prev) => ({ ...prev, [name]: value }));
  };

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    setManualStatus("Processing request...");

    if (!navigator.onLine) {
      setManualStatus("No internet connection detected.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xoeadjpa", {
        method: "POST",
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          FormType: "ASRHR Manual Request",
          RequesterEmail: manualData.manualEmail,
          RequesterLocation: manualData.manualLocation
        }),
      });

      if (response.ok) {
        setManualStatus("Manual requested successfully! Check your email soon.");
        setManualData({ manualEmail: "", manualLocation: "" });
      } else {
        setManualStatus("Submission error. Please try again.");
      }
    } catch (error) {
      console.error("Manual request error:", error);
      setManualStatus("Network connection error.");
    }
  };


  return (
    <div className="wwd-page-canvas">

      <section className="wwd-hero-masthead">
        <span className="wwd-eyebrow-accent">WHAT WE DO</span>
        <h1 className="wwd-main-heading">Four Interconnected Pillars</h1>
        <p className="wwd-subheading-intro">
          Steve Foundation is dedicated to connecting care, knowledge, and opportunity to build a healthy, empowered generation. We work across these key areas because lasting change happens when they are addressed together, not in isolation.
        </p>
      </section>

      <section className="wwd-content-container">
        <div className="wwd-pillars-grid">
          <div className="wwd-pillar-card p-purple">
            <div className="wwd-card-top-indicator">
              <span className="wwd-card-icon">🤰</span>
              <span className="wwd-card-index">01</span>
            </div>
            <h3>Maternal & Child Health</h3>
            <p>Supporting mothers and children through every stage — from pregnancy and birth through early childhood — with access to quality care, education, and resources for a strong start.</p>
          </div>

          <div className="wwd-pillar-card p-green">
            <div className="wwd-card-top-indicator">
              <span className="wwd-card-icon">🧠</span>
              <span className="wwd-card-index">02</span>
            </div>
            <h3>Mental Health</h3>
            <p>Recognizing that emotional and psychological wellbeing is as vital as physical health, with support and awareness programs that build resilience to navigate life's challenges.</p>
          </div>

          <div className="wwd-pillar-card p-pink">
            <div className="wwd-card-top-indicator">
              <span className="wwd-card-icon">🌸</span>
              <span className="wwd-card-index">03</span>
            </div>
            <h3>Adolescent Sexual & Reproductive Health</h3>
            <p>Equipping young people with accurate, rights-based information and resources so they can make informed decisions about their bodies and futures, free from stigma and misinformation.</p>
          </div>

          <div className="wwd-pillar-card p-navy">
            <div className="wwd-card-top-indicator">
              <span className="wwd-card-icon">📚</span>
              <span className="wwd-card-index">04</span>
            </div>
            <h3>Child Education & Developmental Skills</h3>
            <p>Investing in the next generation through programs that nurture learning, growth, and the practical skills children need to thrive.</p>
          </div>
        </div>
      </section>

      <section className="wwd-approach-banner">
        <div className="wwd-approach-wrapper">
          <span className="wwd-approach-eyebrow">OUR APPROACH</span>
          <h2 className="wwd-approach-title">Closing Gaps, Together.</h2>
          <p className="wwd-approach-text">
            Steve Foundation exists to close gaps — between mothers and the care they deserve, between young people and the knowledge that protects them, and between communities and the resources that help them flourish. We believe that when maternal health, mental health, reproductive rights, and education are addressed as a connected whole, entire communities rise stronger.
          </p>
        </div>
      </section>

      <section className="wwd-content-container">
        <div className="wwd-split-layout-grid">
          
          <div className="wwd-details-pane">
            <h2 className="wwd-section-label-heading">Youth Support & Resources</h2>
            
            <div className="wwd-support-block">
              <h3>🧠 Mental Health Services</h3>
              <ul>
                <li><strong>Safe Spaces:</strong> Access confidential counseling, peer support groups, and mental well-being workshops.</li>
                <li><strong>Resilience Building:</strong> Learn practical stress management tools, emotional regulation, and mindfulness techniques.</li>
                <li><strong>Urgent Support:</strong> Speak directly with qualified professionals during challenging times.</li>
              </ul>
            </div>

            <div className="wwd-support-block">
              <h3>🌸 Adolescent Sexual & Reproductive Health (ASRH)</h3>
              <ul>
                <li><strong>Age-Appropriate Education:</strong> Receive accurate, judgment-free biological facts, consent guidance, and wellness information.</li>
                <li><strong>Safe Consultations:</strong> Schedule private, one-on-one sessions with youth-friendly healthcare educators.</li>
                <li><strong>Empowerment:</strong> Gain confidence to make informed decisions about your body and personal boundaries.</li>
              </ul>
            </div>

            <div className="wwd-support-block">
              <h3>📚 Child Education & Developmental Skills</h3>
              <ul>
                <li><strong>Academic Scholarships:</strong> Financial aid and sponsorship programs targeting high-potential students in underserved communities.</li>
                <li><strong>Life Skills Training:</strong> Practical workshops teaching leadership, communication, critical thinking, and digital literacy.</li>
                <li><strong>Mentorship Track:</strong> Pairing scholarship recipients with experienced mentors to guide their career paths.</li>
              </ul>
              
              <div className="wwd-eligibility-checklist">
                <h4>📋 Scholarship Eligibility Checklist</h4>
                <ul>
                  <li>Verified school status in active target regions.</li>
                  <li>Age limits between 12 and 22 years old.</li>
                  <li>Demonstrated structural or financial need boundaries.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="wwd-form-pane">
            <div className="wwd-sticky-form-card">
              <h3>Dynamic Session Booking</h3>
              <p className="wwd-form-helper-text">
                Instead of separate confusing forms, use this unified scheduling system. Your request will automatically route directly to the correct team member.
              </p>
              
                           <form onSubmit={handleBookingSubmit} className="wwd-unified-form">
                <div className="wwd-form-field">
                  <label htmlFor="sessionType">CHOOSE YOUR INQUIRY TOPIC</label>
                  <select 
                    id="sessionType"
                    name="sessionType" 
                    value={formData.sessionType}
                    onChange={handleInputChange}
                    className="wwd-form-select"
                  >
                    <option value="Mental Health Consultation">🧠 Mental Health Inquiry / Counseling</option>
                    <option value="ASRH Session Request">🌸 Adolescent Sexual & Reproductive Health (ASRH)</option>
                  </select>
                </div>

                <div className="wwd-form-field">
                  <label htmlFor="studentName">FULL NAME</label>
                  <input 
                    type="text" 
                    id="studentName"
                    name="studentName" 
                    placeholder="Enter your name"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="wwd-form-input"
                  />
                </div>

                <div className="wwd-form-field">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="wwd-form-input"
                  />
                </div>

                <div className="wwd-form-field">
                  <label htmlFor="notes">ADDITIONAL NOTES OR QUESTIONS (OPTIONAL)</label>
                  <textarea 
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Let us know how we can support you..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="wwd-form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="wwd-form-submit-btn">
                  Confirm Session Booking Request
                </button>
              </form>

              {status && (
                <p style={{ marginTop: "16px", fontWeight: "bold", fontSize: "14px", textAlign: "center", color: status.includes("successfully") ? "#0d9488" : "#f43f5e" }}>
                  {status}
                </p>
              )}
            </div>
          </div>

        </div>
      </section>

      <section className="wwd-content-container">
        <h2 className="wwd-section-label-heading">Featured Operational Resource</h2>
        
        <div className="wwd-resource-card">
          <div className="wwd-resource-meta-side">
            <div className="wwd-resource-badge-pill">NEW RESOURCE</div>
            <h3 className="wwd-resource-title">ASRHR Training Manual for Low-Resource Settings</h3>
            <p className="wwd-resource-desc">
              A practical, field-ready guide for community health workers, peer educators, teachers, and youth-friendly service providers — built for Rwanda's evolving policy landscape.
            </p>
            <ul className="wwd-resource-features" style={{ marginBottom: "1.5rem" }}>
              <li>✓ Age-appropriate, rights-based session plans</li>
              <li>✓ Guidance on GBV response and referral pathways</li>
              <li>✓ Tools for engaging parents and community leaders</li>
              <li>✓ Low-resource facilitation techniques</li>
            </ul>

            <form onSubmit={handleManualSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                <input 
                  type="email" 
                  name="manualEmail"
                  placeholder="Enter email address"
                  value={manualData.manualEmail}
                  onChange={handleManualInputChange}
                  required
                  style={{ flex: 1, padding: "10px 14px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px", outline: "none", color: "#1e223c" }}
                />
                <input 
                  type="text" 
                  name="manualLocation"
                  placeholder="Location (e.g. Kigali)"
                  value={manualData.manualLocation}
                  onChange={handleManualInputChange}
                  required
                  style={{ flex: 1, padding: "10px 14px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px", outline: "none", color: "#1e223c" }}
                />
              </div>
              <button type="submit" className="wwd-resource-action-btn" style={{ width: "100%", marginTop: "5px" }}>
                Request the Manual
              </button>
            </form>

            {manualStatus && (
              <p style={{ marginTop: "12px", fontWeight: "bold", fontSize: "14px", color: "#0d9488" }}>
                {manualStatus}
              </p>
            )}
          </div>

          <div className="wwd-resource-book-mock">
            <span className="wwd-book-pages-lbl">26 PAGES • PDF</span>
            <h4>ASRHR Training Manual</h4>
            <p>Adolescent Sexual and Reproductive Health and Rights — a facilitator's guide built for limited time, limited materials, and communities that deserve accurate, compassionate information.</p>
          </div>
        </div>
      </section>

      <div className="wwd-footer-nav">
        <Link href="/" className="btn-secondary-wwd">
          ← Return to Main Management Board
        </Link>
      </div>

    </div>
  );
}
