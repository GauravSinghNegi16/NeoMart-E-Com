import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
    {
        id: 1,
        title: "Elegant Jewelry Collection",
        subtitle: "Timeless designs crafted for every special moment.",
        img: "/Images/Hero-01.avif",
    },
    {
        id: 2,
        title: "Exclusive Gaming Gear",
        subtitle: "Level up your play with premium consoles & accessories.",
        img: "/Images/Hero-02.jpg",
    },
    {
        id: 3,
        title: "Trendy Men’s & Women’s Clothing",
        subtitle: "Fashion that defines your style, for every occasion.",
        img: "/Images/Herp-03.avif",
    },
];

function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="w-full relative overflow-hidden">
            {/* Slides Wrapper */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full flex-shrink-0 relative aspect-[11/9] md:aspect-[9/6] lg:aspect-[14/6]"
                    >
                        <img
                            src={slide.img}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 md:bottom-12 left-4 md:left-12 text-left max-w-lg">
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
                                {slide.title}
                            </h1>
                            <p className="text-sm sm:text-base md:text-xl text-gray-200 drop-shadow-md mt-2 md:mt-5">
                                {slide.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 md:left-5 transform -translate-y-1/2 text-white bg-black/40 p-2 md:p-3 rounded-full hover:bg-opacity-70 z-30"
            >
                <FaArrowLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 md:right-5 transform -translate-y-1/2 text-white bg-black/40 p-2 md:p-3 rounded-full hover:bg-opacity-70 z-30"
            >
                <FaArrowRight size={20} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-30">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${
                            index === current ? "bg-white" : "bg-gray-400"
                        }`}
                        onClick={() => setCurrent(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Hero;
