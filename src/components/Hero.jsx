import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import '../styles/Hero.css';
import profileImg from '../assets/profile.jpg';
import MagneticButton from './MagneticButton';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-glow-center"></div>

            <div className="container hero-content-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center' }}
                >
                    <motion.div
                        className="hero-profile-container"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img src={profileImg} alt="Saurabh Parate" className="hero-profile-img" />
                    </motion.div>

                    <div className="hero-greeting-pill">
                        <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></span>
                        Available for new projects
                    </div>

                    <motion.h1
                        className="hero-title"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                    >
                        <motion.div style={{ overflow: 'hidden' }}>
                            <motion.span variants={{ hidden: { y: "100%" }, visible: { y: 0, transition: { duration: 0.5 } } }} style={{ display: "inline-block" }}>
                                Crafting digital
                            </motion.span>
                        </motion.div>
                        <motion.div style={{ overflow: 'hidden' }}>
                            <motion.span variants={{ hidden: { y: "100%" }, visible: { y: 0, transition: { duration: 0.5 } } }} style={{ display: "inline-block" }} className="serif">
                                experiences
                            </motion.span>
                            <motion.span variants={{ hidden: { y: "100%" }, visible: { y: 0, transition: { duration: 0.5 } } }} style={{ display: "inline-block", marginLeft: "0.3em" }}>
                                that represent
                            </motion.span>
                        </motion.div>
                        <motion.div style={{ overflow: 'hidden' }}>
                            <motion.span variants={{ hidden: { y: "100%" }, visible: { y: 0, transition: { duration: 0.5 } } }} style={{ display: "inline-block" }} className="serif">
                                You.
                            </motion.span>
                        </motion.div>
                    </motion.h1>

                    <p className="hero-subtitle">
                        I am <strong>Saurabh Parate</strong>, a Full Stack Developer & AI/ML Enthusiast specializing in React, Angular, and Django interaction.
                    </p>

                    <div className="hero-buttons">
                        <MagneticButton href="#projects" className="btn-hero-primary">
                            See Works
                        </MagneticButton>
                        <MagneticButton href="#about" className="btn-hero-secondary">
                            About Me
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>

            <motion.div
                style={{ position: 'absolute', bottom: '40px', opacity: 0.5 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown size={24} color="white" />
            </motion.div>
        </section>
    );
};

export default Hero;
