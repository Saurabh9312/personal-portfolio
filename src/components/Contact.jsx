import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import '../styles/Contact.css';
import MagneticButton from './MagneticButton';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-links">
                    <a href="https://github.com/Saurabh9312" target="_blank" rel="noopener noreferrer" className="social-link"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/saurabh-parate-2a196925a" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={24} /></a>
                    <a href="https://x.com/SaurabhParate11" target="_blank" rel="noopener noreferrer" className="social-link"><Twitter size={24} /></a>
                    <a href="mailto:saurabhparate054@gmail.com" className="social-link"><Mail size={24} /></a>
                </div>
                <p className="footer-text">© 2024 Saurabh Parate. All rights reserved.</p>
            </div>
        </footer>
    );
};

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container contact-content">
                <div className="section-header">
                    <span className="section-tag">Get in Touch</span>
                    <h2 className="about-title">Let's work <span className="gradient-text">together</span></h2>
                    <p className="about-desc">Have a project in mind? Let's talk about it.</p>
                </div>

                <motion.div
                    className="contact-form"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    style={{ textAlign: 'center', padding: '2rem' }}
                >
                    <p className="about-desc" style={{ marginBottom: '2rem' }}>
                        I'm always interested in hearing about new projects and opportunities.
                    </p>
                    <MagneticButton
                        href="mailto:saurabhparate054@gmail.com"
                        className="btn-submit"
                        style={{ display: 'inline-block', width: 'auto', padding: '1rem 3rem' }}
                        animate={{
                            boxShadow: ["0 0 0 0px rgba(59, 130, 246, 0.4)", "0 0 0 10px rgba(59, 130, 246, 0)"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    >
                        Say Hello
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
