import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useScrollSmootherVisibility } from "../animations/useScrollSmootherVisibility";

interface FloatingButtonProps {
    icon?: React.ReactNode;
    color?: string;
    position?: string;
}

export default function FloatingButtonReact({
    icon = <FaArrowUp size={18} />,
    color = "bg-blue-600",
    position = "bottom-6 right-6",
}: FloatingButtonProps) {
    const { visible, scrollToTop } = useScrollSmootherVisibility({ offset: 100 });

    return (
        <button
            onClick={scrollToTop}
            className={`cursor-pointer fixed ${position} z-50 p-3 rounded-full ${color} text-white shadow-lg transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Subir al inicio"
            title="Subir al inicio"
        >
            {icon}
        </button>
    );
}
