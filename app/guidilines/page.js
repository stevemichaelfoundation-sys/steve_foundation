"use client";

import React from "react";
import Link from "next/link";
import "./guidilines.css";

export default function MedicalImmigrationPage() {
  const steps = [
    {
      stepNum: "01",
      title: "Initial Visit & Evaluation",
      description: "The immigration exam includes going over your medical histories and performing a full physical and mental evaluation. Our staff will assess the need for further immunizations, which may be administered at the time of the initial visit or during a follow-up exam. This initial session typically takes 1 to 1 ½ hours.",
      bgSymbol: "📋",
      alignRight: false
    },
    {
      stepNum: "02",
      title: "Comprehensive Testing & Screening",
      description: "After the comprehensive physical, we will administer a TB test, and run a blood panel to check for communicable diseases such as TB, syphilis, and Gonorrhea. For our patients who have a positive TB test, we will also have to perform a chest X-ray in order to make a further determination for health risk and following course of action.",
      bgSymbol: "🩺",
      alignRight: true
    },
    {
      stepNum: "03",
      title: "Consultation & Clinical Review",
      description: "As a designated Civil Surgeon site, our clinical staff can provide patients with consultations in the event of positive blood work, and can make recommendations on the evaluation based on the current physical examination and on the patient's medical records. Although the USCIS will make the final decision as to a patient's legal ability to remain in the US, our caring staff can help with many of the concerns that could be a point of contention.",
      bgSymbol: "💬",
      alignRight: false
    },
    {
      stepNum: "04",
      title: "Finalizing Forms & Sealed Documentation",
      description: "Once this initial exam has been completed, we will ask patients to return to Briggs Chaney Walk-In Clinic, so that we may go over the results and any necessary recommendations. If the vaccinations are up to date and the results of the testing are negative, then we will complete all forms. Once this is done, we will also provide the necessary signatures and the sealed envelope in which all documentation may be safely put so that patients can take these to the USCIS or attending attorney.",
      bgSymbol: "✉️",
      alignRight: true
    }
  ];

  return (
    <div className="immigrationLayoutContainer">
      

      <header className="infoMainHeaderSection">
        <h1 className="headerMainTitle">Medical Immigration Guidelines</h1>
        <p className="headerBriefSummary">
          Review our step-by-step procedures required to complete your immigration medical evaluations smoothly. 
          We ensure full compliance with official regulations while prioritizing patient comfort.
        </p>
      </header>


      <main className="zigzagFlowContainer">
        <h2 className="flowSectionSubTitle">Our Standard Examination Process</h2>
        
        <div className="zigzagListStack">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`zigzagStepRow ${step.alignRight ? "reverseRowLayout" : ""}`}
            >
     
              <div className="stepDetailsTextPane">
                <span className="numberBadgeIndicator">Step {step.stepNum}</span>
                <h3 className="stepTitleHeading">{step.title}</h3>
                <p className="stepNarrativeParagraph">{step.description}</p>
              </div>

          
              <div className="stepVisualContainerCard">
                <div className="visualGraphicBackgroundBox">
                  <span className="graphicCentralSymbol">{step.bgSymbol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

   
      <footer className="medicalUrgencyFooterNotice">
        <span className="alertIconAnchor">⚠️</span>
        <p className="urgencyNoticeBodyText">
          <strong>Important Document Compliance Notice:</strong> Do not tamper with or open the sealed envelope containing your medical papers under any circumstance. Opening the official documentation package invalidates the examination parameters, and USCIS centers will reject broken seals outright.
        </p>
      </footer>

      <div style={{ marginTop: "5rem", textAlign: "center" }}>
        <Link 
          href="/" 
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "#475569",
            backgroundColor: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            padding: "12px 28px",
            fontSize: "15px",
            fontWeight: "600",
            transition: "all 0.15s ease"
          }}
        >
          ← Return to Main Management Board
        </Link>
      </div>

    </div>
  );
}
