import React, { useState } from 'react';
import './firststep.css';

function HealthPlanAccordion() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (sectionKey, index) => {
        const isOpen = openSections[sectionKey] === index;
        setOpenSections({
            ...openSections,
            [sectionKey]: isOpen ? null : index
        });
    };

    const sections = {
        firstSteps: {
            title: "", // This can be for introduction section
            content: [
                { title: "Complimentary Informational Call", content: "Begin with a no-obligation chat with one of our expert physicians to explore how Sapia Health can benefit you." },
                { title: "Initial Comprehensive Consultation", content: "Detailed initial meeting to assess your health needs and goals." },
                { title: "Customized Health Plan", content: "A personalized approach to maintaining and improving your health." },
                { title: "Continuous Support and Monitoring", content: "Ongoing health support to adjust your plan as needed." }
            ]
        },
        benefits: {
            title: "Benefits at a Glance",
            content: [
                { title: "Holistic Health Assessments", content: "Dive deep into personalized health solutions spanning nutrition, longevity, athletic performance, and disease prevention." },
                { title: "Innovative Health Strategies", content: "Explore cutting-edge strategies for maintaining optimal health." },
                { title: "Comprehensive Health Insights", content: "Gain insights into your health with detailed analytics." },
                { title: "Personalized Health Roadmap", content: "Develop a roadmap tailored to your unique health needs." },
                { title: "Unparalleled Physician Access", content: "Direct access to top-tier physicians tailored to your health needs." }
            ]
        },
        memberships: {
            title: "Membership Options Tailored to Your Needs",
            content: [
                { title: "All-Inclusive Membership", content: "Embrace a comprehensive health overhaul with our all-encompassing plan." },
                { title: "A La Carte Option", content: "Choose services as needed to customize your health care approach." },
                { title: "Take the First Step Towards Personalized Health", content: "Start your journey to a healthier, fuller life today." }
            ]
        }
    };

    return (
        <div className="accordion-container">
                <div className="header-top">
                    <h1 className="custom-h1">Take the first step</h1>
                    <h2 className="custom-h2">towards a tailored health experience</h2>
                    <p className="custom-p">Your dedicated medical provider will craft a plan focused on your unique symptoms, conditions, and health objectives.</p>
                </div>
            <button className="sign-up-button">Sign Up</button>
            {Object.entries(sections).map(([key, group]) => (
                <div key={key} className="section-group">
                    <h2 className="section-title">{group.title}</h2>
                    {group.content.map((section, index) => (
                        <div key={index} className="section">
                            <div className="section-header" onClick={() => toggleSection(key, index)}>
                                {section.title}
                                <span className="icon">{openSections[key] === index ? '-' : '+'}</span>
                            </div>
                            {openSections[key] === index && <div className="section-content">{section.content}</div>}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default HealthPlanAccordion;
