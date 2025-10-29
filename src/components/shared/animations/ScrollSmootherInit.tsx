import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ScrollSmootherInit() {
    useEffect(() => {
        const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
            normalizeScroll: true,
        });

        // guarda una referencia global - útil para modales o menús que la lleguen a necesitar, ej. para bloquear el scroll al abrir un modal
        (window as any).ScrollSmoother = ScrollSmoother;

        return () => {
            smoother.kill();
        };
    }, []);

    return null;
}
