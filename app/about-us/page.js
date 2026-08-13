"use client";

import Link from "next/link";
import { useParams } from 'next/navigation';
import "./about-us.css"; 

export default function AboutPage() {
  const params = useParams();
  const currentTab = params?.tab; 

  const our_leadership = [
    {
      name: "Etienne Niyokuri",
      position: "Founder",
      description: "Set the foundation's vision, mission, and long-term strategic direction",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Co-founder",
      description: "Health care technology and innovation",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Co-founder",
      description: "Health project Programming",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Senior advisor/ Member",
      description: "Provide strategic guidance and technical expertise to the foundation",
      imgPlaceholder: "👤",
    },
  ];

  const teamMembers = [
    {
      name: "",
      position: "Executive Director/ Program lead",
      description: "Provide overall strategic and operational leadership across all Foundation programs (MCH, Mental Health, ASRHR, Child Education  and Developmental skills ",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Maternal & Child Health coordinator",
      description: "Oversight of clinical outreach workflows, prenatal workshops, and mother care networks.",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "ASRHR & Peer Education coordinator",
      description: "Coordinates community-based ASRHR programs.",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Mental Health Coordinator",
      description: "Develops emotional wellbeing structures and family resilience initiatives.",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Early Childhood Education & Development Skills coordinator",
      description: "",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Monitoring & Evaluation Officer",
      description: "",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Finance & Administration Officer",
      description: "",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Volunteers & Interns",
      description: "",
      imgPlaceholder: "👤",
    },
  ];

    return (
    <div className="aboutPageWrapper">

      {/* --- ABOUT US TAB CONTENT --- */}
      {(currentTab === "about-us" || !currentTab) && (
        <>
          <section className="aboutHeroGrid">
            <div className="heroLeftColumn">
              <p className="eyebrowLabel">HOW WE HELP</p>
              <h1 className="mainHeroTitle">
                About Steve Foundation, <span className="highlightText fontItalic">bridging the gap in maternal health and youth reproductive rights.</span>
              </h1>
            </div>
            <div className="heroRightColumn">
              <p className="heroDescriptionText">
                Steve Foundation is a non-profit organization dedicated to connecting care, knowledge, and opportunity to build a healthy, empowered generation. We work at the intersection of maternal health, mental wellness, adolescent sexual and reproductive health, and child education — because lasting change happens when these areas are addressed together, not in isolation.
              </p>
              <div className="visionCallout">
                <strong>Our Vision:</strong> Empowered mothers, informed youth, stronger communities, and a brighter future.
              </div>
            </div>
          </section>

          {/* --- NEWLY ADDED: OUR LEADERSHIP SECTION --- */}
          <section className="teamSection leadershipSection">
            <h2 className="sectionMainHeader">Our Leadership</h2>
            <p className="sectionSubtitle">The visionary minds steering our core values and direction.</p>
            
            <div className="teamGrid leadershipGrid">
              {our_leadership.map((member, index) => (
                <div key={`lead-${index}`} className="teamCard leadershipCard">
                  <div className="imagePlaceholderBox leadershipImagePin">
                    <span className="avatarSymbol">{member.imgPlaceholder}</span>
                  </div>
                  <div className="teamInfoDetails">
                    <h3 className="memberName">{member.name || "Name TBD"}</h3>
                    <span className="memberTitlePosition">{member.position}</span>
                    {member.description && (
                      <p className="memberShortDescription">{member.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- GENERAL TEAM SECTION --- */}
          <section className="teamSection">
            <h2 className="sectionMainHeader">Meet Our Team</h2>
            <p className="sectionSubtitle">The dedicated individuals guiding our mission on the ground.</p>
            
            <div className="teamGrid">
              {teamMembers.map((member, index) => (
                <div key={`team-${index}`} className="teamCard">
                  <div className="imagePlaceholderBox">
                    <span className="avatarSymbol">{member.imgPlaceholder}</span>
                  </div>
                  <div className="teamInfoDetails">
                    <h3 className="memberName">{member.name || "Name TBD"}</h3>
                    <span className="memberTitlePosition">{member.position}</span>
                    <p className="memberShortDescription">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* --- GUIDELINES TAB CONTENT --- */}
      {currentTab === "guidelines" && (
        <section className="pillarsSection">
          <h2 className="sectionMainHeader">Our Guidelines</h2>
          <p className="sectionSubtitle">The baseline standards directing our community actions:</p>
          <div className="approachContainer">
            <p className="approachBodyText">
              Insert your specific operational guidelines, code of conduct, field rules, and implementation practices for the foundation inside this block.
            </p>
          </div>
        </section>
      )}

      {/* --- STRATEGY TAB CONTENT --- */}
      {currentTab === "strategy" && (
        <section className="pillarsSection">
          <h2 className="sectionMainHeader">What We Do & Our Strategy</h2>
          <p className="sectionSubtitle">We focus on four interconnected pillars to build strategic change:</p>
          
          <div className="pillarsResponsiveGrid">
            <div className="pillarCard cardTealBg">
              <span className="indicatorBar barTeal"></span>
              <h3>Maternal & Child Health</h3>
              <p>Supporting mothers and children through every stage — from pregnancy and birth through early childhood — with access to quality care, education, and resources that give every family a strong start.</p>
            </div>

            <div className="pillarCard cardAmberBg">
              <span className="indicatorBar barAmber"></span>
              <h3>Mental Health</h3>
              <p>Recognizing that emotional and psychological wellbeing is as vital as physical health, we provide support and awareness programs that help individuals and families navigate life's challenges with resilience.</p>
            </div>

            <div className="pillarCard cardCoralBg">
              <span className="indicatorBar barCoral"></span>
              <h3>Adolescent Sexual & Reproductive Health</h3>
              <p>Equipping young people with accurate information, resources, and rights-based education so they can make informed decisions about their bodies and futures — free from stigma and misinformation.</p>
            </div>

            <div className="pillarCard cardGreenBg">
              <span className="indicatorBar barGreen"></span>
              <h3>Child Education & Developmental Skills</h3>
              <p>Investing in the next generation through programs that nurture learning, growth, and the practical skills children need to thrive.</p>
            </div>
          </div>
        </section>
      )}

      {/* --- WHERE WE WORK TAB CONTENT --- */}
      {currentTab === "where-we-work" && (
        <section className="approachSection">
          <div className="approachContainer">
            <h2 className="sectionMainHeader">Where We Work</h2>
            <p className="approachBodyText">
              Steve Foundation operates on the ground to close gaps. Add details here about your specific geographic target communities, clinical outreach stations, schools, and partnership hubs.
            </p>
          </div>
        </section>
      )}

      {/* --- POLICIES TAB CONTENT --- */}
      {currentTab === "policies" && (
        <section className="approachSection">
          <div className="approachContainer">
            <h2 className="sectionMainHeader">Our Policies</h2>
            <p className="approachBodyText">
              Steve Foundation operates under strict frameworks. Detail your data privacy protection directives, safeguarding policies for youth, and maternal care compliance metrics here.
            </p>
          </div>
        </section>
      )}

    </div>
  );
}
