import React from 'react';
import '../Styles/Footer.css'; // Import CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-branches">
        <div className="branch">
          <h4>E11 Branch</h4>
          <p>Name: [Insert Name]</p>
          <p>Mobile No: [Insert Mobile Number]</p>
          <p>Location: [Insert Location]</p>
        </div>
        <div className="branch">
          <h4>G6 Branch</h4>
          <p>Name: [Insert Name]</p>
          <p>Mobile No: [Insert Mobile Number]</p>
          <p>Location: [Insert Location]</p>
        </div>
        <div className="branch">
          <h4>F6 Branch</h4>
          <p>Name: [Insert Name]</p>
          <p>Mobile No: [Insert Mobile Number]</p>
          <p>Location: [Insert Location]</p>
        </div>
        <div className="branch">
          <h4>H11 Branch</h4>
          <p>Name: [Insert Name]</p>
          <p>Mobile No: [Insert Mobile Number]</p>
          <p>Location: [Insert Location]</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="[Instagram Link]">Instagram</a>
          <a href="[Facebook Link]">Facebook</a>
          <a href="[Twitter Link]">Twitter</a>
          <a href="[WhatsApp Link]">WhatsApp</a>
        </div>
        <div className="footer-emails">
          <p>Email: [traffichelp@gmail.gov.pk]</p>
          <p>Email: [trafficheadoffice@gmail.gov.pk]</p>
        </div>
      </div>
    </footer>
  );
}
