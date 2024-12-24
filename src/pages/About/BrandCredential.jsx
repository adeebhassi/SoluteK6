import React from 'react'
import Breadcrumb from "../../components/Breadcrumb";
import CredibilityAndTrust from '../../components/About/BrandCredentials/CredibilityAndTrust';
import WhyChooseUsSection from '../../components/About/BrandCredentials/WhyChooseSection';
import certificate from '../../assets/images/certificate.png';
import memborshipImage from '../../assets/images/membership.png'
export default function BrandCredential() {
  const breadcrumbLinks = [
      { label: "Home", path: "/" },
      { label: "Brand Credentials" },
    ];
    const section1Items = [
        { heading: 'Product Credibility', description: 'Certifications validate quality, authenticity, and origins globally.' },
        { heading: 'Market Access', description: 'Unlock premium global markets with certified products.' },
        { heading: 'Competitive Edge', description: 'Stand out with recognized standards that inspire trust.' },
        { heading: 'Customer Trust', description: 'Build strong relationships through verified quality assurance.' },
        { heading: 'Sustainability Advantage', description: 'Attract eco-conscious buyers with certified practices.' },
        { heading: 'Growth Potential', description: 'Expand opportunities with partnerships in high-value markets.' },
      ];
    
      const section2Items = [
        { heading: 'Global Access', description: 'Expand your reach and unlock premium market opportunities.' },
        { heading: 'Enhanced Credibility', description: 'Boost trust and elevate your brand’s reputation globally.' },
        { heading: 'Strategic Networks', description: 'Forge partnerships and thrive in influential business circles.' },
        { heading: 'Sales Acceleration', description: 'Drive demand and amplify your revenue potential exponentially.' },
        { heading: 'Industry Insights', description: 'Stay ahead with knowledge of market trends and innovations.' },
        { heading: 'Brand Empowerment', description: 'Strengthen your presence and achieve sustainable business growth.' },
      ];
    return (
      <div>
        <Breadcrumb title="Brand Credentials" links={breadcrumbLinks} />
        <WhyChooseUsSection
        title="Certified for Success"
        subtitle="Building Trust, Unlocking Markets, Empowering Growth Globally"
        bgImage={certificate}
        items={section1Items}
      />
      <WhyChooseUsSection
        title="Empowering Global Growth"
        subtitle="Unlock markets, build trust, and elevate success"
        bgImage={memborshipImage}
        items={section2Items}
      />
        <CredibilityAndTrust/>
      </div>
    );
}
