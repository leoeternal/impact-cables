import React from "react";
import Button from "@mui/material/Button";
import "./contactPage.css";

function ContactPage() {
  return (
    <div id="contact" className="contactpage-wrapper">
      <div className="heading1">
        <p>Get in touch</p>
      </div>
      <div className="heading2">
        <p>Want to know how we can help you? Let's discuss!</p>
      </div>
      <div className="button">
        <a style={{ textDecoration: "none" }} href="#contact2">
          <Button size="large" variant="contained">
            Contact Us
          </Button>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
