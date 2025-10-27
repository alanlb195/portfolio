import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PresentationAnimation() {

    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            setTimeout(() => {

                gsap.from(".hero-img", {
                    opacity: 0,
                    y: 40,
                    duration: 1.2,
                    ease: "power3.out",
                });

            }, 1);

        }, container);

        return () => ctx.revert();
    }, []);

    return <div ref={container}></div>;
}
