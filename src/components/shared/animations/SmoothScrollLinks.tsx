import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScrollLinks() {
    useEffect(() => {
        const smoother = ScrollSmoother.get();

        const handleClick = (e: Event) => {
            e.preventDefault();
            const link = e.currentTarget as HTMLAnchorElement;
            const targetId = link.getAttribute("data-scroll");
            if (!targetId) return;

            const target = document.querySelector(targetId);
            if (!target) return;

            const navbar = document.querySelector("nav");
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            if (smoother) {
                smoother.scrollTo(
                    smoother.offset(target, "top top") - navbarHeight,
                    true
                );
            } else {
                window.scrollTo({
                    top: (target as HTMLElement).offsetTop - navbarHeight,
                    behavior: "smooth",
                });
            }
        };

        const links = document.querySelectorAll("[data-scroll]");
        links.forEach((link) => link.addEventListener("click", handleClick));

        return () => {
            links.forEach((link) => link.removeEventListener("click", handleClick));
        };
    }, []);

    return null;
}
