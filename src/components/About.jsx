import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/About.css';
import ScrambleText from './ScrambleText';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section className="about" id="about" ref={ref}>
            <div className="container about-content">
                <motion.div
                    className="about-visual"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="code-card">
                        <div className="code-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="code-content">
                            <pre>
                                <code>
                                    <span className="keyword">class</span> <span className="class">SaurabhParate</span> {'{'}
                                    <br />  <span className="keyword">constructor</span>() {'{'}
                                    <br />    <span className="keyword">this</span>.role = <span className="string">'Full Stack Developer'</span>;
                                    <br />    <span className="keyword">this</span>.stack = [
                                    <br />      <span className="string">'Angular'</span>, <span className="string">'Django'</span>, <span className="string">'React'</span>,
                                    <br />      <span className="string">'AI/ML'</span>, <span className="string">'Data Analytics'</span>
                                    <br />    ];
                                    <br />  {'}'}
                                    <br />
                                    <br />  <span className="function">buildSystems</span>() {'{'}
                                    <br />    <span className="comment">// Turning complex requirements into code</span>
                                    <br />    <span className="keyword">return</span> <span className="string">'Scalable Solutions'</span>;
                                    <br />  {'}'}
                                    <br />{'}'}
                                </code>
                            </pre>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <ScrambleText text="About Me" className="section-tag" />
                    <h2 className="about-title">Transforming ideas into <span className="serif-italic">reality</span>.</h2>
                    <p className="about-desc">
                        I am a versatile Full Stack Developer with a deep expertise in building enterprise-grade applications.
                        From complex backend architectures in Django to dynamic frontends in Angular and React, I love solving
                        challenging problems and delivering high-quality software.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <h4>1+</h4>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h4>5+</h4>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h4>∞</h4>
                            <p>Continuous Learning</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
