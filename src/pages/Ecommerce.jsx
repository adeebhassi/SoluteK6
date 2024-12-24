import React from 'react'
import HeroSection from '../components/ecommerce/HeroSection'
import AboutArea from '../components/ecommerce/AboutArea'
import CaseStudyArea from '../components/ecommerce/CaseStudyArea'
import AboutSection from '../components/AboutSection';
import aboutImage from '../assets/images/about-thu3.png'; // Import image
import CompareToOther from '../components/ecommerce/CompareToOther';
import ServiceArea from '../components/ecommerce/ServiceArea';
import FAQArea from '../components/ecommerce/FAQArea';
import PricingPlan from '../components/ecommerce/PricePlan';
import CounterArea from '../components/ecommerce/CounterArea';
import HowItWorks from '../components/index/HowItWorks';
import FooterUpper from '../components/ecommerce/FooterUpper';
import ecommerceImage from '../assets/images/ecommercepage.png';
import parpro from '../assets/images/parpro.png';
import CardSection from '../components/ecommerce/CardSection';
import ContactUs from '../components/ecommerce/ContactUs';
import FooterArea from '../components/FooterArea';
import FAQSection from '../components/ecommerce/FAQSection';
function Ecommerce() {
  return (
    <>
            <HeroSection/>
            <AboutArea/>
            <CaseStudyArea/>
            <AboutSection
        title="Innovative Technology Solutions Tailored to your Client "
        color_title="Needs"
        subtitle="Technology Advancements in the Platform"
        description="Our platform integrates cutting-edge advancements to deliver exceptional value and enhance client experiences. Explore how we bring innovation to every interaction."
        items={[
          'Dynamic Creative Optimization (DCO)',
          'Augmented Reality (AR)',
          'Fully Immersive VR Showrooms',
          'Haptic Feedback Technology',
          'Predictive Logistics',
          'Geo-Fencing in Marketing',
          'Automated Product Packaging Studios',
          'Omnichannel AI-Driven Customer Support'
        ]}
        image={aboutImage}
      />
      <CompareToOther/>
      <ServiceArea/>
      <FAQArea/>
      <PricingPlan/>
    <CounterArea/>
    <HowItWorks/>
    <FAQSection/>
    <FooterUpper imageSrc={ecommerceImage}/>
    <FooterUpper imageSrc={parpro}/>
    <CardSection/>
    <ContactUs/>
    <FooterArea/>

    </>
    
  )
}

export default Ecommerce