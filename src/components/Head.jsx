import React from 'react';
import "./canvas/hero.css";
import bitmoji3 from "../assets/bitmoji2.png";
import realImage from "../assets/realimage.png";


const Head = () => {
  

  return (
    <div className="section" id="banner" style={{ background: 'transparent' }}>
      <div className="content-fit">
        <div className="left-side">
          <div className="namaste-section">
            <p className="namaste-text">
              Namaste! 🙏 I'm Aryan
              <span className="wave">👋</span>
            </p>
          </div>
          <div className="online-title">Aryan in Online</div>
          <img src={bitmoji3} alt="Bitmoji" className="bitmoji-image" />
        </div>
        <div className="right-side">
          <div className="offline-title">Aryan in Offline</div>
          <img src={realImage} alt="Real Aryan" className="real-image" />
        </div>
      </div>

      {/* Social Media Section */}
  

      {/* Dialogue Sections */}
      <div className="dialogue" id="dialogue-animation" style={{ display: "none" }}></div>
      <div className="dialogue" id="dialogue-webdev" style={{ display: "none" }}>
        Web Development
      </div>
      <div className="dialogue" id="dialogue-contact" style={{ display: "none" }}>
        Contact
      </div>
    </div>
  );
};

export default Head;
