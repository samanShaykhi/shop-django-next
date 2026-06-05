"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const slides = [
    {
        id: 1,
        title: "عنوان اسلاید اول",
        text: "این یک توضیح کوتاه برای اسلاید اول است.",
        img: "/images/sliders/2.webp",
        bg: "#f0e3db",
    },
    {
        id: 2,
        title: "عنوان اسلاید دوم",
        text: "این یک توضیح کوتاه برای اسلاید دوم است.",
        img: "/images/sliders/1.webp",
        bg: "#ead4ca",
    },
];

export default function FullscreenSlider() {
    const [index, setIndex] = useState<number>(0);
    const intervalRef = useRef<number | null>(null);

    const startTimer = () => {
        intervalRef.current = window.setInterval(() => {
            setIndex((p) => (p + 1) % slides.length);
        }, 8000);
    };

    const resetTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startTimer();
    };

    const next = () => {
        setIndex((p) => (p + 1) % slides.length);
        resetTimer();
    };

    const prev = () => {
        setIndex((p) => (p - 1 + slides.length) % slides.length);
        resetTimer();
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div
            className="w-screen overflow-hidden relative text-white select-none h-[80vh]"
            style={{ background: slides[index].bg }}
        >
            <button
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition"
            >
                <FaChevronLeft size={36} color="black" />
            </button>

            <button
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition"
            >
                <FaChevronRight size={36} color="black" />
            </button>

            <div className="w-full h-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slides[index].id}
                        className="absolute inset-0 flex"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        onPanEnd={(_, info) => {
                            if (info.offset.x < -80) next();
                            if (info.offset.x > 80) prev();
                        }}
                    >
                        <div className="w-1/2 h-full flex flex-col justify-center px-20 space-y-6">
                            <h1 className="text-6xl font-bold">
                                {slides[index].title}
                            </h1>
                            <p className="text-xl opacity-90 max-w-md">
                                {slides[index].text}
                            </p>
                        </div>

                        <div className="w-1/2 h-full relative">
                            <Image
                                src={slides[index].img}
                                alt="slider"
                                fill
                                className="object-cover pointer-events-none"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
