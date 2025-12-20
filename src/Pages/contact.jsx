import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';


function Contact() {
    return (
        <div className="contact-page">

            {/* HERO */}
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>
                    We’d love to hear from you. Let’s build kindness together 💜
                </p>
            </section>

            {/* MAIN CONTENT */}
            <section className="contact-container container">

                
                {/* CONTACT INFO */}
                <div className="contact-info card">
                    <h2>Get in Touch</h2>

                    <p className="contact-desc">
                        Have a question, feedback, or a story to share?
                        We’re always here to listen.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <span className="contact-icon">📧</span>
                            <div>
                                <small>Email</small>
                                <p>support@humansofkindness.org</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <div>
                                <small>Phone</small>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <div>
                                <small>Location</small>
                                <p>Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* CONTACT FORM */}
                <div className="contact-form card">
                    <h2>Send a Message</h2>

                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea
                        placeholder="Write your message..."
                        rows="5"
                    />

                    <button className="btn-primary">
                        Send Message ✉️
                    </button>
                </div>

            </section>

        </div>
    );
}

export default Contact;
