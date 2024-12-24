import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();  // Get the current route

  useEffect(() => {
    // Dynamically set the title based on the route path
    const titles = {
      "/home": "Home - Business",
      "/ecommerce": "E-commerce",
      "/services": "Our Services - Business",
      "/": "Business", // Default title for the root route
    };

    document.title = titles[location.pathname] || "Business"; // Fallback title if no match
  }, [location]);

  return null; // This component doesn't render anything
};

export default DynamicTitle;
