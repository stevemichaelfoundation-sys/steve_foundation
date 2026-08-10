"use client";

import { useState, useEffect } from "react";
import "./where-we-work.css";

export default function WhereWeWorkPage() {
  const backgroundImages = [
    "/rwan.png",
    "/world.png",
    "/rwanda.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const operationalLocations = [
    {
      title: "Kigali, Rwanda (Central Headquarters)",
      info: "Core Operational Facility - Gasabo District Hub",
      modified: "Active Base",
      isPrimary: true,
    },
    {
      title: "East Africa Regional Community Extension",
      info: "Cross-Border Health & Educational Outreach Initiatives",
      modified: "In Planning",
      isPrimary: false,
    },
    {
      title: "Sub-Saharan Community Development Networks",
      info: "Field Resource Research & Technical Manual Provision",
      modified: "Q3 Upcoming",
      isPrimary: false,
    },
    {
      title: "Global Youth & Healthcare Innovation Partnerships",
      info: "International Coordination & Strategic Resource Alliances",
      modified: "Under Review",
      isPrimary: false,
    },
  ];

  return (
    <div 
      className="mainWrapperWithSlider"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <div className="sliderOverlay"></div>

      <div className="directoryContainer transparentEnlargedLayout">
        <div className="directoryTableHeader">
          <span className="colTitle">Title</span>
          <span className="colInfo">Info Detail Scope</span>
          <span className="colModified">Status / Modified</span>
        </div>
        <div className="directoryList">
          {operationalLocations.map((loc, index) => (
            <div 
              key={index} 
              className={`directoryRow transparentRow ${loc.isPrimary ? "primaryBlueHighlight" : ""}`}
            >
              <div className="titleCell">
                <div className="folderIconWrapper">
                  <svg className="sleekFolderIcon" width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path 
                      d="M2 4C2 2.9 2.9 2 4 2H9L11 5H20C21.1 5 22 5.9 22 7V16C22 17.1 21.1 18 20 18H4C2.9 18 2 17.1 2 16V4Z" 
                      fill="#3b82f6" 
                      fillOpacity="0.3"
                      stroke="#3b82f6" 
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="locationTitleText">{loc.title}</span>
              </div>

              <span className="infoCellData">{loc.info}</span>
              <span className="modifiedCellData">{loc.modified}</span>
            </div>
          ))}
        </div>
        <footer className="directoryFooterSection glassFooter">
          <p>
            Steve Foundation actively operates localized community support programs stationed directly within <strong className="footerHighlightBlue">Kigali, Rwanda</strong>, serving as our central node before executing further broad outreach targets globally.
          </p>
        </footer>
      </div>
    </div>
  );
}
