"use client";

import React from "react";
import Link from "next/link";
import "./guidilines.css"; 

export default function GuidelinesPage() {
  const guidelines = [
    {
      stepNum: "01",
      title: "Nurture the Whole Child",
      description: "Prioritize education that goes beyond academics to build curiosity, critical thinking, confidence, and practical life skills.",
      bgSymbol: "🌱"
    },
    {
      stepNum: "02",
      title: "Expand Learning Access",
      description: "Provide quality opportunities, supportive mentorship, and creative environments so every child can reach their potential.",
      bgSymbol: "📚"
    },
    {
      stepNum: "03",
      title: "Champion Reproductive Rights",
      description: "Advance Adolescent Sexual and Reproductive Health and Rights (ASRHR) to lower unintended pregnancies, reduce STI transmission, and boost school completion rates.",
      bgSymbol: "🌸"
    },
    {
      stepNum: "04",
      title: "Deliver Youth-Friendly Healthcare",
      description: "Invest in age-appropriate sexuality education, confidential healthcare, and protective policies against child marriage and violence.",
      bgSymbol: "🩺"
    },
    {
      stepNum: "05",
      title: "Elevate Mental Health",
      description: "Treat mental health with the same seriousness and funding as physical health across all low-resource youth programming.",
      bgSymbol: "🧠"
    },
    {
      stepNum: "06",
      title: "Build Safe, Stigma-Free Spaces",
      description: "Establish non-judgmental environments, train community workers to spot early warning signs, and secure real referral pathways for youth.",
      bgSymbol: "🛡️"
    },
    {
      stepNum: "07",
      title: "Engage Communities as Allies",
      description: "Involve parents, families, and local leaders to actively support rather than stigmatize youth health decisions.",
      bgSymbol: "🤝"
    }
  ];

  return (
    <div className="immigrationLayoutContainer">
      
   
      <header className="infoMainHeaderSection">
        <span className="numberBadgeIndicator" style={{ marginBottom: "1rem" }}>STRATEGIC BLUEPRINT</span>
        <h1 className="headerMainTitle">🚀 Core Pillars & Guidelines</h1>
        <p className="headerBriefSummary">
          Our standard operating principles outline the foundational frameworks directing daily community health actions, educational field implementations, and youth support systems.
        </p>
      </header>

   
      <main className="zigzagFlowContainer">
        <div className="zigzagListStack">
          {guidelines.map((item, index) => (
            <div 
              key={index} 
              className={`zigzagStepRow ${index % 2 !== 0 ? "reverseRowLayout" : ""}`}
            >
        
              <div className="stepDetailsTextPane">
                <span className="numberBadgeIndicator">Guideline {item.stepNum}</span>
                <h3 className="stepTitleHeading">{item.title}</h3>
                <p className="stepNarrativeParagraph">{item.description}</p>
              </div>

        
              <div className="stepVisualContainerCard">
                <div className="visualGraphicBackgroundBox">
                  <span className="graphicCentralSymbol">{item.bgSymbol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="medicalUrgencyFooterNotice">
        <span className="alertIconAnchor">⚠️</span>
        <p className="urgencyNoticeBodyText">
          <strong>Important Implementation Compliance Notice:</strong> These guidelines represent verified baseline standards. Any field deviations must be evaluated by regional program coordinates to safeguard system metrics integrity.
        </p>
      </footer>

      <div style={{ marginTop: "5rem", textAlign: "left" }}>
        <Link 
          href="/" 
          className="btn-secondary-guidelines"
        >
          ← Return to Main Management Board
        </Link>
      </div>

    </div>
  );
}
