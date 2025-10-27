import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState<boolean | null>(null);

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
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        const nowDark = !html.classList.contains("dark");

        html.classList.toggle("dark");
        localStorage.setItem("theme", nowDark ? "dark" : "light");
        setIsDark(nowDark);
    };

    if (isDark === null) return null;

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:scale-105 transition cursor-pointer"
            title="Toggle Theme"
        >
            {isDark ? <LuSun className="w-5 h-5 text-yellow-500" /> : <LuMoon className="w-5 h-5 text-blue-400" />}
        </button>
    );
}
