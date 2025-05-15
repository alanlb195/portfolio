// src/components/CertificateList.tsx
import { useState, useEffect } from 'react';
import { actions } from 'astro:actions';
import { basic } from "@/config/config.json";

type Certificate = {
    id: number;
    provider: string;
    date: string | Date;
    duration: string;
    technologies: string[];
    certificateUrl: string;
    title_en: string;
    title_es: string;
    description_en: string;
    description_es: string;
};

interface Props {
    lang: 'en' | 'es';
    initialLimit?: number;
}

export default function CertificateList({ lang, initialLimit = 5 }: Props) {
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const fetchMore = async () => {
        setLoading(true);
        const { data, error } = await actions.getCertificatesPaginated({
            limit: initialLimit,
            offset,
        });

        if (!error && data) {
            setCertificates(prev => [...prev, ...data.data]);
            setOffset(prev => prev + initialLimit);
            setHasMore(data.meta.hasMore);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMore();
    }, []);

    return (
        <div className="space-y-6">
            {certificates.map((cert, index) => {
                const isNew = index >= offset - initialLimit;
                return (
                    <div
                        key={cert.id}
                        className={`flex flex-col sm:flex-row justify-between gap-4 bg-white dark:bg-gray-800 shadow rounded-2xl p-5 w-full transition-all duration-500 ${isNew ? 'animate-fade-in-up' : ''
                            }`}
                    >
                        <div className="flex-1 space-y-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {cert[`title_${lang}` as keyof Certificate] as string}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <span className="font-semibold">{cert.provider}</span> ·{' '}
                                {new Date(cert.date).toLocaleDateString(lang)}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {cert.technologies.map(tech => (
                                    <span
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {cert[`description_${lang}` as keyof Certificate] as string}
                            </p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                            <a
                                href={cert.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 text-yellow-500 hover:text-yellow-400 transition-colors"
                            >
                                <img
                                    src={basic.award_icon}
                                    alt="Email Icon"
                                    className="w-7 h-8"
                                />
                            </a>
                        </div>
                    </div>


                )
            })}

            {hasMore && (
                <div className="text-center mt-8">
                    <button
                        onClick={fetchMore}
                        disabled={loading}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded transition"
                    >
                        {loading ? 'Cargando...' : 'Ver más'}
                    </button>
                </div>
            )}
        </div>
    );
}
