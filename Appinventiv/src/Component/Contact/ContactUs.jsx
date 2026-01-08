import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        // Reset the form fields
        setFormData({ name: "", email: "", subject: "", message: "" });
        e.target.reset();
      } else {
        alert(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert(
        "Could not connect to the server. Is your backend running on port 5000?"
      );
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-info">
          <h2 className="heavy-heading">
            Let's Build Something <br />
            Great Together
          </h2>
          <p className="contact-subtext">
            Ready to start your digital transformation? Reach out to our experts
            and get a response within 24 hours.
          </p>

          <div className="info-blocks">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Global Headquarters</h4>
                <p>Noida, India | New York, USA</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email Us</h4>
                <p>hello@appinventiv.com</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="contact-form-box">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name} 
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email} 
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject} 
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="5"
              required
              value={formData.message} 
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
