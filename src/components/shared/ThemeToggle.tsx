import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";


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
    }

    if (isDark === null) return null;

    return (
        <button
            className="w-[54px] h-[47px] flex items-center justify-center border text-sm font-medium text-gray-800 dark:text-gray-200
                    transition-colors duration-200 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700
                  hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            onClick={toggleTheme}
        >
            {isDark ? <LuSun className="w-5 h-5" /> : <LuMoon className="w-5 h-5" />}
        </button>

    );
}
