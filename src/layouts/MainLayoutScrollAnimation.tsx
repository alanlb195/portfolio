// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from 'gsap/ScrollSmoother';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// export const MainLayoutScrollAnimation = () => {

//     useEffect(() => {
//         const smoother = ScrollSmoother.create({
//             wrapper: "#smooth-wrapper",
//             content: "#smooth-content",
//             smooth: 1.5, // velocidad del scroll
//             effects: true,
//             normalizeScroll: true,
//         });

//         const links = document.querySelectorAll('[data-scroll]');

//         links.forEach(link => {
//             link.addEventListener("click", e => {
//                 e.preventDefault();
//                 const targetId = link.getAttribute("data-scroll");
//                 if (targetId) {
//                     const target = document.querySelector(targetId);
//                     if (target) {
//                         const navbar = document.querySelector("nav");
//                         const navbarHeight = navbar ? navbar.offsetHeight : 0;
//                         smoother.scrollTo(
//                             smoother.offset(target, "top top") - navbarHeight,
//                             true
//                         );
//                     }
//                 }
//             });
//         });

//         // Limpiar al desmontar
//         return () => {
//             smoother.kill();
//             links.forEach(link => {
//                 link.removeEventListener("click", () => { });
//             });
//         };
//     }, []);

//     return null;
// }

// export default MainLayoutScrollAnimation;


import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const MainLayoutScrollAnimation = () => {
    useEffect(() => {
        const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
            normalizeScroll: true,
        });

        return () => {
            smoother.kill();
        };
    }, []);

    return null;
}

export default MainLayoutScrollAnimation;