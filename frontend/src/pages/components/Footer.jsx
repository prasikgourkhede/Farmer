import React from 'react';
import './Footer.css';

const Footer = () => {
  // External website URLs for agriculture and farming
  const externalLinks = {
    // Government & Agricultural Organizations
    agricultureDepartment: 'https://agriculture.maharashtra.gov.in/',
    farmerPortal: 'https://farmer.gov.in/',
    agricultureMarket: 'https://enam.gov.in/',
    
    // Farming Resources
    farmingGuide: 'https://www.agriculture.com/',
    organicFarming: 'https://www.ifoam.bio/',
    dairyFarming: 'https://www.dairy.com/',
    
    // Agricultural Education
    agriculturalUniversity: 'https://www.pdkv.ac.in/',
    farmingCourses: 'https://www.agrilearner.com/',
    
    // Market & Selling Platforms
    farmProducts: 'https://www.bigbasket.com/',
    directSelling: 'https://www.dehaat.com/',
    
    // Support & Community
    farmerForum: 'https://www.agriculture.com/forum',
    farmingNews: 'https://www.krishijagran.com/',
    
    // Technology & Apps
    farmingApp: 'https://play.google.com/store/apps/details?id=com.cropin',
    weatherApp: 'https://www.accuweather.com/',
    
    // Government Schemes
    pmKisan: 'https://pmkisan.gov.in/',
    soilHealth: 'https://soilhealth.dac.gov.in/'
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <h3 className="footer-brand">FarmStay</h3>
            <p className="footer-description">
              Connecting urban travelers with authentic farm experiences across Maharashtra. 
              Experience rural life while supporting local farmers and sustainable agriculture.
            </p>
          </div>

          {/* Links Grid */}
          <div className="footer-links-grid">
            {/* Farming Resources */}
            <div className="footer-links-column">
              <h4 className="footer-column-title">Farming Resources</h4>
              <ul className="footer-links">
                <li><a href={externalLinks.agricultureDepartment} target="_blank" rel="noopener noreferrer">Maharashtra Agriculture</a></li>
                <li><a href={externalLinks.farmerPortal} target="_blank" rel="noopener noreferrer">Farmer Portal India</a></li>
                <li><a href={externalLinks.agriculturalUniversity} target="_blank" rel="noopener noreferrer">Agricultural University</a></li>
                <li><a href={externalLinks.farmingGuide} target="_blank" rel="noopener noreferrer">Farming Guides</a></li>
                <li><a href={externalLinks.organicFarming} target="_blank" rel="noopener noreferrer">Organic Farming</a></li>
                <li><a href={externalLinks.dairyFarming} target="_blank" rel="noopener noreferrer">Dairy Farming</a></li>
              </ul>
            </div>

            {/* Market & Selling */}
            <div className="footer-links-column">
              <h4 className="footer-column-title">Market & Selling</h4>
              <ul className="footer-links">
                <li><a href={externalLinks.agricultureMarket} target="_blank" rel="noopener noreferrer">e-NAM Market</a></li>
                <li><a href={externalLinks.farmProducts} target="_blank" rel="noopener noreferrer">Sell Farm Products</a></li>
                <li><a href={externalLinks.directSelling} target="_blank" rel="noopener noreferrer">Direct to Consumer</a></li>
                <li><a href={externalLinks.pmKisan} target="_blank" rel="noopener noreferrer">PM-KISAN Scheme</a></li>
                <li><a href={externalLinks.soilHealth} target="_blank" rel="noopener noreferrer">Soil Health Card</a></li>
                <li><a href="https://agmarknet.gov.in/" target="_blank" rel="noopener noreferrer">Agmarknet Prices</a></li>
              </ul>
            </div>

            {/* Support & Community */}
            <div className="footer-links-column">
              <h4 className="footer-column-title">Support & Community</h4>
              <ul className="footer-links">
                <li><a href={externalLinks.farmerForum} target="_blank" rel="noopener noreferrer">Farmer Forum</a></li>
                <li><a href={externalLinks.farmingNews} target="_blank" rel="noopener noreferrer">Farming News</a></li>
                <li><a href={externalLinks.farmingCourses} target="_blank" rel="noopener noreferrer">Online Courses</a></li>
                <li><a href="https://www.kisanmitrr.in/" target="_blank" rel="noopener noreferrer">Kisan Mitrr</a></li>
                <li><a href="https://farmer.gov.in/schemes.htm" target="_blank" rel="noopener noreferrer">Government Schemes</a></li>
                <li><a href="https://www.weather.com/" target="_blank" rel="noopener noreferrer">Weather Updates</a></li>
              </ul>
            </div>

            {/* Technology & Apps */}
            <div className="footer-links-column">
              <h4 className="footer-column-title">Technology & Apps</h4>
              <ul className="footer-links">
                <li><a href={externalLinks.farmingApp} target="_blank" rel="noopener noreferrer">Farming App</a></li>
                <li><a href={externalLinks.weatherApp} target="_blank" rel="noopener noreferrer">Weather App</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=in.gov.dac.ffbc" target="_blank" rel="noopener noreferrer">FFBC App</a></li>
                <li><a href="https://www.cropin.com/" target="_blank" rel="noopener noreferrer">Cropin Technology</a></li>
                <li><a href="https://www.ninjakart.com/" target="_blank" rel="noopener noreferrer">NinjaKart</a></li>
                <li><a href="https://www.agnext.com/" target="_blank" rel="noopener noreferrer">AgNext</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Quick Links */}
        <div className="footer-contact-section">
          <div className="contact-grid">
            <div className="contact-info">
              <h4>Contact FarmStay</h4>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>hello@farmstay.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+91 1800-FARMSTAY</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
            
            <div className="quick-links">
              <h4>Quick Government Links</h4>
              <div className="govt-links">
                <a href="https://pmfby.gov.in/" target="_blank" rel="noopener noreferrer">PM Fasal Bima</a>
                <a href="https://mkisan.gov.in/" target="_blank" rel="noopener noreferrer">mKisan Portal</a>
                <a href="https://dahd.nic.in/" target="_blank" rel="noopener noreferrer">Animal Husbandry</a>
                <a href="https://nhm.nic.in/" target="_blank" rel="noopener noreferrer">Horticulture Mission</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} FarmStay. All rights reserved. | Partnering with Indian Agriculture</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;