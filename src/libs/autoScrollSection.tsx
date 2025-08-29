import { useEffect, useRef, PropsWithChildren } from 'react';

interface AutoScrollSectionProps {
    id: string;
}

export function AutoScrollSection({ id, children }: PropsWithChildren<AutoScrollSectionProps>) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            },
            { threshold: [0, 0.25, 1] }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section id={id} ref={ref} className="section">
            {children}
        </section>
    );
}
export default AutoScrollSection;