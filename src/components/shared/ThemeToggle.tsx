import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import gsap from "gsap";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState<boolean | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        const storedTheme = localStorage.getItem("theme");
        const prefersDark =
            storedTheme === "dark" ||
            (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (prefersDark) {
            html.classList.add("dark");
            setIsDark(true);
        } else {
            html.classList.remove("dark");
            setIsDark(false);
        }
        
        setTimeout(() => {
            setVisible(true);
            gsap.to(".theme-toggle-btn", { opacity: 1, duration: 0.2, ease: "power2.out" });
        }, 100);
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        const nowDark = !html.classList.contains("dark");

        html.classList.toggle("dark");
        localStorage.setItem("theme", nowDark ? "dark" : "light");
        setIsDark(nowDark);
    };

    if (isDark === null) return null; // aún cargando

    return (
        <button
            onClick={toggleTheme}
            className={`theme-toggle-btn w-10 h-10 flex items-center justify-center 
      bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
      rounded-md hover:scale-105 transition cursor-pointer
      ${visible ? "opacity-100" : "opacity-0"}`}
            title="Toggle Theme"
        >
            {isDark ? (
                <LuSun className="w-5 h-5 text-yellow-500" />
            ) : (
                <LuMoon className="w-5 h-5 text-blue-400" />
            )}
        </button>
    );
}
