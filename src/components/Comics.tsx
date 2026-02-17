import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import mxmWordLogo1 from "../assets/MxM Word Logo.png";
import mxmHandLogo1 from "../assets/MxM Hand Logo 1.png";

export const Comics = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsVisible(currentScrollPos < 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const comics = [
        "/comic/001.png",
        "/comic/002.png",
        "/comic/003.png",
        "/comic/004.png"
    ];

    return (
        <div className="bg-white w-full min-h-screen flex flex-col items-center selection:bg-black selection:text-white">
            {/* Header - Fully Transparent & Disappears on Scroll */}
            <header
                className={`w-full flex justify-center items-center py-6 lg:py-10 fixed top-0 z-50 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                    }`}
            >
                <Link to="/" className="transition-opacity hover:opacity-80">
                    <img
                        className="w-[120px] lg:w-[260px] h-auto object-contain cursor-pointer"
                        alt="MimeXMime logo"
                        src={mxmWordLogo1}
                    />
                </Link>
            </header>

            {/* Comic Strips Container - Full Screen Width */}
            <main className="w-full flex flex-col items-center">
                <div className="flex flex-col w-full">
                    {comics.map((src, index) => (
                        <div
                            key={index}
                            className="w-full animate-fade-in"
                            style={{ "--animation-delay": `${index * 0.1}s` } as React.CSSProperties}
                        >
                            <img
                                src={src}
                                alt={`Comic strip ${index + 1}`}
                                className="w-full h-auto object-cover block"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-dashed border-black flex flex-col items-center py-12 lg:py-16 gap-8 bg-white">
                <Link to="/">
                    <div className="text-black font-medium text-lg lg:text-xl border border-dashed border-black px-10 py-3 lg:px-16 lg:py-5 hover:bg-black hover:text-white transition-all duration-300 tracking-tight">
                        back home
                    </div>
                </Link>
                <div className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] flex items-center justify-center animate-float">
                    <img
                        className="w-[28px] lg:w-[45px] h-auto object-contain"
                        alt="MxM hand logo"
                        src={mxmHandLogo1}
                    />
                </div>
            </footer>
        </div>
    );
};
