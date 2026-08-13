"use client";

import { useState } from "react";
import Link from "next/link";
import "./contactus.css"; 

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
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
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        setStatus(`Failed: ${data.errors ? data.errors.map(err => err.message).join(', ') : "Submission error"}`);
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setStatus("Network connection blocked. Please check your internet and try again.");
    }
  };

  return (
    <div className="page">
      <section className="hero">
        <p className="eyebrow">Get In Touch</p>
        <h1 className="heroTitle">Contact Us</h1>
        <p className="heroSubtitle">
          Have questions or want to learn more about the Steve Foundation? Reach out and our team will reply shortly.
        </p>
      </section>

      <div className="contentGrid">
        
        {/* --- LEFT FORM CARD --- */}
        <div className="card">
          <h2 className="cardTitle">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="form">
            
            <div className="row">
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submitButton">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px" }}>
                <line x1="22" x2="11" y1="2" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </button>
          </form>

          {status && (
            <p style={{ marginTop: "16px", fontWeight: "bold", color: status.includes("successfully") ? "#0d9488" : "#dc2626" }}>
              {status}
            </p>
          )}
        </div>

        {/* --- RIGHT INFO CARD --- */}
        <div className="card">
          <h2 className="cardTitle">Contact Information</h2>
          
          <ul className="infoList">
            <li className="infoItem">
              <div className="infoIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <span className="infoLabel">Our Office</span>
                <span className="infoValue">Kigali, Gasabo</span>
              </div>
            </li>

            <li className="infoItem">
              <div className="infoIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
            </li>

            <li className="infoItem">
              <div className="infoIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
            </li>
          </ul>

          <div className="social">
            <span className="followLabel">Follow Us:</span>
            <div className="socialIcons">
              <Link href="https://www.linkedin.com/in/steve-foundation/" className="socialIcon" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
