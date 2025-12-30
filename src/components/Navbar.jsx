import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';
import MagneticButton from './MagneticButton';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Works', href: '#projects' },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="navbar-container">
                <a href="#" className="logo">
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        style={{ display: 'inline-block' }}
                    >
                        Saurabh.
                    </motion.span>
                </a>

                <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
                    {navItems.map((item) => (
                        <MagneticButton
                            key={item.name}
                            href={item.href}
                            className="nav-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.name}
                            <span className="nav-link-underline"></span>
                        </MagneticButton>
                    ))}
                    <MagneticButton
                        href="#contact"
                        className="btn-hire"
                        onClick={() => setMobileOpen(false)}
                    >
                        Let's Connect
                    </MagneticButton>
                </div>

                <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
