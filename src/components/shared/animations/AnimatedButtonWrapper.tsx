import React, { useEffect, useState } from "react";
import gsap from "gsap";

interface AnimatedButtonWrapperProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
}

const AnimatedButtonWrapper: React.FC<AnimatedButtonWrapperProps> = ({
    children,
    width = "140px",
    height = "44px",
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
            gsap.to(".fade-in-button", {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        }, 1);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`fade-in-button flex items-center justify-center opacity-0 translate-y-1`}
            style={{ width, height }}
        >
            {visible && children}
        </div>
    );
};

export default AnimatedButtonWrapper;
