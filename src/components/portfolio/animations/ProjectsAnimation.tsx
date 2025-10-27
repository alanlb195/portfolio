import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsAnimation: React.FC = () => {
    useEffect(() => {
        const section = document.querySelector(".projects-section") as HTMLElement | null;
        const wrapper = document.querySelector(".projects-wrapper") as HTMLElement | null;
        const track = document.querySelector(".projects-track") as HTMLElement | null;
        const items = gsap.utils.toArray<HTMLElement>(".projects-track > div");

        if (!section || !wrapper || !track || items.length === 0) return;

        // helper to get navbar height (0 si no existe)
        const getNavHeight = () => {
            const nav = document.querySelector("nav") as HTMLElement | null;
            return nav ? nav.offsetHeight : 0;
        };

        // función que recalcula tamaños y devuelve scrollDistance
        const recalc = () => {
            // ancho visible del wrapper (puede incluir padding del container)
            const wrapperWidth = wrapper.getBoundingClientRect().width;

            // aseguramos que cada slide ocupe exactamente el ancho del wrapper
            items.forEach((it) => {
                // si tienes padding (px-4) y quieres incluirlo en el ancho real, considera calcular inner width
                it.style.width = `${wrapperWidth}px`;
            });

            // totalWidth = sum(widths)
            const totalWidth = items.reduce((acc, el) => acc + el.getBoundingClientRect().width, 0);

            // distancia que necesita moverse el track (cuando el primer slide va a la izquierda y el último queda centrado)
            const scrollDistance = Math.max(totalWidth - wrapperWidth, 0);

            return { wrapperWidth, totalWidth, scrollDistance };
        };

        // Inicializamos ScrollTrigger/gsap animation
        let st: ScrollTrigger | null = null;
        let tween: gsap.core.Tween | null = null;

        const setup = () => {
            const { scrollDistance } = recalc();

            // limpieza previa si existe
            if (st) {
                st.kill();
                st = null;
            }
            if (tween) {
                tween.kill();
                tween = null;
            }

            // calcula start con compensación del nav fijo
            const navbarHeight = getNavHeight();
            const start = `top top+=${navbarHeight}`; // cuando la parte superior de section llegue justo debajo del navbar

            // end debe ser la distancia que queremos mapear a la animación horizontal
            const end = `+=${scrollDistance}`;

            // Si scrollDistance = 0 (ej: 1 slide) no hacemos nada
            if (scrollDistance <= 0) return;

            // crea tween que mueve el track a la izquierda (negativo)
            tween = gsap.to(track, {
                x: -scrollDistance,
                ease: "none",
                paused: true, // lo controla ScrollTrigger
            });

            // crea ScrollTrigger que pinnea la sección y scrubea el tween
            st = ScrollTrigger.create({
                trigger: section,
                start,
                end,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                anticipatePin: 1,
                animation: tween,
                invalidateOnRefresh: true,
            });
        };

        // setup inicial
        setup();

        // Recalcula en resize y en refresh de ScrollTrigger
        const onRefreshOrResize = () => {
            setup();
            ScrollTrigger.refresh();
        };

        // listeners
        window.addEventListener("resize", onRefreshOrResize);

        // Si usas ScrollSmoother en layout esto también debería reaccionar bien; forzamos refresh después de una pequeña demora
        setTimeout(() => ScrollTrigger.refresh(), 50);

        // cleanup
        return () => {
            window.removeEventListener("resize", onRefreshOrResize);
            if (st) st.kill();
            if (tween) tween.kill();
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return null;
};

export default ProjectsAnimation;
