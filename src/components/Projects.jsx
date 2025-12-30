import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';
import projectBg from '../assets/project_mockup.png';
import projectBgDA from '../assets/doctor_appointment.png';
import projectBgEM from '../assets/employee_management.png';
import projectBgMOM from '../assets/mom_generation.png';
import ScrambleText from './ScrambleText';

const Projects = () => {
    const projects = [
        {
            title: 'Doctor Appointment System',
            desc: 'A modern full-stack application for managing doctor appointments featuring role-based access control and AI chatbot support.',
            tags: ['Django', 'React', 'AI'],
            image: projectBgDA,
            link: 'https://github.com/Saurabh9312/Doctor-Appointment-Management',
            liveLink: 'https://doctor-appointment-management-2.onrender.com/',
            useManualImage: true
        },
        {
            title: 'Employee Management',
            desc: 'Comprehensive system for enterprise needs with a dynamic Angular frontend and robust Django backend management.',
            tags: ['Angular', 'Django', 'TypeScript'],
            image: projectBgEM,
            link: 'https://github.com/Saurabh9312/Employee-Management-Full-Stack-Angular-Django-',
            liveLink: 'https://employee-management-full-stack-angular-q7go.onrender.com',
            useManualImage: true
        },
        {
            title: 'AI MOM Generator',
            desc: 'Automated Minutes of Meeting generator tool designed to transcribe and organize meeting notes into professional documents.',
            tags: ['TypeScript', 'React', 'Django', 'AI', 'Automation'],
            image: projectBgMOM,
            link: 'https://github.com/Saurabh9312/MOM-generation',
            liveLink: 'https://sdeiaiml.com:9198/',
            useManualImage: true
        },
        {
            title: 'E-Commerce Backend',
            desc: 'Scalable backend architecture for an eCommerce platform handling complex product catalogs and user authentication.',
            tags: ['Python', 'Django', 'SQLite'],
            image: projectBg,
            link: 'https://github.com/Saurabh9312/Ecommerce-Backend-in-Django'
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Featured</span>
                    <h2 className="about-title">Selected <ScrambleText text="Works" className="serif-italic" hover={true} /></h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                rotateX: 2,
                                rotateY: 2,
                                transition: { duration: 0.3 }
                            }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, margin: "-100px" }}
                        >
                            <div className="project-image">
                                <img
                                    src={(project.liveLink && !project.useManualImage)
                                        ? `https://api.microlink.io/?url=${encodeURIComponent(project.liveLink)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1024&viewport.height=768`
                                        : project.image}
                                    alt={project.title}
                                    onError={(e) => {
                                        e.target.src = project.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000";
                                    }}
                                />
                                <div className="project-overlay">
                                    <a href={project.liveLink || project.link} target="_blank" rel="noopener noreferrer" className="btn-project"><ExternalLink size={20} /></a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project"><Github size={20} /></a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
