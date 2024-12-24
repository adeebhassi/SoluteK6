import React from 'react'
import Breadcrumb from "../../components/Breadcrumb";
export default function BussinessNiche() {
  const breadcrumbLinks = [
      { label: "Home", path: "/" },
      { label: "Bussines Niche" },
    ];
  
    return (
      <div>
        <Breadcrumb title="Bussines Niche" links={breadcrumbLinks} />
        <div className="page-content">
          <h1>Our Mission & Vision</h1>
          <p>Content about mission and vision goes here...</p>
        </div>
      </div>
    );
}
