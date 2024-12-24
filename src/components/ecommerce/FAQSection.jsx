import React,{useState} from "react";
import faqImage from '../../assets/images/faq-big.png'; // Importing images
import faqShape1 from '../../assets/images/faq2.png';
import faqShape2 from '../../assets/images/faq3.png';



const faqContent = [
  {
    title: "Vendor Registration",
    questions: [
      {
        question: "How do I become a vendor on the platform?",
        answer: "Vendors must meet the eligibility criteria, register on the platform, and provide the required documentation for approval."
      },
      {
        question: "What are the eligibility criteria for vendors?",
        answer: "Vendors must offer authentic Kashmiri crafts, adhere to quality standards, and comply with platform policies. Refer to the detailed eligibility criteria for more information."
      },
      {
        question: "Is there a fee to join the platform?",
        answer: "Joining and selling on the platform is free for early adopters. Early adopters enjoy exclusive access to premium features without any charges during the introductory period."
      },
      {
        question: "What will be the platform fee after filling the early adopters’ quota?",
        answer: "Once the early adopters’ quota is filled, vendors can choose from the following subscription plans."
      }
    ]
  },
  {
    title: "Product Management",
    questions: [
      {
        question: "How do I list my products?",
        answer: "Vendors can upload high-quality images, descriptions, and prices through the vendor dashboard. Training is available for first-time users."
      },
      {
        question: "Are there restrictions on the types of products I can list?",
        answer: "Only authentic Kashmiri crafts that meet quality standards and are handcrafted or artisan-focused can be listed."
      },
      {
        question: "Can I update or modify my product listings?",
        answer: "Yes, you can edit product details, prices, and inventory at any time through the vendor dashboard."
      },
      {
        question: "How is product authenticity verified?",
        answer: "Vendors must provide proof of authenticity, such as Geographical Indication (GI) tags or certifications. Regular quality checks are conducted."
      }
    ]
  },
  {
    title: "Payments and Fees",
    questions: [
      {
        question: "How are payments processed?",
        answer: "Payments are processed securely through the platform and deposited into your registered bank account. Payment cycles are weekly or bi-weekly, depending on your preference."
      },
      {
        question: "What fees are associated with selling on the platform?",
        answer: "Once the early adopters' quota is filled, vendors can choose from the available subscription plans detailed above."
      },
      {
        question: "Are there additional fees for optional services?",
        answer: "Optional services, like featured product listings, premium marketing support, and logistics solutions, are available for an additional fee if required."
      },
      {
        question: "How do I track my earnings?",
        answer: "Vendors can monitor their earnings, pending payments, and transaction history through the analytics section of the dashboard."
      }
    ]
  },
  {
    title: "Training and Support",
    questions: [
      {
        question: "Does the platform offer training for vendors?",
        answer: "Yes, training programs and workshops are available to help vendors align with global market standards and improve their skills."
      },
      {
        question: "How do I access vendor support?",
        answer: "Vendor support is available via email, live chat, or through the help center on the platform."
      },
      {
        question: "Can I request additional marketing support?",
        answer: "Yes, vendors can opt for additional marketing services, such as featured product listings or promotional campaigns, at an extra cost."
      },
      {
        question: "Are there networking opportunities for vendors?",
        answer: "The platform provides opportunities to connect with other vendors and industry experts through events and online forums."
      }
    ]
  },
  {
    title: "Policies and Compliance",
    questions: [
      {
        question: "What happens if I don’t comply with platform policies?",
        answer: "Non-compliance may result in penalties, suspension, or termination of your vendor account. Regular audits ensure adherence to policies."
      },
      {
        question: "Do I need to maintain a minimum inventory level?",
        answer: "Vendors are expected to maintain sufficient inventory to meet demand and fulfill orders promptly."
      },
      {
        question: "How are disputes or returns handled?",
        answer: "The platform manages customer disputes and returns through a standardized policy. Vendors are notified and involved in the resolution process."
      },
      {
        question: "Can I sell products outside the platform?",
        answer: "Yes, vendors can sell products through other channels. However, exclusive collaborations or agreements may have specific conditions."
      },
      {
        question: "Can I be blacklisted from the platform?",
        answer: "Yes, vendors can be blacklisted for non-compliance with platform policies. De Koshur Crafts B2B Connect is in partnership with Craftlore, the world’s largest open repository of Kashmiri crafts."
      }
    ]
  }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (tabIndex, questionIndex) => {
    // If the clicked question is already active, toggle it off, else set it as active
    setActiveIndex(prevState =>
      prevState === `${tabIndex}-${questionIndex}` ? null : `${tabIndex}-${questionIndex}`
    );
  };
  return (
    <div className="faq-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <h5 className="section-sub-title">FAQ</h5>
              <h1 className="section-main-title" style={{ fontSize: "30px" }}>
                Frequently Asked Questions
              </h1>
              <h1 className="section-main-title" style={{ fontSize: "30px" }}>
                (FAQs) for <span>Vendors.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="faq-thumb">
              <img src={faqImage} width="100%" alt="faq1" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="tab_container">
              {faqContent.map((tab, index) => (
                <div id={`tab${index + 1}`} className="tab_content" key={index}>
                  <h3>{index + 1}. {tab.title}</h3>
                  <ul className="accordion">
                    {tab.questions.map((question, qIndex) => (
                      <li key={qIndex}>
                        <a
                          onClick={() => handleToggle(index, qIndex)}
                          className={activeIndex === `${index}-${qIndex}` ? "active" : ""}
                        >
                          <span>{question.question}</span>
                        </a>
                        <p
                          style={{
                            display: activeIndex === `${index}-${qIndex}` ? "block" : "none",
                          }}
                        >
                          {question.answer}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="faq-shape">
          <img src={faqShape1} alt="faq2" />
        </div>
        <div className="faq-shape2">
          <img src={faqShape2} alt="faq2" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
