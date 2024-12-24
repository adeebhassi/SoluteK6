import React from 'react'
import Breadcrumb from "../../components/Breadcrumb";
import ContactArea from '../../components/About/Contact/ContactArea';
import AddressArea from '../../components/About/Contact/AddressArea';
import FooterArea from '../../components/FooterArea';
function Contact() {
  const breadcrumbLinks = [
      { label: "Home", path: "/" },
      { label: "Contact" },
    ];
  
    return (
      <div>
        <Breadcrumb title="Contact" links={breadcrumbLinks} />
        <ContactArea/>
        <AddressArea/>
        <FooterArea/>
      </div>
    );
}

export default Contact