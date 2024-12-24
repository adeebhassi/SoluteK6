// src/App.jsx
import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import Index from './pages/Index';  
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BookAppointmentPage from './pages/BookAppointment';

import MobileMenu from './components/Mobile_Menu';
import Ecommerce from './pages/Ecommerce';
import Loader from './components/Loader';
import DynamicTitle from './helpers/DocumentTitle';
import MissionVisionPage from './pages/About/MissionVision';
import BrandStory from './pages/About/BrandStory';
import Contact from './pages/About/Contact';
import Team from './pages/About/Team';
import BussinessNiche from './pages/About/BussinessNiche';
import BussinessLocation from './pages/About/BussinessLocation';
import BrandCredential from './pages/About/BrandCredential';
// import Navbar from './components/Navbar';
const App = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <DynamicTitle/>
      {isLoading ? (
        <Loader /> 
      ) : (
        <div>
          <Navbar />  
          <MobileMenu/>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/brick-mortar" element={<Ecommerce />} />
            <Route path="/import-export" element={<Ecommerce />} />
            <Route path="/consignment" element={<Ecommerce />} />
            <Route path="/exhibition" element={<Ecommerce />} />
            <Route path="/subsidary" element={<Ecommerce />} />
            <Route path="/franchise" element={<Ecommerce />} />
            <Route path='/mission-vision' element={<MissionVisionPage/>} />
            <Route path='/brand-story' element={<BrandStory/>} />
            <Route path='/brand-credential' element={<BrandCredential/>} />
            <Route path='/bussiness-location' element={<BussinessLocation/>} />
            <Route path='/bussiness-niche' element={<BussinessNiche/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/contact' element={<Contact/>} />
            franchise
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
