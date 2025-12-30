import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const CYBERPUNK_CHARS = '-_~`!@#$%^&*()+=[]{}|;:,.<>?/';

const ScrambleText = ({ text, className = "", hover = false }) => {
    const [displayText, setDisplayText] = useState(text);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    // We'll use a ref to track if we're currently animating so hover doesn't break entry
    const isAnimating = useRef(false);

    const scramble = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        let iterations = 0;
        const maxIterations = 10; // How many scrambles per letter

        const interval = setInterval(() => {
            setDisplayText(prev =>
                text.split("").map((char, index) => {
                    if (index < iterations) {
                        return text[index];
                    }
                    return CYBERPUNK_CHARS[Math.floor(Math.random() * CYBERPUNK_CHARS.length)];
                }).join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
                isAnimating.current = false;
            }

            iterations += 1 / 2; // Speed control
        }, 30);
    };

    useEffect(() => {
        if (isInView && !hover) {
            scramble();
        }
    }, [isInView, hover]);

    return (
        <span
            ref={ref}
            className={className}
            onMouseEnter={hover ? scramble : undefined}
            style={{ display: 'inline-block' }}
        >
            {displayText}
        </span>
    );
};

export default ScrambleText;
