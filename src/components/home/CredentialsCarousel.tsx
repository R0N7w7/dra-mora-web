import { useEffect, useState } from "react"

interface Credential {
    institution: string;
    degree: string;
    logo: string;
}

export default function CredentialsCarousel({ credentials }: { credentials: Credential[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % credentials.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [credentials.length])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <>
            <div className="relative bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
                <div className="py-16 px-8 md:px-16">
                    <div className="flex flex-col items-center justify-center min-h-[280px]">
                        {/* Logo principal del carrusel */}
                        <div className="mb-8 relative size-48 rounded-full bg-secondary/10 flex items-center justify-center overflow-hidden">
                            <img
                                src={credentials[currentIndex].logo || "/placeholder.svg"}
                                alt={`Logo ${credentials[currentIndex].institution}`}
                                className="object-contain size-32"
                            />
                        </div>

                        {/* Contenido con animación */}
                        <div key={currentIndex} className="text-center animate-in fade-in duration-500">
                            <h3 className="serif-title text-3xl md:text-4xl font-bold text-foreground mb-3">
                                {credentials[currentIndex].degree}
                            </h3>
                            <p className="text-primary text-xl md:text-2xl font-semibold">
                                {credentials[currentIndex].institution}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Indicadores (Dots) */}
                <div className="flex items-center justify-center gap-3 pb-8">
                    {credentials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex ? "w-10 h-3 bg-primary" : "w-3 h-3 bg-border hover:bg-muted-foreground/50"
                                }`}
                            aria-label={`Ir a certificación ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}