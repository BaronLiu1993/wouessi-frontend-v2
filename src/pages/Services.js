import React from "react";
import "../styles/Services.css";
import CallToActionSection from "../components/Reusable/CallToActionSection";
import HeroBanner from "../components/Reusable/HeroBanner";
import ServicesHeroBanner from "../assets/Images/ServicesHeroImage.webp";
import Accordion from "../components/Reusable/Accordion";
import content from "../content/Services/ServicesData.json";
import { useParams } from "react-router-dom";

function Services() {
  const { lang } = useParams();
  const Content = content[lang];

  return (
    <div className="flex justify-center mt-[5vw] page-background">
      <div className="w-[80%]">
        <HeroBanner
          BannerImage={ServicesHeroBanner}
          Header={Content.heroTitle}
          Content={Content.heroContent}
        />

        {/* Accordion Section */}
        <div className="mb-[-1vw] mt-[-5vw] max-[450px]:mt-[5vw]">
          {Object.keys(Content.accordions).map((sectionKey, index) => {
            const section = Content.accordions[sectionKey];
            return (
              <Accordion
                key={index}
                title={section.heading}
                InnerTextData={section.content}
              />
            );
          })}
        </div>
        
        <CallToActionSection
          Title={Content.callToActionTitle}
          Content={Content.callToActionContent}
          CallToAction={Content.callToActionButton}
          lang={lang}
        />
      </div>
    </div>
  );
}

export default Services;
