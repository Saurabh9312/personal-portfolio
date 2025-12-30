import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Code, Smartphone, Globe } from 'lucide-react';
import ScrambleText from './ScrambleText';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        { name: 'AI/ML', icon: <Server size={32} /> },
        { name: 'Angular', icon: <Code size={32} /> },
        { name: 'React', icon: <Code size={32} /> },
        { name: 'Python/Django', icon: <Server size={32} /> },
        { name: 'SQL & DBs', icon: <Database size={32} /> },
        { name: 'Data Analytics', icon: <Layout size={32} /> },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My Toolbox</span>
                    <h2 className="about-title">
                        My Technical <ScrambleText text="Skills" className="serif-italic" hover={true} />
                    </h2>
                </div>

                <motion.div
                    className="skills-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            variants={item}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                transition: { duration: 0.2 }
                            }}
                            animate={{
                                y: [0, -5, 0],
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2 // Randomize/stagger the float effect slightly
                                }
                            }}
                        >
                            <div className="skill-icon">
                                {skill.icon}
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
