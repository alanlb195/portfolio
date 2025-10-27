/**
 * Simple helper to combine conditional Tailwind classes.
 * Usage: cn('p-4', condition && 'bg-red-500', isDark ? 'text-white' : 'text-black')
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
}
