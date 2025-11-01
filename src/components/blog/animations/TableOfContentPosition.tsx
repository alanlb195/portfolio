import { useEffect } from "react";
import gsap from "gsap";

export default function TableOfContentPosition() {
  useEffect(() => {
    const toc = document.querySelector(".toc-fixed") as HTMLElement | null;
    if (toc) toc.style.opacity = "0"; // aseguramos que no se vea aún

    const alignTOC = () => {
      const toc = document.querySelector(".toc-fixed") as HTMLElement | null;
      const main = document.querySelector("main.container") as HTMLElement | null;
      if (!toc || !main) return;

      const mainRect = main.getBoundingClientRect();
      const containerLeft = mainRect.left;
      const gap = 20;

      const left = Math.max(12, containerLeft - toc.offsetWidth - gap);
      toc.style.left = `${left}px`;

      // pequeña animación de aparición
      gsap.to(toc, { opacity: 1, duration: 0.1, ease: "power2.out" });
    };

    gsap.delayedCall(0.2, alignTOC);
    window.addEventListener("resize", alignTOC);

    return () => {
      window.removeEventListener("resize", alignTOC);
    };
  }, []);

  return null;
}
