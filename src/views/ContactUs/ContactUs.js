import React from "react";

const ContactUs = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        Eagle saloon brings you a blissful experience for all your grooming
        needs.
      </p>
      <span className="email">info@naturals.lk</span>
      <span className="tel">+94 7787 72980</span>
      <span className="address">
        Head Office: 102 1/1, Colombo Road, Rattanapitiya, Boralesgamuwa 10290
      </span>
      {/* Facebook Instagram YouTube TikTok */}
      <span>
        &copy;{new Date().getFullYear()} Naturals Unisex Saloon, SriLanka. All
        Rights Reserved.
      </span>
    </div>
  );
};

export default ContactUs;
