// src/components/shared/hooks/useModalAnimation.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface UseModalAnimationProps {
    modalRef: React.RefObject<HTMLDivElement | null>;
    isOpen: boolean;
    onCloseAnimationEnd?: () => void; // callback al terminar animación de salida
}

/**
 * Hook para animar la entrada y salida de un modal con GSAP.
 * @param modalRef - referencia al contenedor del modal.
 * @param isOpen - estado de apertura del modal.
 * @param onCloseAnimationEnd - callback cuando finaliza la animación de salida.
 */
export const useModalAnimation = ({
    modalRef,
    isOpen,
    onCloseAnimationEnd,
}: UseModalAnimationProps) => {
    const hasAnimatedRef = useRef(false); // controla si ya se animó

    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;

        if (isOpen) {
            // Solo animar si no lo hemos hecho aún
            if (hasAnimatedRef.current) return;
            hasAnimatedRef.current = true;
            // Animación de entrada
            gsap.killTweensOf(modal);
            gsap.fromTo(
                modal,
                { autoAlpha: 0, scale: 0.9, y: 30 },
                { autoAlpha: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        } else {
            // Animación de salida
            hasAnimatedRef.current = false; // se resetea cuando se cierra
            gsap.killTweensOf(modal);
            gsap.to(modal, {
                autoAlpha: 0,
                scale: 0.9,
                y: 30,
                duration: 0.35,
                ease: "power2.in",
                onComplete: () => {
                    // Llama al callback cuando la animación de salida termina
                    onCloseAnimationEnd?.();
                },
            });
        }

        // animation #2
        // if (isOpen) {
        //     gsap.killTweensOf(modal);
        //     gsap.fromTo(
        //         modal,
        //         { autoAlpha: 0, scale: 0.8, y: 40, boxShadow: "0 0 0px rgba(255,255,255,0)" },
        //         {
        //             autoAlpha: 1,
        //             scale: 1,
        //             y: 0,
        //             boxShadow: "0 0 40px rgba(255,255,255,0.2)",
        //             duration: 0.6,
        //             ease: "back.out(1.7)",
        //         }
        //     );
        // } else {
        //     gsap.to(modal, {
        //         autoAlpha: 0,
        //         scale: 0.9,
        //         y: 40,
        //         boxShadow: "0 0 0px rgba(255,255,255,0)",
        //         duration: 0.4,
        //         ease: "power2.inOut",
        //         onComplete: onCloseAnimationEnd,
        //     });
        // }


        // Animation #3
        // if (isOpen) {
        //     gsap.killTweensOf(modal);
        //     gsap.fromTo(
        //         modal,
        //         { autoAlpha: 0, y: 100 },
        //         {
        //             autoAlpha: 1,
        //             y: 0,
        //             duration: 0.5,
        //             ease: "power3.out",
        //         }
        //     );
        // } else {
        //     gsap.to(modal, {
        //         autoAlpha: 0,
        //         y: 100,
        //         duration: 0.4,
        //         ease: "power3.in",
        //         onComplete: onCloseAnimationEnd,
        //     });
        // }

        // animation #4
        // if (isOpen) {
        //     gsap.killTweensOf(modal);
        //     gsap.fromTo(
        //         modal,
        //         { autoAlpha: 0, scale: 0.8, rotateY: 15 },
        //         {
        //             autoAlpha: 1,
        //             scale: 1,
        //             rotateY: 0,
        //             duration: 0.6,
        //             ease: "expo.out",
        //             transformOrigin: "center center",
        //         }
        //     );
        // } else {
        //     gsap.to(modal, {
        //         autoAlpha: 0,
        //         scale: 0.9,
        //         rotateY: -10,
        //         duration: 0.4,
        //         ease: "expo.in",
        //         transformOrigin: "center center",
        //         onComplete: onCloseAnimationEnd,
        //     });
        // }

        // animation 5
        // if (isOpen) {
        //     gsap.killTweensOf(modal);
        //     gsap.fromTo(
        //         modal,
        //         { autoAlpha: 0, y: -40, scale: 0.95 },
        //         {
        //             autoAlpha: 1,
        //             y: 0,
        //             scale: 1,
        //             duration: 0.7,
        //             ease: "elastic.out(1, 0.5)",
        //         }
        //     );
        // } else {
        //     gsap.to(modal, {
        //         autoAlpha: 0,
        //         y: -30,
        //         scale: 0.95,
        //         duration: 0.4,
        //         ease: "power2.inOut",
        //         onComplete: onCloseAnimationEnd,
        //     });
        // }
    }, [isOpen, modalRef, onCloseAnimationEnd]);
};
