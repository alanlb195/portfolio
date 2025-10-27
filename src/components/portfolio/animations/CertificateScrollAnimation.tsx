import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CertificatesScrollAnimation() {
    useEffect(() => {
        // Aseguramos que los elementos existan
        const cards = gsap.utils.toArray<HTMLElement>(".certificate-card");

        cards.forEach((card, i) => {
            gsap.fromTo(
                card,  // ← elemento objetivo
                { opacity: 0, scale: 0.85, y: 0 },  // <- estado inicial (antes de aparecer)
                {
                    opacity: 1, // <- estado final
                    scale: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "back.out(1.7)",
                    delay: i * 0.08,
                    // scrollTrigger: {    // <- se activa al hacer scroll
                    //     trigger: card,
                    //     // anticipatePin: 1, // pequeño margen para preparar las animaciones antes de que el scroll llegue ahí.
                    //     start: "top 88%",
                    //     end: "top 82%",
                    //     scrub: 0.5, // hace que la animacion siga al scroll
                    //     once: true, // lo mismo que toggleActions, true para que se repita, false para que sea una vez al entrar
                    //     // toggleActions: "play reverse play reverse", // <- se ejecuta al entrar y al salir del scrol
                    // },
                    scrollTrigger: {
                        trigger: card,
                        start: "top 92%",
                        end: "top 75%",
                        scrub: 0.7,
                        once: true,
                    },
                }
            );
        });

        // cleanup
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };

    }, []);

    return null;
}
