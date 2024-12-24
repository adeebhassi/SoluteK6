import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureArea from '../components/FeatureArea';
import AboutSection from '../components/AboutSection';
import CounterArea from '../components/CountArea';
import CaseStudiesArea from '../components/CaseStudyArea';

import VendorPartnership from '../components/VenderPartnerShip';
import HowItWorks from '../components/index/HowItWorks';
import FAQSection from '../components/index/FAQSection';
import TestimonialSection from '../components/index/TestimonialSection'
import ProjectArea from '../components/index/ProjectArea';
import ServiceArea from '../components/index/ServiceArea';
import ProgressSection from '../components/index/ProgressSection';
import SellerNetworkSection from '../components/index/ProgressSectionSeller';
import FlagSection from '../components/index/FlagSection';
import FooterUpper from '../components/ecommerce/FooterUpper';
import FooterArea from '../components/FooterArea';
import ScrollArea from '../components/ScrollArea';
import aboutImage from '../assets/images/about-thu3.png';
import ecommerceImage from '../assets/images/ecommercepage.png';
import Loader from '../components/Loader';
import CarouselSlider from '../components/Slider';
import projectthu from '../assets/images/project-thu.png';
import projectthu2 from '../assets/images/project-thu2.png';
const Index = () => {
  const exampleData = {
    title: 'Featured Craft Categories',
    subtitle: ['Technology\'s Evolution', 'Towards Brilliance'],
    slides: [
      {
        image: projectthu,
        title: 'PASHMINA',
        description: 'WEAVING CRAFTS',
        link: 'project-details.html'
      },
      {
        image:projectthu2,
        title: 'KANI',
        description: 'WEAVING CRAFTS',
        link: 'project-details.html'
      },
      {
        image:projectthu,
        title: 'CARPET',
        description: 'WEAVING CRAFTS',
        link: 'project-details.html'
      },
      {
        image: projectthu,
        title: 'SILK',
        description: 'WEAVING CRAFTS',
        link: 'project-details.html'
      }
    ]
  };
  
  // Rendering Example
  
  return (
    <div>
      <HeroSection/>
     
      <FeatureArea/>
      
      <AboutSection
        title="Empowering Kashmiri Artisans, Startups in Accessing American "
        color_title="Markets"
        subtitle="Welcome To B2B Connect - USA"
        description="A transformative and progressive platform with an investment of $3.7 million, connecting Kashmir's artisans, startups, and businesses to global markets, fostering fair trade, preserving heritage, and unlocking boundless opportunities for sustainable growth."
        items={[
          'Dream It: Envision your goals. We’ll provide the roadmap',
          'Define It: Select the partnership model tailored to your ambitions.',
          'Deliver It: Upload your credentials, verify your status, and join a league of visionary partners.',
          'Dominate It: Access our resources and watch your business flourish on the global stage.'
        ]}
        image={aboutImage}
        extraText={{
          title: 'Handicraft Progressive Business Model for Every Vision',
          description: "Crafting Kashmir's Next Generations Future Together | Amir-e-Kabir's Legacy, Reimagined for Today's World"
        }}
      />
      <CounterArea/>
      <CaseStudiesArea/>
      <VendorPartnership/>
      <HowItWorks/>
      <FAQSection/>
      <div>
        <hr />
      </div>
      <TestimonialSection/>
      <CarouselSlider {...exampleData} />
      <ServiceArea/>
      <ProgressSection/>
      <SellerNetworkSection/>
      <FlagSection/>
      <FooterUpper imageSrc={ecommerceImage}/>
      <FooterArea/>
      <ScrollArea/>
    </div>
  );
};

export default Index;