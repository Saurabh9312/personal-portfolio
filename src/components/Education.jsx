import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Education.css';
import resumeFile from '../assets/Saurabh_Resume.pdf';

const Education = () => {
    const educationData = [
        {
            degree: 'Bachelor of Technology (B.Tech)',
            field: 'Computer Science & Engineering',
            institution: 'JD College of Engineering and Management, Nagpur',
            year: '2021 - 2025',
            grade: '9.46 CGPA'
        },
        {
            degree: 'Higher Secondary School',
            field: 'Science',
            institution: 'Shri Dnyanesh Mahavidyalaya, Navargaon',
            year: '2020 - 2021',
            grade: '92.67%'
        },
        {
            degree: 'Secondary School Certificate',
            field: 'Science',
            institution: 'Bharat Vidyalaya, Navargaon',
            year: '2018 - 2019',
            grade: '91%'
        }
    ];

    return (
        <section className="education" id="education">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">Background</span>
                    <h2 className="about-title">Academic <span className="serif-italic">Journey</span></h2>
                    <div style={{ marginTop: '1rem' }}>
                        <a href={resumeFile} download="Saurabh_Parate_Resume.pdf" className="btn-hire">
                            Download Resume
                        </a>
                    </div>
                </motion.div>

                <div className="education-table-container">
                    <table className="education-table">
                        <thead>
                            <tr>
                                <th>Degree / Qualification</th>
                                <th>Institution</th>
                                <th>Year</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {educationData.map((edu, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <td>
                                        <div className="edu-degree">{edu.degree}</div>
                                        <div className="edu-field">{edu.field}</div>
                                    </td>
                                    <td>{edu.institution}</td>
                                    <td><span className="edu-pill">{edu.year}</span></td>
                                    <td>{edu.grade}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Education;
