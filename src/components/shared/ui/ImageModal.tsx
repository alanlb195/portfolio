import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoCloseCircle } from "react-icons/io5";
import { useModalAnimation } from "../animations/useModalAnimation";

export interface ImageModalProps {
    images: string[];
    open: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, open, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Controla si el modal sigue visible aunque open sea false
    const [isVisible, setIsVisible] = useState(open);

    const modalRef = useRef<HTMLDivElement>(null);

    // Maneja cuándo desmontar después de animar salida
    useEffect(() => {
        if (open) setIsVisible(true);
    }, [open]);

    const handleCloseAnimationEnd = () => {
        setIsVisible(false); // ahora sí desmonta
    };

    // Aplica animación de entrada/salida
    useModalAnimation({
        modalRef,
        isOpen: open,
        onCloseAnimationEnd: handleCloseAnimationEnd,
    });

    // 🔹 Cierra con tecla ESC y navega con flechas ← →
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowRight") {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            } else if (e.key === "ArrowLeft") {
                setCurrentIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, images.length, onClose]);

    // Desmonta después del fade-out
    if (!isVisible) return null;

    const modalContent = (
        <div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                ref={modalRef} // animación aquí
                className="relative bg-zinc-800 rounded-2xl shadow-2xl max-w-5xl w-full sm:w-[80%] p-6 flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón de cierre */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 transition-colors duration-200"
                >
                    <IoCloseCircle size={40} />
                </button>

                {/* Imagen principal */}
                <img
                    src={images[currentIndex]}
                    alt={`Imagen ${currentIndex + 1}`}
                    className="rounded-xl max-h-[75vh] object-contain mb-6"
                />

                {/* Miniaturas */}
                <div className="flex gap-3 overflow-x-auto overflow-y-hidden max-w-full px-2">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`border-2 rounded-md transition-all duration-150 flex-shrink-0 ${idx === currentIndex
                                ? "border-indigo-500 scale-105"
                                : "border-transparent hover:border-zinc-400"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Miniatura ${idx + 1}`}
                                className="h-20 w-20 object-cover rounded-md"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ImageModal;
