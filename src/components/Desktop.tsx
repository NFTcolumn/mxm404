import MIMEY1 from "../assets/MIMEY.png";
import chat1 from "../assets/Chat.png";
import marcelOutline1 from "../assets/Marcel Outline.png";
import mxmHandLogo1 from "../assets/MxM Hand Logo 1.png";
import mxmWordLogo1 from "../assets/MxM Word Logo.png";

export const Desktop = (): JSX.Element => {
    return (
        <div className="bg-white w-full min-h-screen flex flex-col">
            {/* Header */}
            <header className="w-full border-b border-dashed border-black flex justify-center items-center py-4 lg:py-12 relative">
                <a href="https://stickers.mimexmime.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-[140px] lg:w-[305px] h-auto object-contain cursor-pointer transition-transform hover:scale-105"
                        alt="MimeXMime logo"
                        src={mxmWordLogo1}
                    />
                </a>
                {/* Chat icon - top right */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center">
                    <img
                        className="w-[40px] lg:w-[60px] h-auto object-contain"
                        alt="Chat"
                        src={chat1}
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="w-full flex-1 border-b border-dashed border-black flex flex-col lg:flex-row items-center justify-center py-4 lg:py-20 gap-2 lg:gap-0 relative">
                {/* Mimey - Left side on desktop, inline on mobile */}
                <div className="lg:absolute lg:left-[10%] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] flex items-center justify-center order-1 lg:order-none">
                    <img
                        className="w-[35px] lg:w-[65px] h-auto object-contain"
                        alt="Mimey"
                        src={MIMEY1}
                    />
                </div>

                {/* 404 Block - Center */}
                <div className="flex flex-col items-center gap-2 lg:gap-4 order-2 lg:order-none">
                    <div className="w-[160px] lg:w-[280px] h-[100px] lg:h-[200px] border border-dashed border-black flex items-center justify-center">
                        <span className="font-normal text-black text-[60px] lg:text-[120px] tracking-tight leading-none">
                            404
                        </span>
                    </div>
                    <div className="w-[160px] lg:w-[280px] h-[35px] lg:h-[60px] border border-dashed border-black flex items-center justify-center">
                        <span className="font-normal text-black text-[14px] lg:text-[22px] tracking-tight">
                            page not found
                        </span>
                    </div>
                </div>

                {/* Marcel - Right side on desktop, inline on mobile */}
                <div className="lg:absolute lg:right-[10%] w-[60px] h-[100px] lg:w-[140px] lg:h-[260px] flex items-center justify-center order-3 lg:order-none">
                    <img
                        className="w-[40px] lg:w-[80px] h-auto object-contain"
                        alt="Marcel outline"
                        src={marcelOutline1}
                    />
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full border-b border-dashed border-black flex flex-col items-center py-3 lg:py-14 gap-2 lg:gap-6">
                {/* Links Row */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-16">
                    <div className="w-[140px] lg:w-[200px] h-[32px] lg:h-[60px] border border-dashed border-black flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="font-normal text-black text-[14px] lg:text-[22px]">X</span>
                    </div>
                    <div className="w-[140px] lg:w-[200px] h-[32px] lg:h-[60px] border border-dashed border-black flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="font-normal text-black text-[14px] lg:text-[22px]">magasin</span>
                    </div>
                    <div className="w-[140px] lg:w-[200px] h-[32px] lg:h-[60px] border border-dashed border-black flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="font-normal text-black text-[14px] lg:text-[22px]">la boulangerie</span>
                    </div>
                </div>

                {/* Hand Logo */}
                <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] flex items-center justify-center mt-1 lg:mt-4 animate-float">
                    <img
                        className="w-[28px] lg:w-[55px] h-auto object-contain"
                        alt="MxM hand logo"
                        src={mxmHandLogo1}
                    />
                </div>
            </footer>
        </div>
    );
};
