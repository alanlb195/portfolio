import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export interface UseScrollSmootherVisibilityOptions {
    offset?: number; // umbral de visibilidad (por defecto window.innerHeight - offset)
}

export function useScrollSmootherVisibility(
    options: UseScrollSmootherVisibilityOptions = {}
) {
    const { offset = 100 } = options;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let mounted = true;
        let smoother = ScrollSmoother.get();

        const checkVisibility = () => {
            const scrollY = smoother
                ? typeof smoother.scrollTop === "function"
                    ? smoother.scrollTop()
                    : 0
                : window.scrollY || window.pageYOffset;

            const shouldShow = scrollY > window.innerHeight - offset;
            if (mounted) setVisible(shouldShow);
        };

        gsap.ticker.add(checkVisibility);

        let pollId: number | undefined;
        if (!smoother) {
            pollId = window.setInterval(() => {
                smoother = ScrollSmoother.get();
                if (smoother) {
                    checkVisibility();
                    if (pollId) {
                        clearInterval(pollId);
                        pollId = undefined;
                    }
                }
            }, 100);
        } else {
            checkVisibility();
        }

        return () => {
            mounted = false;
            gsap.ticker.remove(checkVisibility);
            if (pollId) clearInterval(pollId);
        };
    }, [offset]);

    const scrollToTop = () => {
        const smoother = ScrollSmoother.get();
        if (smoother && typeof smoother.scrollTo === "function") {
            smoother.scrollTo(0, true);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return { visible, scrollToTop };
}
