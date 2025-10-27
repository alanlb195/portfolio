import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const PresentationAnimations = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Texto principal
            const headline = document.querySelector(".presentation-text-block");
            if (headline) {
                const split = new SplitText(headline, {
                    type: "words,chars",
                    charsClass: "char",
                });

                gsap.from(split.chars, {
                    yPercent: 120,
                    opacity: 0,
                    duration: 1.2,
                    ease: "back.out(1.7)",
                    stagger: {
                        each: 0.015,
                        from: "random",
                    },
                });
            }

            // animacion tipo fade in hacia ariba (y) desde opacity 0 a 1
            gsap.from(".presentation-text", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power2.out",
                delay: 0.3,
                stagger: 0.2,
            });
        });

        return () => ctx.revert();
    }, []);

    return null;
};

export default PresentationAnimations;
