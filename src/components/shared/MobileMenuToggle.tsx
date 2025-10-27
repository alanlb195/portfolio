import { useEffect } from "react";

export default function MobileMenuToggle() {
    useEffect(() => {
        const menu = document.getElementById("mobile-menu");
        const toggle = document.getElementById("menu-toggle");
        const close = document.getElementById("menu-close");

        if (!menu || !toggle || !close) return;

        const open = () => {
            menu.classList.remove("-translate-x-full");
            menu.classList.add("translate-x-0");
        };

        const closeMenu = () => {
            menu.classList.add("-translate-x-full");
            menu.classList.remove("translate-x-0");
        };

        const handleClickOutside = (event: MouseEvent) => {
            // Si el menú está abierto y el click NO ocurrió dentro del menú ni en el botón toggle
            if (
                menu.classList.contains("translate-x-0") &&
                !menu.contains(event.target as Node) &&
                !toggle.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        toggle.addEventListener("click", open);
        close.addEventListener("click", closeMenu);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            toggle.removeEventListener("click", open);
            close.removeEventListener("click", closeMenu);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return null;
}
